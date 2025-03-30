'use client';

import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Container, IconButton } from '@mui/material';
import { GitHub, Launch, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  images?: string[];
  image?: string;
  features?: string[];
  technologies: string[];
  github?: string;
  demo: string;
}

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const AUTO_PLAY_INTERVAL = 5000; // 5 saniyə

  const nextImage = (images: string[]) => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setAutoPlayEnabled(true); // İstifadəçi tıkladığında avtomatik dəyişimi yenidən aktivləşdir
  };

  const prevImage = (images: string[]) => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlayEnabled(true); // İstifadəçi tıkladığında avtomatik dəyişimi yenidən aktivləşdir
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoPlayEnabled) {
      timer = setTimeout(() => {
        projects.forEach(project => {
          if (project.images && project.images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
          }
        });
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentImageIndex, autoPlayEnabled]);

  const projects: Project[] = [
    {
      title: 'Hüquq Məsləhət Platforması',
      description: 'Hüquqi məsləhət xidmətlərini rəqəmsallaşdıran müasir veb platforması. İstifadəçilər platformada qeydiyyatdan keçmiş vəkillərlə onlayn görüşə bilər və hüquqi sənədlərini təhlükəsiz şəkildə idarə edə bilərlər.',
      features: [
        'Vəkil profili və görüş sistemi',
        'Təhlükəsiz mesajlaşma və video görüntü',
        'Onlayn hüquqi sənəd idarəetməsi',
        'Təkmilləşdirilmiş axtarış və filtrasiya',
        'Mobil uyğun dizayn'
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Material UI',
        'Node.js',
        'PostgreSQL',
        'WebRTC',
        'Docker'
      ],
      images: [
        '/images/hukukauygun/home.jpg',
        '/images/hukukauygun/about.jpg'
      ],
      github: 'https://github.com/mr-zerbeliyev/law-platform',
      demo: 'https://law-platform-demo.vercel.app'
    }
  ];

  return (
    <Box id="projects" sx={{ py: 12, bgcolor: 'black', boxShadow: 'inset 0 4px 30px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ 
            mb: 2,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' },
            color: '#ffffff'
          }}
        >
          Layihələrim
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#ffffff"
          sx={{ mb: 8, maxWidth: 800, mx: 'auto', opacity: 0.8 }}
        >
          Hazırda üzərində işlədiyim və tamamladığım layihələr
        </Typography>
        <Box sx={{ display: 'flex',  flexDirection: 'column', gap: 4 }}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                backgroundColor: 'black',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
                },
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Box sx={{ position: 'relative', width: { xs: '100%', md: '50%' }, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F5F5F5' }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={project.images?.[currentImageIndex] || project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%'
                  }}
                />
                {project.images && project.images.length > 1 && (
                  <>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        left: 8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        color: '#212121',
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' }
                      }}
                      onClick={() => project.images && prevImage(project.images)}
                    >
                      <ChevronLeft />
                    </IconButton>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        color: '#212121',
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' }
                      }}
                      onClick={() => project.images && nextImage(project.images)}
                    >
                      <ChevronRight />
                    </IconButton>
                  </>
                )}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '50%' } }}>
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography gutterBottom variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#ffffff' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#ffffff', opacity: 0.8 }} paragraph>
                    {project.description}
                  </Typography>
                  {project.features && (
                    <>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 2, color: '#ffffff' }}>
                        Xüsusiyyətlər:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {project.features.map((feature, idx) => (
                          <Typography key={idx} component="li" variant="body1" sx={{ color: '#ffffff', opacity: 0.8, mb: 1 }}>
                            {feature}
                          </Typography>
                        ))}
                      </Box>
                    </>
                  )}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                    {project.technologies.map((tech, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: '0.875rem',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 4, pt: 0, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {project.github && (
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        flex: { xs: '1 1 auto', sm: '0 1 auto' },
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        backdropFilter: 'blur(10px)',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                        }
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Launch />}
                    href={project.demo}
                    target="_blank"
                    sx={{
                      flex: { xs: '1 1 auto', sm: '0 1 auto' },
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      backdropFilter: 'blur(10px)',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                      }
                    }}
                  >
                    Sayta Keçid
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 