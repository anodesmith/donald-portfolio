'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get('name');
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // Basic validation
  if (!name || !senderEmail || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sdonald565@gmail.com',
      subject: `New Message from ${name} (Portfolio)`,
      reply_to: senderEmail,
      text: `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('System Error:', err);
    return { success: false, error: 'Internal server error.' };
  }
}
