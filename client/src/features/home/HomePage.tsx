
import { Group, ArrowForward, PlayArrow, TrendingUp, People, Schedule } from "@mui/icons-material";
import { Box, Button, Typography, Container, Grid, Card, CardContent, Fade, Grow } from "@mui/material";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const features = [
        {
            icon: <People sx={{ fontSize: 40, color: '#6366f1' }} />,
            title: "Connect & Collaborate",
            description: "Join activities with like-minded people and build meaningful connections."
        },
        {
            icon: <Schedule sx={{ fontSize: 40, color: '#8b5cf6' }} />,
            title: "Smart Scheduling",
            description: "Effortlessly organize and manage your activities with intelligent scheduling."
        },
        {
            icon: <TrendingUp sx={{ fontSize: 40, color: '#06b6d4' }} />,
            title: "Track Progress",
            description: "Monitor your activity participation and growth with detailed analytics."
        }
    ];

    return (
        <Box sx={{ 
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
                `,
                pointerEvents: 'none',
            }
        }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                
                {/* Hero Section */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    py: 8
                }}>
                    
                    {/* Logo & Brand */}
                    <Fade in={loaded} timeout={1000}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            mb: 6,
                            position: 'relative'
                        }}>
                            <Box sx={{
                                p: 3,
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 20px 60px rgba(99, 102, 241, 0.4)',
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '24px',
                                    padding: '2px',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
                                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    maskComposite: 'xor',
                                },
                                animation: 'float 6s ease-in-out infinite',
                                '@keyframes float': {
                                    '0%, 100%': { transform: 'translateY(0px)' },
                                    '50%': { transform: 'translateY(-10px)' },
                                }
                            }}>
                                <Group sx={{ fontSize: 80, color: 'white' }} />
                            </Box>
                            <Typography 
                                variant="h1" 
                                sx={{
                                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontWeight: 900,
                                    fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                                    letterSpacing: '-0.05em',
                                    lineHeight: 0.9,
                                    textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                Reactivities
                            </Typography>
                        </Box>
                    </Fade>

                    {/* Subtitle */}
                    <Fade in={loaded} timeout={1500}>
                        <Typography 
                            variant="h3"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontWeight: 300,
                                fontSize: { xs: '1.5rem', md: '2.5rem' },
                                mb: 3,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.2
                            }}
                        >
                            Welcome to the Future of
                        </Typography>
                    </Fade>

                    <Fade in={loaded} timeout={2000}>
                        <Typography 
                            variant="h3"
                            sx={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700,
                                fontSize: { xs: '1.8rem', md: '3rem' },
                                mb: 8,
                                letterSpacing: '-0.03em'
                            }}
                        >
                            Activity Management
                        </Typography>
                    </Fade>

                    {/* CTA Button */}
                    <Grow in={loaded} timeout={2500}>
                        <Button
                            component={Link}
                            to='/activities'
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                color: 'white',
                                px: 6,
                                py: 2.5,
                                borderRadius: '20px',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                textTransform: 'none',
                                boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                    transition: 'left 0.6s',
                                },
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.6)',
                                    '&::before': {
                                        left: '100%',
                                    }
                                },
                                '&:active': {
                                    transform: 'translateY(-2px)',
                                }
                            }}
                        >
                            Explore Activities
                        </Button>
                    </Grow>

                    {/* Feature Cards */}
                    <Box sx={{ mt: 16, width: '100%' }}>
                        <Fade in={loaded} timeout={3000}>
                            <Typography 
                                variant="h4"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: 600,
                                    mb: 6,
                                    textAlign: 'center',
                                    fontSize: { xs: '1.5rem', md: '2rem' }
                                }}
                            >
                                Why Choose Reactivities?
                            </Typography>
                        </Fade>

                        <Grid container spacing={4} sx={{ mt: 2 }}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Grow in={loaded} timeout={3500 + (index * 200)}>
                                        <Card sx={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '20px',
                                            p: 3,
                                            textAlign: 'center',
                                            transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)',
                                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                            }
                                        }}>
                                            <CardContent sx={{ p: 0 }}>
                                                <Box sx={{
                                                    mb: 3,
                                                    p: 2,
                                                    borderRadius: '16px',
                                                    background: 'rgba(255, 255, 255, 0.1)',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    {feature.icon}
                                                </Box>
                                                <Typography 
                                                    variant="h6" 
                                                    sx={{
                                                        color: 'white',
                                                        fontWeight: 700,
                                                        mb: 2,
                                                        fontSize: '1.25rem'
                                                    }}
                                                >
                                                    {feature.title}
                                                </Typography>
                                                <Typography 
                                                    variant="body1"
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                        lineHeight: 1.6,
                                                        fontSize: '0.95rem'
                                                    }}
                                                >
                                                    {feature.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Bottom CTA */}
                    <Fade in={loaded} timeout={4500}>
                        <Box sx={{ 
                            mt: 12,
                            p: 4,
                            borderRadius: '24px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(20px)',
                            textAlign: 'center'
                        }}>
                            <Typography 
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    mb: 2
                                }}
                            >
                                Ready to get started?
                            </Typography>
                            <Typography 
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    mb: 3
                                }}
                            >
                                Join thousands of users who are already managing their activities efficiently
                            </Typography>
                            <Button
                                component={Link}
                                to='/activities'
                                variant="outlined"
                                startIcon={<PlayArrow />}
                                sx={{
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    color: 'white',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: '#6366f1',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                Start Your Journey
                            </Button>
                        </Box>
                    </Fade>
                </Box>
            </Container>
        </Box>
    )
}

export default HomePage;