'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import Link from 'next/link';

export default function Photovoltaic() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mb: 4, 
            textAlign: 'center',
            color: 'var(--primary-gold)',
          }}
        >
          Photovoltaic Systems
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: 'var(--primary-gold)' }}>
                Residential Solutions
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'var(--background-off-white)' }}>
                Our residential solar panel installations are designed to maximize energy production 
                while maintaining the aesthetic appeal of your home. We offer a range of options 
                to suit your specific needs and budget.
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--background-off-white)' }}>
                • Custom system design based on your energy consumption
                • High-efficiency solar panels with extended warranties
                • Professional installation by certified technicians
                • Monitoring systems to track performance
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: 'var(--primary-gold)' }}>
                Commercial Solutions
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'var(--background-off-white)' }}>
                For businesses, we provide scalable solar solutions that can significantly reduce 
                operational costs and demonstrate environmental responsibility. Our commercial 
                installations are designed for maximum efficiency and return on investment.
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--background-off-white)' }}>
                • Large-scale system design and installation
                • Energy consumption analysis and optimization
                • Integration with existing electrical systems
                • Comprehensive maintenance and support
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                mt: 4,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: 'var(--primary-gold)' }}>
                Our Process
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'var(--background-off-white)' }}>
                1. Initial Consultation: We assess your energy needs and site conditions
                2. System Design: Our engineers create a custom solution for your property
                3. Permitting: We handle all necessary permits and approvals
                4. Installation: Our certified technicians install your system
                5. Activation: We activate your system and provide training
                6. Monitoring: We monitor performance and provide maintenance as needed
              </Typography>
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  sx={{
                    bgcolor: 'var(--primary-gold)',
                    color: 'black',
                    '&:hover': {
                      bgcolor: '#e6c200',
                    },
                  }}
                >
                  Request a Quote
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
