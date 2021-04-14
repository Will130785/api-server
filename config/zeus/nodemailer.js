const nodemailer = require('nodemailer')

const sendMail = (email, source) => {
  // async..await is not allowed in global scope, must use a wrapper
  async function main () {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // const testAccount = await nodemailer.createTestAccount()

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'imap.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'shondellsjimothy@gmail.com', // generated ethereal user
        pass: 'JimothyShondells1@' // generated ethereal password
      }
    })
    // send mail with defined transport object
    if (source === 'form') {
      const info = await transporter.sendMail({
        from: `${email.email}`, // sender address
        to: 'will_constable@msn.com', // list of receivers
        subject: `You have an email from ${email.name}`, // Subject line
        text: `${email.message}`, // plain text body
        html: `<p><b>Hi Jim</b></p>
               <p>You have recieved a new message from ${email.name}</p>
               <p>Telephone: ${email.contact}</p>
               <p>${email.message}</p>
               <p style="color: red;"><b>This email has been sent via the jimothyshondells.com contact form</b></p>` // html body
      })
      console.log(source, email)
      console.log('Message sent: %s', info.messageId)
      console.log('Trying to send message')
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } else if (source === 'register') {
      const info = await transporter.sendMail({
        from: '"jimothyshondells.com" <shondellsjimothy@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'You have been registered', // Subject line
        text: 'Congruatulatons, you have been registered as a user of the jimothyshondells.com CMS', // plain text body
        html: '<b>Congruatulatons, you have been registered as a user of the jimothyshondells.com CMS</b>' // html body
      })

      console.log('Message sent: %s', info.messageId)
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
  }

  main().catch(console.error)
}

module.exports = sendMail
