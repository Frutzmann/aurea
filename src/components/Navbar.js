"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const menuItems = [
    { text: 'Accueil', path: '/' },
    { text: 'A propos', path: '/about' },
    { text: 'Mes Prestations', path: '/services' },
    // { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact', isButton: true },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Toolbar 
          sx={{ 
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            py: 1,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Logo and Text */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: 3,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: '100px', sm: '120px' },
                height: { xs: '40px', sm: '48px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/images/logo/logo.png"
                alt="AURÊA Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                color: '#333',
                fontSize: { md: '0.75rem', lg: '0.85rem' },
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              Calcul de structure et études photovoltaiques
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                href={item.path}
                variant={item.isButton ? "contained" : "text"}
                sx={item.isButton ? {
                  bgcolor: '#333',
                  color: 'white',
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  '&:hover': {
                    bgcolor: '#000',
                  },
                } : {
                  color: router.pathname === item.path ? '#ceb04e' : '#333',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: router.pathname === item.path ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: '#ceb04e',
                    transition: 'all 0.3s ease',
                  },
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: '#ceb04e',
                    '&::after': {
                      width: '100%',
                    },
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              color: '#333'
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Add a spacer to prevent content from being hidden behind the fixed navbar */}
      {!isHomePage && <Box sx={{ height: { xs: 56, sm: 64, md: 72 } }} />}

      {/* Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: 'white',
          },
        }}
      >
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              href={item.path}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                color: router.pathname === item.path ? '#ceb04e' : '#333',
                bgcolor: router.pathname === item.path ? 'rgba(206, 176, 78, 0.1)' : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              <ListItemText 
                primary={item.text} 
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '0.9rem',
                    fontWeight: router.pathname === item.path ? 600 : 500,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar; 