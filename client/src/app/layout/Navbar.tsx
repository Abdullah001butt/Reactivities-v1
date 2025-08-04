import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Group, Add, Menu as MenuIcon, Close } from '@mui/icons-material';
import { useState } from 'react';

type Props = {
    openForm: () => void;
}

const Navbar = ({openForm} : Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigationItems = ['Activities', 'About', 'Contact'];

    const mobileDrawer = (
        <Box sx={{ width: 250, height: '100%', backgroundColor: '#000000' }}>
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                p: 2,
                borderBottom: '1px solid #1a1a1a'
            }}>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: '600' }}>
                    Menu
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                    <Close />
                </IconButton>
            </Box>
            <List>
                {navigationItems.map((item) => (
                    <ListItem 
                        key={item}
                        onClick={handleDrawerToggle}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#18181b',
                            }
                        }}
                    >
                        <ListItemText 
                            primary={item}
                            sx={{
                                '& .MuiListItemText-primary': {
                                    color: '#a1a1aa',
                                    fontWeight: '500',
                                    fontSize: '1rem'
                                }
                            }}
                        />
                    </ListItem>
                ))}
                <ListItem sx={{ pt: 2 }}>
                    <Button 
                        fullWidth
                        variant='contained'
                        startIcon={<Add sx={{ fontSize: 18 }} />}
                        onClick={handleDrawerToggle}
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            fontWeight: '500',
                            textTransform: 'none',
                            borderRadius: '6px',
                            py: 1.5,
                            fontSize: '0.875rem',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#f4f4f5',
                                boxShadow: 'none',
                            }
                        }}
                    >
                        Create Activity
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="static" 
                elevation={0}
                sx={{ 
                    backgroundColor: '#000000',
                    borderBottom: '1px solid #1a1a1a',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        minHeight: { xs: '56px', sm: '64px' },
                        py: { xs: 0.5, sm: 1 },
                        px: { xs: 1, sm: 2 }
                    }}>
                        {/* Logo Section */}
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: { xs: 1, sm: 2 },
                            cursor: 'pointer',
                            flex: { xs: 1, md: 'none' },
                            '&:hover': {
                                opacity: 0.8,
                                transition: 'opacity 0.2s ease-in-out'
                            }
                        }}>
                            <Box sx={{
                                p: { xs: 0.5, sm: 1 },
                                borderRadius: { xs: '6px', sm: '8px' },
                                border: '1px solid #262626',
                                backgroundColor: '#0a0a0a',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Group sx={{ 
                                    fontSize: { xs: 20, sm: 24 }, 
                                    color: 'white' 
                                }} />
                            </Box>
                            <Typography 
                                variant={isMobile ? 'h6' : 'h5'}
                                fontWeight='600'
                                sx={{
                                    color: 'white',
                                    letterSpacing: '-0.025em',
                                    fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                                    display: { xs: 'block', sm: 'block' }
                                }}
                            >
                                {isMobile ? 'Reactivities' : 'Reactivities'}
                            </Typography>
                        </Box>

                        {/* Desktop Navigation Links */}
                        <Box sx={{ 
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            {navigationItems.map((item) => (
                                <MenuItem 
                                    key={item}
                                    sx={{ 
                                        fontSize: { sm: '0.75rem', md: '0.875rem' },
                                        fontWeight: '500',
                                        color: '#a1a1aa',
                                        textTransform: 'none',
                                        borderRadius: '6px',
                                        px: { sm: 2, md: 3 },
                                        py: 1,
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: '#18181b',
                                            color: 'white',
                                        }
                                    }}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Box>

                        {/* Desktop CTA Button */}
                        <Button 
                            size={isMobile ? 'small' : 'medium'}
                            variant='contained'
                            startIcon={<Add sx={{ fontSize: { xs: 16, sm: 18 } }} />}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                backgroundColor: 'white',
                                color: 'black',
                                fontWeight: '500',
                                textTransform: 'none',
                                borderRadius: '6px',
                                px: { sm: 2, md: 3 },
                                py: 1,
                                fontSize: { sm: '0.75rem', md: '0.875rem' },
                                boxShadow: 'none',
                                border: '1px solid transparent',
                                '&:hover': {
                                    backgroundColor: '#f4f4f5',
                                    boxShadow: 'none',
                                }
                            }}
                            onClick={openForm}
                        >
                            Create Activity
                        </Button>

                        {/* Mobile Menu Button */}
                        <IconButton
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ 
                                display: { xs: 'flex', md: 'none' },
                                color: 'white',
                                ml: 1
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        backgroundColor: '#000000',
                        border: 'none'
                    },
                }}
            >
                {mobileDrawer}
            </Drawer>
        </Box>
    )
}
export default Navbar