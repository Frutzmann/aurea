import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const AdminNotificationEmail = ({ firstname, lastname, company_name, email, phone, message }) => ({
  subject: `Nouveau message de ${firstname} ${lastname}`,
  html: `
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> ${firstname} ${lastname}</p>
    ${company_name ? `<p><strong>Entreprise:</strong> ${company_name}</p>` : ''}
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `
});

const UserConfirmationEmail = ({ firstname, lastname }) => ({
  subject: 'Confirmation de votre message - Aurêa',
  html: `
    <h2>Merci de nous avoir contacté</h2>
    <p>Cher(e) ${firstname} ${lastname},</p>
    <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
    <p>Nous vous répondrons dans les plus brefs délais.</p>
    <br/>
    <p>Cordialement,</p>
    <p>Aurore MILLOT<br/>Aurêa</p>
  `
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstname, lastname, company_name, email, phone, message } = req.body;

    // Store in Supabase
    const { data, error: supabaseError } = await supabase
      .from('contacts')
      .insert([
        {
          firstname,
          lastname,
          company_name,
          email,
          phone,
          message,
          status: 'new',
          created_at: new Date().toISOString(),
        }
      ])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return res.status(500).json({ error: 'Error storing contact' });
    }

    // Send notification email to admin
    await resend.emails.send({
      from: 'Aurêa Contact <contact@aurea.fr>',
      to: 'aurea.expertise@gmail.com',
      ...AdminNotificationEmail({ firstname, lastname, company_name, email, phone, message })
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Aurêa <contact@aurea.fr>',
      to: email,
      ...UserConfirmationEmail({ firstname, lastname })
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès' 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Une erreur est survenue lors de l\'envoi du message' 
    });
  }
} 