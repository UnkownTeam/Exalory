import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.EMAIL,
  subject: "Exalory Email Verification",
};
