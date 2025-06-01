import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { isMobile } from 'react-device-detect';
import { Box, Divider, Drawer, IconButton, Link, List, ListItem, ListItemText, Stack, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@emotion/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';

const imgStyles = {
  marginTop: "10px",
  marginLeft: "1.3rem"
}

function Header(props) {
  const { sections } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (section) => {
    setMobileOpen(false);
  };

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sections.map((section) => (
          <ListItem button key={section.title} onClick={() => handleListItemClick(section)}>
            <RouterLink to={section.url} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={section.title} />
            </RouterLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {!isMobile && (
        <Box>
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              <RouterLink to='/home'>
                <img
                  alt="LOGO"
                  src={`${process.env.PUBLIC_URL}/logo.png`}
                  height={40}
                  width={40}
                  style={imgStyles}
                />
              </RouterLink>
            </Typography>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{
              justifyContent: 'space-between',
              overflowX: 'auto'
            }}
          >
            {sections.map((section) => (
              <Button
                component={RouterLink}
                raised
                color='primary'
                noWrap
                key={section.title}
                variant="body2"
                to={section.url}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </Button>
            ))}
          </Toolbar>
        </Box>
      )
      }
      {
        isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
            >
              <RouterLink to='/home'>
                <img
                  alt="LOGO"
                  src={`${process.env.PUBLIC_URL}/logo.png`}
                  height={40}
                  width={40}
                  style={imgStyles}
                />
              </RouterLink>
            </Typography>
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto', display: { xs: 'none', md: 'flex' } }}>
              {sections.map((section) => (
                <Button
                  component={RouterLink}
                  color='primary'
                  noWrap
                  key={section.title}
                  variant="body2"
                  to={section.url}
                  sx={{ p: 1, flexShrink: 0 }}
                >
                  {section.title}
                </Button>
              ))}
            </Toolbar>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'left' : 'right'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better performance on mobile
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
              }}
            >
              {drawerContent}
              <Box sx={{ alignItems: 'flex-end', pb: 1, mt: 'auto' }}>
                <Divider />
                <Typography variant="h7" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', p: 2 }}>
                  {`Quick Connect`}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Link href="mailto:tanmayborde64@gmail.com?subject=Hi from the Blogfolio" underline="none" target="_blank">
                    <Tooltip title='E-mail' placement='top' arrow>
                      <EmailIcon fontSize='small' />
                    </Tooltip>
                  </Link>
                  <Link href="https://www.linkedin.com/in/tanmay-borde/" underline="none" target="_blank">
                    <Tooltip title='LinkedIn' placement='top' arrow>
                      <LinkedInIcon fontSize='small' />
                    </Tooltip>
                  </Link>
                  <Link href="https://x.com/tanmay_borde?s=21" underline="none" target="_blank">
                    <Tooltip title='X (Twitter)' placement='top' arrow>
                      <XIcon fontSize='small' />
                    </Tooltip>
                  </Link>
                  <Link href="https://github.com/Tanmay-Borde" underline="none" target="_blank">
                    <Tooltip title='GitHub' placement='top' arrow>
                      <GitHubIcon fontSize='small' />
                    </Tooltip>
                  </Link>
                </Stack>
              </Box>
            </Drawer>
            <Divider />
          </Box >
        )
      }
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
