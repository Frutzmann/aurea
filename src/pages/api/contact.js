import { supabase } from '../../lib/supabase';

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

    // Validate required fields
    if (!firstname || !lastname || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

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