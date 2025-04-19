import React from 'react';
import Link from 'next/link';
import { Container, Grid, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #ceb04e 0%, #e6c86e 100%)',
        color: 'white',
        py: 6,
        mt: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 -2px 20px rgba(206, 176, 78, 0.2)',
        width: '100%',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
        }}>
          {/* First Section */}
          <Box sx={{ 
            flex: 1,
            p: { xs: 2, sm: 3, md: 4 },
            borderRight: { md: '1px solid rgba(255, 255, 255, 0.1)' },
            borderBottom: { xs: '1px solid rgba(255, 255, 255, 0.1)', md: 'none' },
            pb: { xs: 3, md: 0 },
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'white',
                fontFamily: "'Bitter', serif",
                fontWeight: 700,
                letterSpacing: '0.1em',
                mb: 2,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              AURÊA
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontFamily: "'Montserrat', sans-serif",
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Accompagner votre transition énergétique avec des solutions durables.
            </Typography>
          </Box>

          {/* Second Section */}
          <Box sx={{ 
            flex: 1,
            p: { xs: 2, sm: 3, md: 4 },
            borderRight: { md: '1px solid rgba(255, 255, 255, 0.1)' },
            borderBottom: { xs: '1px solid rgba(255, 255, 255, 0.1)', md: 'none' },
            pb: { xs: 3, md: 0 },
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontFamily: "'Bitter', serif",
                fontWeight: 600,
                letterSpacing: '0.05em',
                mb: 2,
              }}
            >
              Liens Rapides
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { en: 'Home', fr: 'Accueil' },
                { en: 'About', fr: 'À propos' },
                { en: 'Services', fr: 'Services' },
                { en: 'Contact', fr: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.en}
                  href={`/${item.en.toLowerCase()}`}
                  style={{ 
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: "'Montserrat', sans-serif",
                    opacity: 0.9,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {item.fr}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Third Section */}
          <Box sx={{ 
            flex: 1,
            p: { xs: 2, sm: 3, md: 4 },
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontFamily: "'Bitter', serif",
                fontWeight: 600,
                letterSpacing: '0.05em',
                mb: 2,
              }}
            >
              Informations de Contact
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontFamily: "'Montserrat', sans-serif",
                opacity: 0.9,
                lineHeight: 1.8,
              }}
            >
              Email: aurea.expertise@gmail.com
              <br />
              Téléphone: 06.82.94.03.52
              <br />
              Adresse: 51240 SAINT-GERMAIN-LA-VILLE
            </Typography>
          </Box>
        </Box>

        <Box 
          mt={4} 
          pt={3} 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
          }}
        >
          <Typography 
            variant="body2" 
            align="center"
            sx={{ 
              fontFamily: "'Montserrat', sans-serif",
              opacity: 0.8,
            }}
          >
            © {new Date().getFullYear()} AURÊA. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 