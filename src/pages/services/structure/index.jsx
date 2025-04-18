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

export default function Structure() {
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
          Structural Solutions
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
                Roof Mounting Systems
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'var(--background-off-white)' }}>
                Our roof mounting systems are designed to securely attach solar panels to your roof 
                while protecting its integrity. We use high-quality materials and proven installation 
                techniques to ensure long-term durability.
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--background-off-white)' }}>
                • Compatible with various roof types (shingle, tile, metal)
                • Weather-resistant materials
                • Minimal roof penetration
                • Professional installation with warranty
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
                Ground Mounting Solutions
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'var(--background-off-white)' }}>
                For properties with ample land, ground mounting systems offer an excellent alternative 
                to roof installations. These systems can be optimized for maximum sun exposure and 
                are easier to maintain.
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--background-off-white)' }}>
                • Custom foundation design
                • Adjustable tilt angles
                • Durability in various weather conditions
                • Easy access for maintenance
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
                Engineering & Design
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'var(--background-off-white)' }}>
                Our structural engineering team ensures that every installation meets the highest 
                safety and performance standards. We conduct thorough site assessments and create 
                detailed plans for each project.
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--background-off-white)' }}>
                • Structural integrity assessment
                • Wind and snow load calculations
                • Custom mounting design
                • Compliance with local building codes
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
                  Schedule a Consultation
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
