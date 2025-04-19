'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  IconButton,
  Modal,
  Fade,
  Divider,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Services() {
  const [selectedSection, setSelectedSection] = useState('photovoltaic');
  const [openModal, setOpenModal] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);
  const [direction, setDirection] = useState('right');

  const sections = [
    {
      id: 'photovoltaic',
      title: 'Étude photovoltaïque',
      description: 'Solutions complètes pour vos projets photovoltaïques',
      intro: `Le photovoltaïque offre aux particuliers et aux entreprises une opportunité de réduire leurs factures
d'électricité grâce à l'autoconsommation, avec ou sans vente de surplus, tout en acquérant une
certaine autonomie énergétique.\n\nPour les professionnels, il représente par ailleurs une source de revenus supplémentaire avec la
vente totale de l'énergie produite, garantissant un investissement pérenne et rentable.\n\nQue ce soit sur une maison, un bâtiment existant ou en construction, ou bien encore sur des
ombrières de parking, vous bénéficierez d'un accompagnement personnalisé en vue d'une
installation performante et durable.\n\nJ'endosserai tour à tour, les rôles de conseillère technique, interlocutrice principale, intermédiaire
avec les différents acteurs de votre projet (installateur photovoltaïque et gestionnaire de réseau
Enedis notamment) ou encore assistance à maîtrise d'ouvrage, pour vous accompagner au mieux
dans votre projet.`,
      steps: [
        {
          title: 'Visite sur site et analyse du besoin',
          description: `Cette première étape est primordiale car elle regroupe à la fois notre première rencontre et la
          découverte de votre environnement. C'est l'occasion de comprendre vos besoins et vos attentes, et d'analyser vos consommations
          énergétiques, afin d'adapter au mieux l'étude que je vous proposerai.`
        },
        {
          title: 'Étude financière et devis',
          description: `Les éléments ainsi recueillis me permettent de concevoir une solution photovoltaïque
          personnalisée et ajustée à vos besoins, et de vous proposer une étude financière et un devis
          de l'installation. L'étude financière, document synthétique, met en lumière les principales caractéristiques de
          votre projet (puissance crête installée, production annuelle estimée, tarif de rachat de
          l'électricité (à la date de l'étude), coût du projet, montant des recettes engendrées par la
          revente d'électricité et retour sur investissement).`
        },
        {
          title: 'Démarches administratives',
          description: `Dès que le devis est validé, les démarches administratives peuvent commencer. L'idée
          principale est alors de rendre la procédure fluide et simple pour vous. Je prends en charge toutes les formalités, 
          et réalise notamment la déclaration préalable de travaux (DP) et la demande de raccordement (DR).`
        },
        {
          title: 'Visite technique avec l\'installateur photovoltaïque',
          description: `Une fois le devis signé et les démarches administratives initiées, une visite technique est
          organisée afin d'anticiper au mieux l'installation avec l'entreprise en charge de la pose des
          panneaux photovoltaïques.`
        },
        {
          title: 'Suivi du chantier jusqu\'à la mise en service',
          description: `Lorsque les démarches administratives sont achevées et que les demandes sont accordées, le
          chantier peut démarrer. Je vous accompagne ainsi jusqu'à la mise en service de votre installation.`
        }
      ],
      path: '/services/photovoltaic',
    },
    {
      id: 'structure',
      title: 'Étude de structure',
      description: 'Analyse et renforcement de structures pour vos projets',
      intro: `Contrairement à un diagnostic visuel, peu fiable, et au-delà d'une demande contractuelle de votre
assurance, une étude de structure est destinée à confirmer, dans les règles de l'art, que votre
bâtiment est capable de supporter les charges qui lui sont appliquées.\n\nEn tant qu'ingénieur structure, je m'applique à analyser le bâtiment conformément aux normes de
construction, tout en apportant une attention particulière à vos propres contraintes, notamment
dans son utilisation quotidienne (stockage, passage d'engins, …).\n\nMon objectif, en vous proposant des renforts, s'ils sont nécessaires, est de trouver l'équilibre entre
pertinence structurelle, facilité de réalisation, emplacement intelligent, et optimisation des coûts.`,
      steps: [
        {
          title: 'Visite sur site et prise de cotes du bâtiment',
          description: `Cette première étape est capitale car elle regroupe à la fois notre première rencontre et la
          découverture du bâtiment à étudier. C'est l'occasion pour moi de comprendre vos besoins et vos attentes et de visualiser dans le
          détail la structure sur laquelle porte le projet.`
        },
        {
          title: 'Calcul de structure',
          description: `Les cotes relevées sur site (et les plans) me permettent de modéliser le bâtiment dans le
          logiciel de calcul et de soumettre la structure à toutes les charges qu'elle doit supporter
          (charges d'exploitation et charges environnementales).`
        },
        {
          title: 'Rédaction du rapport d\'étude',
          description: `Une fois les calculs réalisés et les résultats analysés, toutes les informations sont retranscrites
          dans un rapport. Celui-ci regroupe toutes les hypothèses de dimensionnement, les résultats des calculs et les
          conclusions qui en découlent.`
        },
        {
          title: 'Préconisation des renforts',
          description: `Dans le cas où les calculs mettent en évidence une fragilité ou une déformation de la
          structure, un deuxième document est rédigé. Celui-ci détaille l'ensemble des renforts à réaliser sur la structure.`
        }
      ],
      path: '/services/structure',
    },
  ];

  const handleSectionChange = (direction) => {
    setDirection(direction);
    const currentIndex = sections.findIndex(s => s.id === selectedSection);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % sections.length 
      : (currentIndex - 1 + sections.length) % sections.length;
    setSelectedSection(sections[newIndex].id);
  };

  const handleOpenModal = (step) => {
    setSelectedStep(step);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const selectedServiceData = sections.find(s => s.id === selectedSection);

  return (
    <Box sx={{ 
      bgcolor: '#faf9f6',
      minHeight: '100vh',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              color: '#ceb04e',
              fontFamily: 'Bitter, serif',
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '0.02em',
            }}
          >
            Nos Services
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 3, md: 6 }, 
            mb: { xs: 4, md: 8 },
            flexWrap: 'wrap',
          }}>
            {sections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Bitter, serif',
                    cursor: 'pointer',
                    color: selectedSection === section.id 
                      ? '#ceb04e' 
                      : 'black',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    bgcolor: selectedSection === section.id 
                      ? 'rgba(206, 176, 78, 0.1)' 
                      : 'transparent',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: selectedSection === section.id ? '100%' : '0%',
                      height: '2px',
                      bgcolor: '#ceb04e',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      color: '#ceb04e',
                      bgcolor: 'rgba(206, 176, 78, 0.05)',
                      '&:after': {
                        width: '100%',
                      },
                    },
                  }}
                  onClick={() => setSelectedSection(section.id)}
                >
                  {section.title}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, x: direction === 'next' ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 'next' ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{
              maxWidth: '800px', 
              mx: 'auto',
              mb: 0,
            }}>
              <Box
                sx={{
                  textAlign: 'center',
                  mb: 3,
                  position: 'relative',
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(206, 176, 78, 0), #ceb04e)',
                    zIndex: 0,
                  },
                  '&::before': {
                    right: '55%',
                    marginRight: '20px',
                  },
                  '&::after': {
                    left: '55%',
                    marginLeft: '20px',
                    background: 'linear-gradient(90deg, #ceb04e, rgba(206, 176, 78, 0))',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ceb04e',
                    fontFamily: 'Bitter, serif',
                    fontWeight: 500,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    letterSpacing: '0.02em',
                    display: 'inline-block',
                    position: 'relative',
                    px: 3,
                    py: 1,
                    backgroundColor: '#faf9f6',
                    zIndex: 1,
                    '&::before, &::after': {
                      content: '""',
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      border: '2px solid #ceb04e',
                      borderRadius: '50%',
                      background: '#faf9f6',
                      zIndex: 2,
                    },
                    '&::before': {
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    },
                    '&::after': {
                      right: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    },
                  }}
                >
                  {selectedSection === 'photovoltaic' ? 'À chacun son projet' : 'La pertinence d\'une étude de structure'}
                </Typography>
              </Box>
            </Box>

            <Box 
              sx={{
                width: '100%',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '100px',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(206, 176, 78, 0), #ceb04e, rgba(206, 176, 78, 0))',
                },
              }}
            />

            <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  typography: 'body1',
                  whiteSpace: 'pre-line',
                  color: '#333',
                  textAlign: 'justify',
                  lineHeight: 1.8,
                }}>
                  {selectedServiceData.intro}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={`/images/service/${selectedSection === 'photovoltaic' ? 'etude_photovoltaique.png' : 'etude_de_structure.png'}`}
                  alt={selectedServiceData.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  <IconButton
                    onClick={() => handleSectionChange('prev')}
                    sx={{
                      position: 'fixed',
                      left: { xs: 16, md: 32 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#ceb04e',
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(4px)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      zIndex: 10,
                      '&:hover': {
                        bgcolor: 'rgba(206, 176, 78, 0.1)',
                        transform: 'translateY(-50%) scale(1.1)',
                      },
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>

                  <Paper
                    elevation={0} 
                    sx={{
                      p: { xs: 3, md: 6 },
                      bgcolor: 'white',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(206, 176, 78, 0.2)',
                      overflow: 'hidden',
                      position: 'relative',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #ceb04e, #e6c86e)',
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 3, 
                        color: '#ceb04e',
                        fontFamily: 'Bitter, serif',
                        fontWeight: 600,
                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                        letterSpacing: '0.02em',
                      }}
                    >
                      {selectedServiceData.title}
                    </Typography>

                    <Divider sx={{ mb: 4, borderColor: 'rgba(206, 176, 78, 0.2)' }} />

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 6, 
                        color: '#333',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {selectedServiceData.description}
                    </Typography>

                    {/* Vertical Timeline */}
                    <Box sx={{ position: 'relative', mb: 6 }}>
                      {/* Timeline line */}
                      <Box
                        sx={{
                          position: 'absolute',
                          left: '50%',
                          top: 0,
                          bottom: 0,
                          width: '2px',
                          background: 'linear-gradient(to bottom, rgba(206, 176, 78, 0.3), rgba(230, 200, 110, 0.3))',
                          transform: 'translateX(-50%)',
                        }}
                      />
                      
                      {selectedServiceData.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Box 
                            sx={{ 
                              display: 'flex', 
                              mb: 4,
                              position: 'relative',
                              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                            }}
                          >
                            {/* Timeline dot */}
                            <Box
                              sx={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 1,
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                              >
                                <Box
                                  sx={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: '50%',
                                    bgcolor: '#ceb04e',
                                    border: '4px solid white',
                                    boxShadow: '0 0 0 2px rgba(206, 176, 78, 0.3)',
                                  }}
                                />
                              </motion.div>
                            </Box>
                            
                            {/* Content */}
                            <motion.div
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                              style={{ width: '45%' }}
                            >
                              <Paper
                                elevation={2}
                                sx={{
                                  p: 3,
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  borderRadius: 2,
                                  border: '1px solid rgba(206, 176, 78, 0.2)',
                                  '&:hover': {
                                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                                    borderColor: '#ceb04e',
                                    transform: 'translateY(-5px)',
                                  },
                                }}
                                onClick={() => handleOpenModal(step)}
                              >
                                <Typography 
                                  variant="h5" 
                                  sx={{ 
                                    mb: 1, 
                                    color: '#ceb04e',
                                    fontFamily: 'Bitter, serif',
                                    fontWeight: 500,
                                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                                    letterSpacing: '0.01em',
                                  }}
                                >
                                  {step.title}
                                </Typography>
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    color: '#555',
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                  }}
                                >
                                  {step.description}
                                </Typography>
                                <Box sx={{ mt: 2, textAlign: 'right' }}>
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: '#ceb04e',
                                      fontFamily: 'Montserrat, sans-serif',
                                      fontWeight: 600,
                                      cursor: 'pointer',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      '&:hover': {
                                        textDecoration: 'underline',
                                      },
                                    }}
                                  >
                                    Lire la suite
                                    <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '0.8rem' }} />
                                  </Typography>
                                </Box>
                              </Paper>
                            </motion.div>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>

                  <IconButton
                    onClick={() => handleSectionChange('next')}
                    sx={{
                      position: 'fixed',
                      right: { xs: 16, md: 32 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#ceb04e',
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(4px)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      zIndex: 10,
                      '&:hover': {
                        bgcolor: 'rgba(206, 176, 78, 0.1)',
                        transform: 'translateY(-50%) scale(1.1)',
                      },
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Modal for expanded step description */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        aria-labelledby="step-modal-title"
        aria-describedby="step-modal-description"
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '80%', md: '60%' },
              maxHeight: '80vh',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              overflow: 'auto',
              border: '1px solid rgba(206, 176, 78, 0.2)',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #ceb04e, #e6c86e)',
              },
            }}
          >
            {selectedStep && (
              <>
                <Typography
                  id="step-modal-title"
                  variant="h4"
                  component="h2"
                  sx={{
                    mb: 3,
                    color: '#ceb04e',
                    fontFamily: 'Bitter, serif',
                    fontWeight: 600,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    letterSpacing: '0.02em',
                  }}
                >
                  {selectedStep.title}
                </Typography>
                <Divider sx={{ mb: 3, borderColor: 'rgba(206, 176, 78, 0.2)' }} />
                <Typography
                  id="step-modal-description"
                  variant="body1"
                  sx={{
                    color: '#333',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3,
                    letterSpacing: '0.01em',
                  }}
                >
                  {selectedStep.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    onClick={handleCloseModal}
                    variant="outlined"
                    sx={{
                      color: '#ceb04e',
                      borderColor: '#ceb04e',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      py: 1,
                      px: 3,
                      borderRadius: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#b89b3f',
                        bgcolor: 'rgba(206, 176, 78, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Fermer
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
