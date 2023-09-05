// import { NextApiRequest, NextApiResponse } from "next";
// // import sgMail, { MailDataRequired } from "@sendgrid/mail";
// import data from "../../data/config.json";
//
// sgMail.setApiKey(data.email.api_key);
//
// export default async function handler (req: NextApiRequest, res: NextApiResponse) {
//     const { to, body } = req.body;
//
//     const msg: MailDataRequired = {
//         to,
//         from: data.email.authorized_sender,
//         subject: "This Email Coming from Search My Expert",
//         text: body,
//     };
//
//     try {
//         await sgMail.send(msg);
//         console.log("Email sent successfully");
//         res.status(200).json({ success: true, message: "Email sent successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "An error occurred while sending the email" });
//     }
// }
