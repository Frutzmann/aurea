import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Typography, Button, Box, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { theme, styles } from '../theme';

function Home() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 10, md: 16 },
          mb: { xs: 8, md: 12 },
          overflow: 'hidden',
          minHeight: { xs: '600px', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Image
            src="/images/aurea-hero.png"
            alt="AUREA Hero Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 100%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ maxWidth: '800px' }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: 'white',
                  mb: 4,
                  fontWeight: 400,
                  fontFamily: "'Bitter', serif",
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Votre projet photovoltaïque de A à Z
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 5, 
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0.01em',
                  opacity: 0.9,
                }}
              >
                Aurêa accompagne les particuliers et les professionnels dans leur projet photovoltaïque.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#ceb04e',
                    color: 'white',
                    fontSize: '1.1rem',
                    py: 2,
                    px: 5,
                    borderRadius: 1,
                    boxShadow: '0 4px 12px rgba(206, 176, 78, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#b89a3e',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(206, 176, 78, 0.4)',
                    },
                  }}
                >
                  Démarrer votre projet
                </Button>
                <Button
                  component={Link}
                  href="/services"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontSize: '1.1rem',
                    py: 2,
                    px: 5,
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Découvrir nos services
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        {/* Solutions Section */}
        <Box sx={{ mb: { xs: 10, md: 16 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 8, 
                textAlign: 'center', 
                color: '#ceb04e',
                fontFamily: "'Bitter', serif",
                fontWeight: 400,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '0.02em',
              }}
            >
              Des solutions photovoltaïques clé en main
            </Typography>
            
            {/* Client Images Carousel */}
            <Box 
              sx={{ 
                position: 'relative',
                width: '100vw',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                overflow: 'hidden',
                mb: 8,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  animation: 'scroll 30s linear infinite',
                  '@keyframes scroll': {
                    '0%': {
                      transform: 'translateX(0)',
                    },
                    '100%': {
                      transform: 'translateX(-100%)',
                    },
                  },
                  '&:hover': {
                    animationPlayState: 'paused',
                  },
                }}
              >
                {/* First set of images */}
                {[
                  { src: '/images/clients/maison.png', alt: 'Maison particulière' },
                  { src: '/images/clients/batiments_industriels.png', alt: 'Bâtiments industriels' },
                  { src: '/images/clients/batiments_communaux.png', alt: 'Bâtiments communaux' },
                  { src: '/images/clients/batiments_agricoles.png', alt: 'Bâtiments agricoles' },
                  { src: '/images/clients/ombrières_parking.png', alt: 'Ombrières de parking' },
                ].map((image, index) => (
                  <Box
                    key={`first-${index}`}
                    sx={{
                      position: 'relative',
                      minWidth: { xs: '300px', sm: '400px', md: '500px' },
                      height: { xs: '200px', sm: '250px', md: '300px' },
                      overflow: 'hidden',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      flexShrink: 0,
                      mx: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(206, 176, 78, 0.7) 0%, rgba(230, 200, 110, 0.7) 100%)',
                        zIndex: 1,
                        transition: 'opacity 0.5s ease',
                      },
                      '&:hover::before': {
                        opacity: 0,
                      },
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      sx={{
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                        zIndex: 2,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'white',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 500,
                          textAlign: 'center',
                        }}
                      >
                        {image.alt}
                      </Typography>
                    </Box>
                    {/* Center text overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        background: 'rgba(0,0,0,0.3)',
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                          opacity: 0.9,
                        },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'white',
                          fontFamily: "'Bitter', serif",
                          fontWeight: 600,
                          textAlign: 'center',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          px: 2,
                          fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                          letterSpacing: '0.02em',
                        }}
                      >
                        {image.alt}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {[
                  { src: '/images/clients/maison.png', alt: 'Maison particulière' },
                  { src: '/images/clients/batiments_industriels.png', alt: 'Bâtiments industriels' },
                  { src: '/images/clients/batiments_communaux.png', alt: 'Bâtiments communaux' },
                  { src: '/images/clients/batiments_agricoles.png', alt: 'Bâtiments agricoles' },
                  { src: '/images/clients/ombrières_parking.png', alt: 'Ombrières de parking' },
                ].map((image, index) => (
                  <Box
                    key={`second-${index}`}
                    sx={{
                      position: 'relative',
                      minWidth: { xs: '300px', sm: '400px', md: '500px' },
                      height: { xs: '200px', sm: '250px', md: '300px' },
                      overflow: 'hidden',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      flexShrink: 0,
                      mx: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(206, 176, 78, 0.7) 0%, rgba(230, 200, 110, 0.7) 100%)',
                        zIndex: 1,
                        transition: 'opacity 0.5s ease',
                      },
                      '&:hover::before': {
                        opacity: 0,
                      },
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      sx={{
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                        zIndex: 2,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'white',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 500,
                          textAlign: 'center',
                        }}
                      >
                        {image.alt}
                      </Typography>
                    </Box>
                    {/* Center text overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        background: 'rgba(0,0,0,0.3)',
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                          opacity: 0.9,
                        },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'white',
                          fontFamily: "'Bitter', serif",
                          fontWeight: 600,
                          textAlign: 'center',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          px: 2,
                          fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                          letterSpacing: '0.02em',
                        }}
                      >
                        {image.alt}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: { xs: 4, md: 5 },
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(206, 176, 78, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 4, 
                      color: '#333',
                      fontFamily: "'Bitter', serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.01em',
                    }}
                  >
                    Lancez vous sans prise de tête
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#555',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      letterSpacing: '0.01em',
                    }}
                  >
                    Aurêa vous accompagne dans votre projet, depuis
                    l'étude de faisabilité jusqu'à la mise en service de votre installation.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: { xs: 4, md: 5 },
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(206, 176, 78, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 4, 
                      color: '#333',
                      fontFamily: "'Bitter', serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.01em',
                    }}
                  >
                    Peur d'avoir une structure trop fragile pour votre projet ?
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#555',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      letterSpacing: '0.01em',
                    }}
                  >
                    Aurêa se charge de réaliser les calculs de structure, depuis la prise de cotes jusqu'à la rédaction du
                    rapport d'étude et les préconisations de renforts.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* Pourquoi Section */}
        <Box sx={{ 
          mb: { xs: 10, md: 16 }, 
          py: { xs: 8, md: 12 }, 
          px: { xs: 4, md: 8 },
          bgcolor: 'rgba(206, 176, 78, 0.05)',
          borderRadius: 2,
          width: '100%',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 8, 
                textAlign: 'center', 
                color: '#ceb04e',
                fontFamily: "'Bitter', serif",
                fontWeight: 400,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '0.02em',
              }}
            >
              Devenez l'acteur principal de votre avenir énergétique
            </Typography>
            <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: '#555',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  letterSpacing: '0.01em',
                }}
              >
                La transition écologique, l'utilisation d'une énergie renouvelable, locale et inépuisable, les économies
                financières, ou encore les obligations liées à la loi ApER par exemple, sont autant de sujets au cœur
                des discussions aujourd'hui.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: '#555',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  letterSpacing: '0.01em',
                }}
              >
                Osez imaginer un futur plus serein, basé sur des économies financières non négligeables et une
                démarche environnementale récompensée.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#555',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  lineHeight: 1.8,
                  letterSpacing: '0.01em',
                }}
              >
                Aurêa vous aide à donner du sens à votre projet et à faire en sorte que votre toiture devienne une
                source d'énergie renouvelable et durable à portée de main.
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Accompagnement Section */}
        <Box sx={{ mb: { xs: 10, md: 16 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 8, 
                textAlign: 'center', 
                color: '#ceb04e',
                fontFamily: "'Bitter', serif",
                fontWeight: 400,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '0.02em',
              }}
            >
              Un accompagnement sur mesure
            </Typography>
            
            {/* Fixed horizontal layout with flexbox */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4,
                mb: 8,
              }}
            >
              {/* Text content */}
              <Box 
                sx={{ 
                  flex: 1,
                  order: { xs: 2, md: 1 },
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    mb: 3, 
                    color: '#333',
                    fontFamily: "'Bitter', serif",
                    fontWeight: 500,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    letterSpacing: '0.02em',
                  }}
                >
                  Un service complet
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    color: '#555',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  Aurêa prend en charge l'intégralité du projet, de l'étude de faisabilité à l'analyse économique et
                  financière jusqu'au devis.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#555',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  Je m'occupe également des démarches administratives, et assure le suivi des chantiers avec un
                  installateur photovoltaïque de confiance.
                </Typography>
              </Box>
              
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '250px', md: '300px' },
                  width: { xs: '100%', md: '40%' },
                  flex: 1,
                  order: { xs: 1, md: 2 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src="/images/hero/accompagnement_sur_mesure.png"
                  alt="Accompagnement sur mesure"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(206, 176, 78, 0.2) 0%, rgba(230, 200, 110, 0.2) 100%)',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* Structure Section */}
        <Box sx={{ 
          mb: { xs: 10, md: 16 }, 
          py: { xs: 8, md: 12 }, 
          px: { xs: 4, md: 8 },
          bgcolor: 'rgba(206, 176, 78, 0.05)',
          borderRadius: 2,
          width: '100%',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 8, 
                mt: { xs: 8, md: 12 },
                textAlign: 'center', 
                color: '#ceb04e',
                fontFamily: "'Bitter', serif",
                fontWeight: 400,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '0.02em',
              }}
            >
              La pertinence d'une étude de structure
            </Typography>
            
            {/* Fixed horizontal layout with flexbox */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4,
                mb: { xs: 8, md: 16 },
                px: { xs: 2, md: 4 },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '250px', md: '300px' },
                  width: { xs: '100%', md: '40%' },
                  flex: 1,
                  order: { xs: 1, md: 1 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src="/images/hero/la_pertinence_dune_etude_de_structure.png"
                  alt="Étude de structure"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(206, 176, 78, 0.2) 0%, rgba(230, 200, 110, 0.2) 100%)',
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Text content */}
              <Box 
                sx={{ 
                  flex: 1,
                  order: { xs: 2, md: 2 },
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    mb: 3, 
                    color: '#333',
                    fontFamily: "'Bitter', serif",
                    fontWeight: 500,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    letterSpacing: '0.02em',
                  }}
                >
                  Une expertise technique
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    color: '#555',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  Contrairement à un diagnostic visuel, peu fiable, et au-delà d'une demande contractuelle de votre
                  assurance, une étude de structure est destinée à confirmer, dans les règles de l'art, que votre
                  bâtiment est capable de supporter les charges qui lui sont appliquées.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#555',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  En tant qu'ingénieur structure, je m'applique à analyser le bâtiment conformément aux normes de
                  construction, tout en apportant une attention particulière à vos propres contraintes, notamment
                  dans son utilisation quotidienne (stockage, passage d'engins, …).
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* CTA Section */}
        <Box sx={{ 
          mb: { xs: 10, md: 16 }, 
          py: { xs: 8, md: 12 }, 
          px: { xs: 4, md: 8 },
          bgcolor: 'rgba(206, 176, 78, 0.05)',
          borderRadius: 2,
          width: '100%',
          textAlign: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 4, 
                textAlign: 'center', 
                color: '#ceb04e',
                fontFamily: "'Bitter', serif",
                fontWeight: 400,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '0.02em',
              }}
            >
              Prêt à concrétiser votre projet ?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 6, 
                color: '#555',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.1rem',
                lineHeight: 1.8,
                letterSpacing: '0.01em',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner dans votre transition énergétique.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#ceb04e',
                color: 'white',
                fontSize: '1.1rem',
                py: 2,
                px: 5,
                borderRadius: 1,
                boxShadow: '0 4px 12px rgba(206, 176, 78, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#b89a3e',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(206, 176, 78, 0.4)',
                },
              }}
            >
              Nous contacter
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 