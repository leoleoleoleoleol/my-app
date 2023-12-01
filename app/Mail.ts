import {NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method ==='POST') {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_KEY);

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_KEY);

        const msgToManager = {
            to: 'peishim18works@gmail.com',
            from: 'peishim18works@gmail.com',
            subject: 'ポートフォリオサイトからのお問い合わせ',
            text: req.body.name + '様からお問い合わせがありました。' + 'メッセージ:' + req.body.message + ’アドレス:' + req.body.email,
            html:`
            <p>[名前]</p>
            <p>${req.body.name}</p>
            <p>[メールアドレス]</p>
            <p>${req.body.email}</p>
            <p>[メッセージ内容]</p>
            <p>${req.body.message}</p>
           `, 
        };

        const msgToUser = {
            to: req.body.email,
            from: 'peishim18works@gmail.com'
            subject: 'お問い合わせありがとうございました。',
            text: 'お問い合わせを受け付けました。回答をお待ちください。' + req.body.message,
            html: `
            <p>${req.body.message}</p>
            `,
        };

        (async () => {
            try{
                await sgMail.send(msgToManager);
                await sgMail.send(msgToUser);
                res.status(200).json(msgToUser);
            } catch (error: any){
                console.log(error);
                res.status(500).json(error);
            }
        })();
    }
  }