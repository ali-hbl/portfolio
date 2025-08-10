'use server';

import ContactFormEmail from '@/email/ContactFormEmail';
import { getErrorMessage } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailResult = { data: unknown; error?: undefined } | { error: string; data?: undefined };

const isValidString = (v: FormDataEntryValue | null, max = 200) =>
  typeof v === 'string' && v.trim().length > 0 && v.trim().length <= max;

export const sendEmail = async (formData: FormData): Promise<SendEmailResult> => {
  const senderEmailRaw = formData.get('email');
  const messageRaw = formData.get('message');
  const honeypot = formData.get('company'); // champ caché optionnel

  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    // bot probable
    return { error: 'Unable to send message.' };
  }

  if (!isValidString(senderEmailRaw, 200)) {
    return { error: 'Adresse e-mail invalide.' };
  }
  if (!isValidString(messageRaw, 5000)) {
    return { error: 'Message invalide.' };
  }

  const senderEmail = (senderEmailRaw as string).trim();
  const message = (messageRaw as string).trim();

  try {
    const subject = 'Nouveau message via le formulaire';
    const from = 'Portfolio aely.dev <noreply@aely.dev>'; // DOIT appartenir à un domaine vérifié dans Resend

    const payload = {
      from,
      to: 'contact@aely.dev',
      subject,
      replyTo: senderEmail, // v2+
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
      text: `Message:\n${message}\n\nDe: ${senderEmail}`,
    };

    const response = await resend.emails.send(payload);
    return { data: response };
  } catch (error: unknown) {
    console.error('[sendEmail] Resend error:', error);
    return { error: getErrorMessage(error) ?? 'Échec de l’envoi du message.' };
  }
};
