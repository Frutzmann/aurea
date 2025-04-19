import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL;

class EmailService {
  async sendContactConfirmation({ firstname, lastname, email }) {
    try {
      await resend.emails.send({
        from: 'Aurêa <contact@aurea-expertise.fr>',
        to: email,
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
    } catch (error) {
      console.error('Email sending error:', error);
      throw new Error('Erreur lors de l\'envoi de l\'email de confirmation');
    }
  }

  async sendAdminNotification({ firstname, lastname, company_name, email, phone, message }) {
    try {
      await resend.emails.send({
        from: 'Contact Form <contact@aurea-expertise.fr>',
        to: adminEmail,
        subject: `Nouveau message de ${firstname} ${lastname}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${firstname} ${lastname}</p>
          ${company_name ? `<p><strong>Entreprise:</strong> ${company_name}</p>` : ''}
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });
    } catch (error) {
      console.error('Email sending error:', error);
      throw new Error('Erreur lors de l\'envoi de la notification');
    }
  }
}

export default new EmailService(); 