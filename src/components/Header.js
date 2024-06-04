import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
// import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
// const primary = grey[50];

const imgStyles = {
  marginTop: "10px",
}

function Header(props) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {/* {title} */}
          <a href='/home'>
            <img
              alt="LOGO"
              src={`${process.env.PUBLIC_URL}/logo.png`}
              height={40}
              width={40}
              style={imgStyles}
            />
          </a>

        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
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
          // <Button>
          <Button
            component={Link}
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
          // </Button>
        ))}
      </Toolbar>
    </React.Fragment>
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
