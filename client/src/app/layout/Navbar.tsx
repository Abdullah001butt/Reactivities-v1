import { AppBar, Box, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Chip } from '@mui/material';
import { Group, Menu as MenuIcon, Close, Dashboard, Add } from '@mui/icons-material';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigationItems = [
    { label: 'Activities', path: '/activities', icon: <Dashboard sx={{ fontSize: 18 }} /> },
    { label: 'Create Activity', path: '/createActivity', icon: <Add sx={{ fontSize: 18 }} /> },
  ];



  const gradientBg = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
  const darkBg = 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{
        background: darkBg,
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: { xs: '64px', sm: '72px' } }}>
            
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{
                p: 1.5, borderRadius: '16px', background: gradientBg,
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
              }}>
                <Group sx={{ fontSize: 28, color: 'white' }} />
              </Box>
              <Typography variant="h5" sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontWeight: '800', letterSpacing: '-0.04em', fontSize: { xs: '1.4rem', md: '1.75rem' }
              }}>
                Reactivities
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{
              display: { xs: 'none', md: 'flex' }, gap: 1,
              background: 'rgba(255, 255, 255, 0.02)', borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.06)', p: 1,
            }}>
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button key={item.label} component={NavLink} to={item.path} startIcon={item.icon}
                    sx={{
                      fontSize: '0.9rem', fontWeight: '600', textTransform: 'none',
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                      background: isActive ? gradientBg : 'transparent',
                      borderRadius: '12px', px: 3, py: 1.5,
                      boxShadow: isActive ? '0 4px 20px rgba(99, 102, 241, 0.4)' : 'none',
                      '&:hover': { backgroundColor: isActive ? undefined : 'rgba(255, 255, 255, 0.08)', color: 'white' },
                    }}>
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Menu Text & Mobile Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Desktop Menu Text */}
              <Typography sx={{ 
                display: { xs: 'none', md: 'block' }, 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.9rem' 
              }}>
                User Menu
              </Typography>

              {/* Mobile Menu Button */}
              <IconButton onClick={() => setMobileOpen(!mobileOpen)} sx={{
                display: { xs: 'flex', md: 'none' }, color: 'rgba(255, 255, 255, 0.8)',
                background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px', width: 44, height: 44,
              }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer variant="temporary" anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: 280, border: 'none' } }}>
        <Box sx={{ width: 280, height: '100%', background: darkBg }}>
          
          {/* Mobile Header */}
          <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 3,
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)', background: 'rgba(255, 255, 255, 0.02)',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ p: 1, borderRadius: '12px', background: gradientBg, boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)' }}>
                <Group sx={{ fontSize: 20, color: 'white' }} />
              </Box>
              <Typography sx={{ color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>
                Reactivities
              </Typography>
            </Box>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <Close />
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <List sx={{ px: 2, py: 3 }}>
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={item.label} component={NavLink} to={item.path} onClick={() => setMobileOpen(false)}
                  sx={{
                    mb: 1, borderRadius: '12px',
                    background: isActive ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)' : 'transparent',
                    border: isActive ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
                  }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: isActive ? '#a855f7' : 'rgba(255, 255, 255, 0.7)' }}>
                    {item.icon}
                    <ListItemText primary={item.label} sx={{
                      '& .MuiListItemText-primary': { fontWeight: isActive ? '600' : '500', fontSize: '0.95rem' }
                    }} />
                    {isActive && <Chip size="small" label="Active" sx={{ height: 20, background: gradientBg, color: 'white' }} />}
                  </Box>
                </ListItem>
              );
            })}
          </List>

          {/* Mobile User Section */}
          <Box sx={{ mt: 'auto', p: 2 }}>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <Typography sx={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>Menu Item</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;