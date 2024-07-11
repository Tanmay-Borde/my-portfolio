import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { isMobile } from 'react-device-detect';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@emotion/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

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
            <Link to={section.url} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={section.title} />
            </Link>
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
              <Link to='/home'>
                <img
                  alt="LOGO"
                  src={`${process.env.PUBLIC_URL}/logo.png`}
                  height={40}
                  width={40}
                  style={imgStyles}
                />
              </Link>
            </Typography>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{
              // bgcolor: primary, 
              justifyContent: 'space-between',
              overflowX: 'auto'
            }}
          >
            {sections.map((section) => (
              <Button
                component={Link}
                // raised
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
      )}
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
          >
            <Link to='/home'>
              <img
                alt="LOGO"
                src={`${process.env.PUBLIC_URL}/logo.png`}
                height={40}
                width={40}
                style={imgStyles}
              />
            </Link>
          </Typography>
          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto', display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Button
                component={Link}
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
            <Divider />
            <Typography variant="h7" align="center" gutterBottom p={2}>
              {`Quick Connect`}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Link href="mailto:tanmayborde64@gmail.com?subject=Hi from the Portfolio" underline="none" target="_blank">
                <EmailIcon color='primary' />
              </Link>
              <Link href="https://www.linkedin.com/in/tanmay-borde-88668b141/" underline="none" target="_blank">
                <LinkedInIcon color='primary' />
              </Link>
              <Link href="https://github.com/Tanmay-Borde" underline="none" target="_blank">
                <GitHubIcon color='primary' />
              </Link>
              <Link href={`${process.env.PUBLIC_URL}#/blogs`} underline="none" target="_blank">
                <ArticleIcon color='primary' />
              </Link>
              <Link href="https://docs.google.com/document/d/1xiuDjQRr6vCYP9wvctCO4CM5xerXb1kkQ0hklAgA4QE/edit?usp=sharing" underline="none" target="_blank">
                <AccountCircleIcon color='primary' />
              </Link>
            </Stack>
          </Drawer>

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
