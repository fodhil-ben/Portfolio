const nodemailer = require('nodemailer')

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass
    }
})

export const mailInfo = {
    from: 'benhibafodhil@gmail.com',
    to: 'f.benhiba@esi-sba.dz'
}