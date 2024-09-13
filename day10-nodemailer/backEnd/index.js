

//ttps://node-1-vla7.onrender.com
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import "dotenv/config";
import kickbox from 'kickbox';

const PORT = 8080;
const app = express();

// Middleware->this is for cross origin resource sharing   (most importtant)
// app.use(cors({ origin: 'https://node-1-vla7.onrender.com' }));

app.use(cors({origin:'*'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/sendEmail', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please provide name, email, and message.' });
    }

    // Kickbox API to verify email-> https://www.kickbox.io--for use verify the email it is correct or not

    const kb = kickbox.client(process.env.KICKBOX_API_KEY).kickbox();

    kb.verify(email, async function (err, response) {
        if (err) {
            return res.status(500).json({ message: 'Error verifying email. Please try again later.' });
        }

        if (response && response.body.result === "deliverable") {
            // Nodemailer setup->it is use to send mail to the server owner
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                },
            });

            // Prepare the email message-we can modify right side part acording to our need

            const mailOptions = {
                from: process.env.EMAIL,
                to: process.env.EMAIL,
                subject: 'Message from Website Contact Form',
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            };

            try {
                // Send the email
                await transporter.sendMail(mailOptions);
                res.status(200).json({ message: 'Email sent successfully.' });
            } catch (error) {
                res.status(500).json({ message: 'Failed to send email. Please try again later.' });
            }
        } else {
            res.status(400).json({ message: 'Invalid email address.' });
        }
    });
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
