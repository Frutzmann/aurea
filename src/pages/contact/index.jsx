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
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { theme, styles } from '../../theme';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              Contactez-nous
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
              Discutons de votre projet et découvrez comment nous pouvons vous accompagner
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
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
                  Des questions sur nos solutions ? Nous sommes là pour vous aider. Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Nom"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
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
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
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
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Téléphone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
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
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
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
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: '#ceb04e',
                            color: 'white',
                            py: 2,
                            px: 4,
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
                          Envoyer le message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
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
                  height: '100%'
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
                        123 Rue de l'Innovation<br />
                        51100 Reims<br />
                        France
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
                        +33 6 12 34 56 78
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
                        contact@aurea.fr
                      </Typography>
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
                        Lundi - Vendredi: 9h00 - 18h00<br />
                        Samedi - Dimanche: Fermé
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box 
                  sx={{ 
                    mt: 6,
                    p: 4,
                    background: 'linear-gradient(135deg, rgba(206, 176, 78, 0.1) 0%, rgba(230, 200, 110, 0.1) 100%)',
                    borderRadius: 2,
                    border: '1px solid rgba(206, 176, 78, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
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
                    sx={{ 
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      fontStyle: 'italic',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    "Notre engagement est d'offrir un service et un accompagnement exceptionnels à tous nos clients. Votre satisfaction est notre priorité."
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
                    — L'équipe AURÊA
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 