import { supabase } from '@/lib/supabase';
import Contact from '@/models/contact.model';
import { v4 as uuidv4 } from 'uuid';
import EmailService from './email.service';

class ContactService {
  constructor() {
    this.tableName = 'contacts';
  }

  async create(contactData) {
    // Create and validate contact model
    const contact = new Contact({id: uuidv4(), ...contactData});
    const validationErrors = contact.validate();
    
    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join(', '));
    }

    try {
      // Insert into database
      const { data, error } = await supabase
        .from(this.tableName)
        .insert([contact.toJSON()])
        .select()
        .single();

      if (error) {
        console.error('Database error:', error);
        throw new Error('Erreur lors de l\'enregistrement du contact');
      }

      // Send confirmation email to user
      // await EmailService.sendContactConfirmation(contact);

      // Send notification email to admin
      // await EmailService.sendAdminNotification(contact);

      return Contact.fromJSON(data);
    } catch (error) {
      console.error('Service error:', error);
      throw error;
    }
  }

  async findAll() {
    const { data, error } = await supabase
      .from(this.tableName)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      throw new Error('Erreur lors de la récupération des contacts');
    }

    return data.map(contact => Contact.fromJSON(contact));
  }

  async findById(id) {
    const { data, error } = await supabase
      .from(this.tableName)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Database error:', error);
      throw new Error('Contact non trouvé');
    }

    return Contact.fromJSON(data);
  }

  async updateStatus(id, status) {
    const { data, error } = await supabase
      .from(this.tableName)
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      throw new Error('Erreur lors de la mise à jour du statut');
    }

    return Contact.fromJSON(data);
  }

  async delete(id) {
    const { error } = await supabase
      .from(this.tableName)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Database error:', error);
      throw new Error('Erreur lors de la suppression du contact');
    }

    return true;
  }
}

// Export as singleton
export default new ContactService(); 