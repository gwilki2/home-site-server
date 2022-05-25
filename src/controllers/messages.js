
const { Message, Contact } = require('../models')
const smtpConfig = require('../config/smtpConfig')
const {send} = require('emailjs-gmail')(smtpConfig.connection.user, smtpConfig.connection.password)

exports.recieved = async (req, res, next) => {
    const { message, name, phone = null, email } = req.body
    

    try {
        let [contact, created] = await Contact.findOrCreate({
            where: { email }, 
            defaults: {
                name, 
                phone,
                createdAt: Date.now(), 
                updatedAt: Date.now()
            }
        })
        
        if (!created) {
            contact.name = name
            contact.phone = phone
            contact.updatedAt = Date.now()

            contact.save()
        }

        //contact = contact.toJSON()
        
        const dbMessage = await Message.create({
            message, 
            contactId: contact.id,
            createdAt: new Date(), 
            updatedAt: new Date()
        })

        const sendResponse = await send(smtpConfig.adminEmail, dbMessage.message)

        console.log('sendresponse', sendResponse)
        return res.status(200).json(dbMessage)
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: e.message})
    }

    

}