import ContactService from '@/services/contact.service';

class ContactController {
  async create(req) {
    try {
      const contact = await ContactService.create(req.body);
      
      return {
        success: true,
        message: 'Message envoyé avec succès',
        data: contact
      };
    } catch (error) {
      console.error('Contact creation error:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const contacts = await ContactService.findAll();
      
      return {
        success: true,
        data: contacts
      };
    } catch (error) {
      console.error('Contacts fetch error:', error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const contact = await ContactService.findById(id);
      
      return {
        success: true,
        data: contact
      };
    } catch (error) {
      console.error('Contact fetch error:', error);
      throw error;
    }
  }

  async updateStatus(id, status) {
    try {
      const contact = await ContactService.updateStatus(id, status);
      
      return {
        success: true,
        data: contact
      };
    } catch (error) {
      console.error('Contact update error:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      await ContactService.delete(id);
      
      return {
        success: true,
        message: 'Contact supprimé avec succès'
      };
    } catch (error) {
      console.error('Contact deletion error:', error);
      throw error;
    }
  }
}

// Export as singleton
export default new ContactController(); 