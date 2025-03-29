'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { Code, Devices, Speed, Brush, GitHub, Api } from '@mui/icons-material';

const About = () => {
  const skills = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Front-end İnkişafı',
      description: 'React, Next.js və TypeScript ilə müasir veb tətbiqlər hazırlayıram.'
    },
    {
      icon: <Devices sx={{ fontSize: 40 }} />,
      title: 'Responsive Dizayn',
      description: 'Bütün cihazlarda mükəmməl görünən və işləyən tətbiqlər hazırlayıram.'
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Performans',
      description: 'SEO və performans optimizasiyası ilə sürətli veb saytlar yaradıram.'
    },
    {
      icon: <Brush sx={{ fontSize: 40 }} />,
      title: 'UI/UX Dizayn',
      description: 'Material UI və müasir dizayn prinsipləri ilə istifadəçi dostu interfeyslər.'
    },
    {
      icon: <GitHub sx={{ fontSize: 40 }} />,
      title: 'Versiya Nəzarəti',
      description: 'Git və GitHub ilə peşəkar layihə idarəetməsi və əməkdaşlıq.'
    },
    {
      icon: <Api sx={{ fontSize: 40 }} />,
      title: 'API İnteqrasiyası',
      description: 'RESTful API və GraphQL ilə məlumat inteqrasiyası və idarəetməsi.'
    }
  ];

  return (
    <Box id="about" sx={{ py: 12, bgcolor: '#F5F5F5', boxShadow: 'inset 0 4px 30px rgba(0, 0, 0, 0.1)' }}>
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
          Haqqımda
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#212121"
          sx={{ mb: 8, maxWidth: 800, mx: 'auto', opacity: 0.8 }}
        >
          Front-end developer olaraq müasir veb texnologiyaları ilə işləyir və istifadəçi təcrübəsini ön planda tuturam.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 4
          }}
        >
          {skills.map((skill, index) => (
            <Paper
              key={index}
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
              <Box sx={{ color: '#007BFF', mb: 2 }}>
                {skill.icon}
              </Box>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#212121' }}>
                {skill.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#212121', opacity: 0.8 }}>
                {skill.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About; 