'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { motion,  } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';

export default function About() {
  return (
    <Box 
      sx={{ 
        py: { xs: 4, md: 8 },
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #ceb04e 0%, #e6c86e 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: { xs: 6, md: 10 },
          width: '100%',
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
              À propos d'Aurêa
            </Typography>
            <Typography 
              variant="h5" 
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
              Une expertise en ingénierie structurelle et études photovoltaïques
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Introduction Section */}
        <Grid 
          container 
          spacing={8} 
          alignItems="flex-start"
          sx={{ 
            mb: { xs: 8, md: 12 },
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Grid 
            item 
            xs={12} 
            md={6}
            sx={{
              flex: 1,
              width: { xs: '100%', md: '50%' }
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.2
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
                Aurore Millot
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3
                }}
              >
                Ingénieure structure depuis 10 ans, j'ai choisi de donner un nouveau souffle à ma carrière en 2024,
                en créant ma société.
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3
                }}
              >
                Un projet qui sonne comme un renouveau et qui me donne l'opportunité d'allier mes compétences
                et mes valeurs au quotidien.
              </Typography>
              <Box sx={{ maxWidth: 600, mx: 'auto', my: 6, px: { xs: 2, sm: 4 } }}>
                <Box
                  sx={{
                    background: '#fffbea',
                    border: '1px solid #ceb04e',
                    borderRadius: 3,
                    px: { xs: 2, sm: 4 },
                    py: { xs: 3, sm: 4 },
                    boxShadow: '0 2px 12px rgba(206, 176, 78, 0.07)',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: { xs: '1rem', sm: '1.15rem' },
                      color: '#555',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      lineHeight: 1.7,
                      display: 'inline',
                    }}
                  >
                    <span style={{
                      color: '#ceb04e',       
                      fontFamily: "'Montserrat', sans-serif",
                      verticalAlign: 'middle',
                      marginRight: '8px',
                    }}>&ldquo;</span>     
                    A mes yeux, une étude n&apos;est pas seulement un numéro de dossier.<br />
                    Il me parait fondamental d&apos;être à l&apos;écoute de chaque client et de mettre mes connaissances à son service, afin de l&apos;accompagner dans ses démarches et sa réflexion. C&apos;est en m&apos;appuyant sur ces valeurs que j&apos;ai fondé Aurêa.
                    <span style={{
                      color: '#ceb04e',                
                      fontFamily: "'Montserrat', sans-serif",
                      verticalAlign: 'middle',
                      marginLeft: '8px',
                    }}>&rdquo;</span>
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={6}
            sx={{
              flex: 1,
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.4
              }}
              style={{ width: '100%' }}
            >
              <Box
                component="img"
                src="/images/about/about.jpg"
                alt="Aurore Millot"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '500px',
                  display: 'block',
                  margin: '0 auto',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)'
                  }
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Parcours Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.6
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: "'Bitter', serif",
                fontWeight: 600,
                mb: 4,
                color: '#333',
                textAlign: 'center',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 2,
                  background: 'linear-gradient(90deg, #ceb04e, #e6c86e)',
                }
              }}
            >
              Mon parcours
            </Typography>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 3, md: 5 },
                borderRadius: 2,
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',                border: '1px solid rgba(206, 176, 78, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              <Typography 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3,
                }}
              >
                Ingénieure structures depuis 2014.
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3,
                }}
              >
                J'ai fait mes débuts dans une entreprise de charpente métallique champenoise où j'ai développé mes
                compétences en conception et en dimensionnement de bâtiments neufs, mais aussi dans le
                domaine de la conduite de travaux.
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#555',
                }}
              >
                J'ai ensuite poursuivi ma carrière au sein d'une entreprise photovoltaïque implantée dans la Marne,
                en alliant le métier d'ingénieure bureau d'études, responsable de la vérification et de la validation
                des bâtiments destinés à recevoir les panneaux photovoltaïques ; et le métier de conductrice de
                travaux, en charge des équipes rénovation (couverture, gouttières et renforts de structures) sur des
                bâtiments communaux, agricoles et industriels.
              </Typography>
            </Paper>
          </motion.div>
        </Box>

        {/* Compétences Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.8
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: "'Bitter', serif",
                fontWeight: 600,
                mb: 4,
                color: '#333',
                textAlign: 'center',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 2,
                  background: 'linear-gradient(90deg, #ceb04e, #e6c86e)',
                }
              }}
            >
              Mes domaines de compétences
            </Typography>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 3, md: 5 },
                borderRadius: 2,
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(206, 176, 78, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              <List>
                {[
                  'Conception et dimensionnement de bâtiments neufs',
                  'Note de calcul et descente de charges',
                  'Vérification et validation de bâtiments existants',
                  'Conduite de travaux sur bâtiments neufs et rénovations (couverture, gouttières, renforts de structures)',
                  'Bâtiments communaux, agricoles et industriels',
                  'Assistance à maîtrise d\'ouvrage',
                  'Etudes photovoltaïques',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1 * index,
                      type: 'spring',
                      stiffness: 100,
                      damping: 20
                    }}
                  >
                    <ListItem sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircleOutlineIcon sx={{ 
                          color: '#ceb04e',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.2)',
                          }
                        }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item} 
                        sx={{ 
                          '& .MuiListItemText-primary': {
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '1.1rem',
                            color: '#555',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: '#ceb04e',
                            }
                          }
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Paper>
          </motion.div>
        </Box>

        {/* CTA Section */}
        <Box 
          sx={{ 
            textAlign: 'center',
            py: { xs: 6, md: 8 },
            background: 'linear-gradient(135deg, rgba(206, 176, 78, 0.1) 0%, rgba(230, 200, 110, 0.1) 100%)',
            width: '100%',
            mb: { xs: 6, md: 8 },
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
              zIndex: 1,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 1
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
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 60,
                    height: 2,
                    background: 'linear-gradient(90deg, #ceb04e, #e6c86e)',
                  }
                }}
              >
                Prêt à concrétiser votre projet ?
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#555',
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Contactez-moi pour discuter de votre projet et découvrir comment je peux vous accompagner dans votre transition énergétique.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ position: 'relative', zIndex: 10 }}
              >
                <a 
                  href="/contact" 
                  style={{ 
                    display: 'inline-block',
                    padding: '12px 32px',
                    backgroundColor: '#ceb04e',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(206, 176, 78, 0.2)',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#b89a3e';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(206, 176, 78, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#ceb04e';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(206, 176, 78, 0.2)';
                  }}
                >
                  Me contacter
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
