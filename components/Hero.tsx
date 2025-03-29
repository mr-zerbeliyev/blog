'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            maxWidth: 800,
            position: 'relative',
            zIndex: 1,
            textAlign: { xs: 'center', md: 'left' } 
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 900,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              color: '#fff'
            }}
          >
            Salam, Mən İlkin
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              mb: 4,
              opacity: 0.9,
              fontWeight: 500,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              color: '#fff'
            }}
          >
            Front-end Developer və UI/UX Dizayner
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              mb: 6,
              opacity: 0.9,
              maxWidth: '600px',
              mx: { xs: 'auto', md: 0 },
              lineHeight: 1.6,
              color: '#fff'
            }}
          >
            Müasir veb texnologiyalarından istifadə edərək istifadəçi dostu və yüksək performanslı veb tətbiqlər hazırlayıram.
            React və Next.js ilə yaradıcı həllər təklif edirəm.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/mr-zerbeliyev"
              target="_blank"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                },
                px: 4,
                py: 1.5,
                borderRadius: 2,
              }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/ilkin-zerbeliyev/"
              target="_blank"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                },
                px: 4,
                py: 1.5,
                borderRadius: 2,
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          transform: 'translateY(-50%)',
          display: { xs: 'none', md: 'block' },
          zIndex: 1
        }}
      />
    </Box>
  );
};

export default Hero; 