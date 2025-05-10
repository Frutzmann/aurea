"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { text: 'Accueil', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'À propos', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!mounted) {
    return null;
  }

  const isHome = pathname === '/';
  const isScrolled = trigger || !isHome;

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
              gap: 4,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: '120px', sm: '140px' },
                height: { xs: '48px', sm: '56px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/images/logo/logo_site_internet.png"
                alt="AURÊA Logo"
                sizes="(max-width: 700px) 120px, 140px"
                fill
                priority
                style={{
                  objectFit: 'contain',
                }}
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
              Calculs de structures et études photovoltaïques
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
                href={item.href}
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
                  color: pathname === item.href ? '#ceb04e' : '#333',
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
                    width: pathname === item.href ? '100%' : '0%',
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
      {!isHome && <Box sx={{ height: { xs: 56, sm: 64, md: 72 } }} />}

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
              key={item.text}
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                color: pathname === item.href ? '#ceb04e' : '#333',
                bgcolor: pathname === item.href ? 'rgba(206, 176, 78, 0.1)' : 'transparent',
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
                    fontWeight: pathname === item.href ? 600 : 500,
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