'use client';

import { Box, Typography, Grid, Paper, IconButton, Container, Tooltip } from '@mui/material';
import { GitHub, LinkedIn, Email, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const contacts = [
    {
      icon: <GitHub sx={{ fontSize: 40 }} />,
      title: 'GitHub',
      link: 'https://github.com/mr-zerbeliyev',
      description: 'Layihələrimi və mənbə kodlarımı nəzərdən keçirə bilərsiniz',
      tooltip: 'GitHub Profilim'
    },
    {
      icon: <LinkedIn sx={{ fontSize: 40 }} />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ilkin-zerbeliyev/',
      description: 'Peşəkar təcrübələrim və əlaqələrim',
      tooltip: 'LinkedIn Profilim'
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'E-poçt',
      link: 'mailto:ilkinzerbelizade@gmail.com',
      description: 'İş təklifləri və əməkdaşlıq üçün əlaqə saxlayın',
      tooltip: 'E-poçt Göndər'
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Məkan',
      link: 'https://maps.google.com/?q=Baku,Azerbaijan',
      description: 'Bakı, Azərbaycan',
      tooltip: 'Məkanım'
    }
  ];

  return (
    <Box id="contact" sx={{ py: 12, bgcolor: '#F5F5F5', boxShadow: 'inset 0 4px 30px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ 
            mb: 2,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' },
            color: '#212121'
          }}
        >
          Əlaqə
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#212121"
          sx={{ mb: 8, maxWidth: 800, mx: 'auto', opacity: 0.8 }}
        >
          Mənimlə əlaqə saxlamaq üçün aşağıdakı kanallardan istifadə edə bilərsiniz
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {contacts.map((contact, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  backgroundColor: '#FFFFFF',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <Tooltip title={contact.tooltip}>
                  <IconButton
                    component="a"
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#007BFF',
                      mb: 2,
                      '&:hover': {
                        color: '#0056b3',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    {contact.icon}
                  </IconButton>
                </Tooltip>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#212121' }}>
                  {contact.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#212121', opacity: 0.8 }}>
                  {contact.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 