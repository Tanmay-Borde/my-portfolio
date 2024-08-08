import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';
import XIcon from '@mui/icons-material/X';

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
            <Tooltip title='E-mail' placement='left' arrow>
              <EmailIcon fontSize='small' />
            </Tooltip>
          </Link>
          <Link href="https://www.linkedin.com/in/tanmay-borde-88668b141/" underline="none" target="_blank">
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
