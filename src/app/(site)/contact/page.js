'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
  Alert,
  Snackbar,
  CircularProgress,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person'; 
import { ContactAPI } from '@/lib/api/client';

// Phone country codes
const countryCodes = [
  { code: '+33', label: 'France (+33)' },
  { code: '+32', label: 'Belgique (+32)' },
  { code: '+352', label: 'Luxembourg (+352)' },
  { code: '+41', label: 'Suisse (+41)' },
  { code: '+49', label: 'Allemagne (+49)' },
];

const errorMessages = {
  firstname: 'Le prénom est requis',
  lastname: 'Le nom est requis',
  email: 'L&apos;email est requis',
  emailFormat: 'Format d&apos;email invalide',
  phone: 'Format de téléphone invalide',
  message: 'Le message est requis',
  error: 'Une erreur est survenue lors de l&apos;envoi du message',
  success: 'Votre message a été envoyé avec succès'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    company_name: '',
    email: '',
    countryCode: '+33',
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const [imageModal, setImageModal] = useState({ open: false, src: '', alt: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Combine country code and phone number
      const phone = formData.phoneNumber ? `${formData.countryCode}${formData.phoneNumber.replace(/^0+/, '')}` : '';
      
      const response = await ContactAPI.create({
        ...formData,
        phone,
      });

      setFormData({
        firstname: '',
        lastname: '',
        company_name: '',
        email: '',
        countryCode: '+33',
        phoneNumber: '',
        message: '',
      });

      setSnackbar({
        open: true,
        message: response.message,
        severity: 'success'
      });

    } catch (error) {
      console.error('Error:', error);
      setSnackbar({
        open: true,
        message: error.message,
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(206, 176, 78, 0.2)',
        transition: 'border-color 0.3s ease'
      },
      '&:hover fieldset': {
        borderColor: '#ceb04e'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ceb04e'
      }
    },
    '& .MuiInputLabel-root': {
      color: '#666',
      '&.Mui-focused': {
        color: '#ceb04e'
      }
    },
    '& .MuiInputAdornment-root .MuiSvgIcon-root': {
      color: '#ceb04e'
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f9f9f9' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #ceb04e 0%, #e6c86e 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 20
            }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{
                fontFamily: "'Bitter', serif",
                fontWeight: 400,
                mb: 3,
                color: 'white',
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '0.02em'
              }}
            >
              Contactez-moi
            </Typography>
            <Typography 
              sx={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                color: 'white',
                opacity: 0.9,
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                letterSpacing: '0.01em',
                lineHeight: 1.6
              }}
            >
              Discutons de votre projet et découvrons comment je peux vous accompagner
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Premier rendez-vous section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, rgba(206, 176, 78, 0.1) 0%, rgba(230, 200, 110, 0.1) 100%)',
              borderRadius: 2,
              border: '1px solid rgba(206, 176, 78, 0.2)',
              p: { xs: 3, md: 4 },
              mb: 6,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '800px',
              mx: 'auto',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(206, 176, 78, 0.1) 0%, rgba(206, 176, 78, 0) 70%)',
                zIndex: 1
              }
            }}
          >
            <Typography 
              variant="h4"
              sx={{ 
                fontFamily: "'Bitter', serif",
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 600,
                color: '#ceb04e',
                mb: 2,
                position: 'relative',
                zIndex: 2
              }}
            >
              Premier rendez-vous gratuit et sans engagement
            </Typography>
            <Typography 
              sx={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                color: '#555',
                fontStyle: 'italic',
                position: 'relative',
                zIndex: 2,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              &quot;Mon engagement est d&apos;offrir un service et un accompagnement exceptionnels à tous mes clients. Votre satisfaction est ma priorité.&quot;
            </Typography>
            <Typography 
              sx={{ 
                fontFamily: "'Bitter', serif",
                fontWeight: 600,
                mt: 2,
                color: '#ceb04e',
                position: 'relative',
                zIndex: 2
              }}
            >
              Aurore MILLOT — Aurêa
            </Typography>
          </Box>
        </motion.div>

        {/* Service Area section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: 6,
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '100%', md: '500px' },
                height: '1px',
                background: 'linear-gradient(90deg, rgba(206, 176, 78, 0) 0%, rgba(206, 176, 78, 0.5) 25%, rgba(206, 176, 78, 0.5) 75%, rgba(206, 176, 78, 0) 100%)',
                zIndex: 1
              }
            }}
          >
            <Typography 
              variant="h5"
              component="div"
              sx={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                fontWeight: 500,
                color: '#555',
                display: 'inline-block',
                backgroundColor: '#f9f9f9',
                px: 3,
                position: 'relative',
                zIndex: 2
              }}
            >
              J&apos;interviens sur toute la Champagne-Ardenne
            </Typography>
          </Box>
        </motion.div>

        {/* Contact cards container */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'flex-start',
            mb: 8
          }}
        >
          {/* Form Card */}
          {/*
          <Box 
            sx={{ 
              flex: { xs: '1', md: '1.5' },
              width: '100%'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper 
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(206, 176, 78, 0.2)',
                  height: '100%'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{
                    fontFamily: "'Bitter', serif",
                    fontWeight: 600,
                    mb: 3,
                    color: '#333',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 2,
                      background: 'linear-gradient(90deg, #ceb04e, #e6c86e)'
                    }
                  }}
                >
                  Envoyez-nous un message
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#555',
                    mb: 4
                  }}
                >
                  Des questions ? Envie d&apos;un rendez-vous ? Je suis là pour vous aider. Remplissez le formulaire. Je vous recontacte dans les plus brefs délais.
                </Typography>

                <Box 
                  component="form" 
                  onSubmit={handleSubmit}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    label="Prénom"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    disabled={loading}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      ...textFieldStyles,
                      '& .MuiOutlinedInput-root': {
                        ...textFieldStyles['& .MuiOutlinedInput-root'],
                        height: '56px'
                      }
                    }}
                  />

                  <TextField
                    required
                    fullWidth
                    label="Nom"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    disabled={loading}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      ...textFieldStyles,
                      '& .MuiOutlinedInput-root': {
                        ...textFieldStyles['& .MuiOutlinedInput-root'],
                        height: '56px'
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Entreprise (optionnel)"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    disabled={loading}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      ...textFieldStyles,
                      '& .MuiOutlinedInput-root': {
                        ...textFieldStyles['& .MuiOutlinedInput-root'],
                        height: '56px'
                      }
                    }}
                  />

                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      ...textFieldStyles,
                      '& .MuiOutlinedInput-root': {
                        ...textFieldStyles['& .MuiOutlinedInput-root'],
                        height: '56px'
                      }
                    }}
                  />

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <FormControl sx={{ width: '30%' }}>
                      <InputLabel id="country-code-label">Indicatif</InputLabel>
                      <Select
                        labelId="country-code-label"
                        id="country-code"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        disabled={loading}
                        sx={{
                          height: '56px',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(206, 176, 78, 0.2)',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#ceb04e',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#ceb04e',
                          },
                        }}
                      >
                        {countryCodes.map((country) => (
                          <MenuItem key={country.code} value={country.code}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      disabled={loading}
                      variant="outlined"
                      placeholder="06 12 34 56 78"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        flex: 1,
                        '& .MuiOutlinedInput-root': {
                          height: '56px',
                          '& fieldset': {
                            borderColor: 'rgba(206, 176, 78, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ceb04e',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ceb04e',
                          },
                        },
                      }}
                    />
                  </Box>

                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    variant="outlined"
                    sx={{
                      ...textFieldStyles,
                      '& .MuiOutlinedInput-root': {
                        ...textFieldStyles['& .MuiOutlinedInput-root'],
                        minHeight: '160px'
                      }
                    }}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={loading}
                      sx={{
                        backgroundColor: '#ceb04e',
                        color: 'white',
                        py: 2,
                        px: 4,
                        height: '56px',
                        fontSize: '1.1rem',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        textTransform: 'none',
                        borderRadius: 1,
                        boxShadow: '0 4px 12px rgba(206, 176, 78, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#b89a3e',
                          boxShadow: '0 6px 16px rgba(206, 176, 78, 0.3)'
                        }
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Envoyer le message'
                      )}
                    </Button>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Box>
          */}

          {/* Contact Information Card */}
          <Box 
            sx={{ 
              flex: 1,
              width: '100%',
              mt: { xs: 4, md: 0 },
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper 
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(206, 176, 78, 0.2)',
                  height: '100%',
                  maxWidth: '500px',
                  width: '100%'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{
                    fontFamily: "'Bitter', serif",
                    fontWeight: 600,
                    mb: 4,
                    color: '#333',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 2,
                      background: 'linear-gradient(90deg, #ceb04e, #e6c86e)'
                    }
                  }}
                >
                  Informations de contact
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <LocationOnIcon sx={{ color: '#ceb04e', mr: 2, mt: 0.5, fontSize: '2rem' }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontFamily: "'Bitter', serif",
                          color: '#333',
                          mb: 1,
                          fontSize: '1.2rem'
                        }}
                      >
                        Adresse
                      </Typography>
                      <Typography sx={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: '#555'
                      }}>
                        Aurêa<br />
                        Aurore MILLOT<br />
                        51240 SAINT-GERMAIN-LA-VILLE
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <PhoneIcon sx={{ color: '#ceb04e', mr: 2, mt: 0.5, fontSize: '2rem' }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontFamily: "'Bitter', serif",
                          color: '#333',
                          mb: 1,
                          fontSize: '1.2rem'
                        }}
                      >
                        Téléphone
                      </Typography>
                      <Typography sx={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: '#555'
                      }}>
                        06.82.94.03.52
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <EmailIcon sx={{ color: '#ceb04e', mr: 2, mt: 0.5, fontSize: '2rem' }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontFamily: "'Bitter', serif",
                          color: '#333',
                          mb: 1,
                          fontSize: '1.2rem'
                        }}
                      >
                        Email
                      </Typography>
                      <Typography sx={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: '#555'
                      }}>
                        aurea.expertise@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <LinkedInIcon sx={{ color: '#ceb04e', mr: 2, mt: 0.5, fontSize: '2rem' }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontFamily: "'Bitter', serif",
                          color: '#333',
                          mb: 1,
                          fontSize: '1.2rem'
                        }}
                      >
                        LinkedIn
                      </Typography>
                      <Link 
                        href="https://www.linkedin.com/in/aurore-millot-08a02a1aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                          color: '#ceb04e',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: '#b89a3e',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Aurêa sur LinkedIn
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AccessTimeIcon sx={{ color: '#ceb04e', mr: 2, mt: 0.5, fontSize: '2rem' }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontFamily: "'Bitter', serif",
                          color: '#333',
                          mb: 1,
                          fontSize: '1.2rem'
                        }}
                      >
                        Horaires
                      </Typography>
                      <Typography sx={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: '#555'
                      }}>
                        Du lundi au vendredi : 8h30 - 18h30
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
        
      </Container>

      {/* Maps Section - Now positioned after the contact cards */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 6,
                fontWeight: 700,
                color: '#ceb04e',
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '0.02em',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 3,
                  background: 'linear-gradient(90deg, #ceb04e, #e6c86e)',
                  borderRadius: 2,
                }
              }}
            >
              Ma zone d'intervention
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    cursor: 'pointer',
                  }}
                  onClick={() => setImageModal({ open: true, src: '/images/contact/périmètre_d_intervention.png', alt: "Périmètre d'intervention Aurêa" })}
                >
                  <Box
                    component="img"
                    src="/images/contact/périmètre_d_intervention.png"
                    alt="Périmètre d'intervention Aurêa"
                    sx={{
                      width: '100%',
                      maxWidth: 300,
                      height: 'auto',
                      display: 'block',
                      mx: 'auto',
                      objectFit: 'contain',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.03)',
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      color: 'white',
                      p: 3,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>
                      Périmètre d'intervention
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    cursor: 'pointer',
                  }}
                  onClick={() => setImageModal({ open: true, src: '/images/contact/carte_St_Germain.jpg', alt: 'Carte de St Germain' })}
                >
                  <Box
                    component="img"
                    src="/images/contact/carte_St_Germain.jpg"
                    alt="Carte de St Germain"
                    sx={{
                      width: '100%',
                      maxWidth: 300,
                      height: 'auto',
                      display: 'block',
                      mx: 'auto',
                      objectFit: 'contain',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.03)',
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      color: 'white',
                      p: 3,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>
                      Carte de St Germain
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* Modal for enlarged image */}
            <Modal
              open={imageModal.open}
              onClose={() => setImageModal({ open: false, src: '', alt: '' })}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{ backdrop: { timeout: 500 } }}
            >
              <Fade in={imageModal.open}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    outline: 'none',
                    p: 2,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={imageModal.src}
                    alt={imageModal.alt}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: { xs: 350, sm: 500, md: 700 },
                      maxHeight: { xs: 300, sm: 400, md: 600 },
                      borderRadius: 2,
                      boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
                    }}
                  />
                </Box>
              </Fade>
            </Modal>
          </motion.div>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
} 