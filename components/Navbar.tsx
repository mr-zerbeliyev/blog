'use client';

import { AppBar, Toolbar, Typography, Button, Box, useTheme, useScrollTrigger } from '@mui/material';

const Navbar = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar 
      position="fixed" 
      color="transparent"
      sx={{ 
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF',
        boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            flexGrow: 1, 
            color: '#212121',
            fontWeight: 'bold'
          }}
        >
          İlkin Zərbəliyev
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            sx={{ color: 'black' }}
            onClick={() => scrollToSection('about')}
          >
            Haqqımda
          </Button>
          <Button 
            sx={{ color: 'black' }}
            onClick={() => scrollToSection('projects')}
          >
            Layihələr
          </Button>
          <Button 
            sx={{ color: 'black' }}
            onClick={() => scrollToSection('contact')}
          >
            Əlaqə
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 