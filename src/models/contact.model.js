class Contact {
  constructor(data) {
    this.id = data.id;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.company_name = data.company_name;
    this.email = data.email;
    this.phone = data.phone;
    this.message = data.message;
    this.status = data.status || 'new';
    this.created_at = data.created_at || new Date().toISOString();
  }

  validate() {
    const errors = [];

    // Required fields
    if (!this.firstname?.trim()) errors.push('Le prénom est requis');
    if (!this.lastname?.trim()) errors.push('Le nom est requis');
    if (!this.email?.trim()) errors.push('L\'email est requis');
    if (!this.message?.trim()) errors.push('Le message est requis');
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.email && !emailRegex.test(this.email)) {
      errors.push('Format d\'email invalide');
    }

    // Phone format validation (optional)
    // Accepts international format with optional spaces, dashes, and parentheses
    // Examples: +33612345678, +1 (555) 123-4567, 06 12 34 56 78
    if (this.phone) {
      const phoneRegex = /^\+?(?:[0-9] ?){6,14}[0-9]$/;
      if (!phoneRegex.test(this.phone.replace(/[-()]/g, ''))) {
        errors.push('Format de téléphone invalide');
      }
    }

    return errors;
  }

  toJSON() {
    return {
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      company_name: this.company_name,
      email: this.email,
      phone: this.phone,
      message: this.message,
      status: this.status,
      created_at: this.created_at
    };
  }

  static fromJSON(json) {
    return new Contact(json);
  }
}

export default Contact; 