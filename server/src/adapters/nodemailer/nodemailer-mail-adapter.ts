import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5fda33af1dd097",
        pass: "182fcf5bef35af"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Matheus Silva <matheusmagdevelop@gmail.com>',
            subject,
            html: body
        });
   }
}