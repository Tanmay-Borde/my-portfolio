import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://tanmay-borde.github.io/my-portfolio/">
        Tanmay's Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Link href="mailto:tanmayborde64@gmail.com?subject=Hi from the Portfolio" underline="none" target="_blank">
            <EmailIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/tanmay-borde-88668b141/" underline="none" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/Tanmay-Borde" underline="none" target="_blank">
            <GitHubIcon />
          </Link>
          <Link href={`${process.env.PUBLIC_URL}#/blogs`} underline="none" target="_blank">
            <ArticleIcon />
          </Link>
          <Link href="https://docs.google.com/document/d/1xiuDjQRr6vCYP9wvctCO4CM5xerXb1kkQ0hklAgA4QE/edit?usp=sharing" underline="none" target="_blank">
            <AccountCircleIcon />
          </Link>
        </Stack>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box >
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
