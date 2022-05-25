require('dotenv').config()

module.exports = {
    connection: {
        user: process.env.SMTP_USER, 
        password: process.env.SMTP_PASSWORD,
        host: process.env.SMTP_HOST,
        ssl: true
    }, 
    adminEmail: process.env.SMTP_ADMIN_EMAIL
}