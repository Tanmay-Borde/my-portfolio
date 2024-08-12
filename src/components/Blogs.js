import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import TechBlogs from './TechBlogs';
import BusinessBlogs from './BusinessBlogs';
import HumanityBlogs from './HumanityBlogs';
import { Container } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Blogs() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedtab, setSelectedTab] = useState('');

  useEffect(() => {
    setSelectedTab(location.pathname.split('/')[2]);
    if (location.pathname === '/blogs') {
      navigate('/blogs/tech-blogs');
    }
  }, [location, navigate]);

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, width: '100%', height: '100%', mt: 1 }} >
        <Tabs value={selectedtab || 'tech-blogs'}>
          <TabsList sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, width: '100%' }}>
            <Tab value={'tech-blogs'} to={'tech-blogs'} slots={{ root: Link }} style={{ textDecoration: 'none' }}>
              {`Technology`}
            </Tab>
            <Tab value={'business-blogs'} to={'business-blogs'} slots={{ root: Link }} style={{ textDecoration: 'none' }}>
              {`Business`}
            </Tab>
            <Tab value={'humanity-blogs'} to={'humanity-blogs'} slots={{ root: Link }} style={{ textDecoration: 'none' }}>
              {`Humanity`}
            </Tab>
          </TabsList>
          <TabPanel value={'tech-blogs'}>
            <TechBlogs />
          </TabPanel>
          <TabPanel value={'business-blogs'}>
            <BusinessBlogs />
          </TabPanel>
          <TabPanel value={'humanity-blogs'}>
            <HumanityBlogs />
          </TabPanel>
        </Tabs>
      </Container >
    </>
  )

}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${grey[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${grey[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(({ theme }) => `
  width: 100%;
  font-size: 0.875rem;
  padding: 2px 2px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
`);

const TabsList = styled(BaseTabsList)(({ theme }) => `
  min-width: 400px;
  background-color: ${grey[900]};
  border-radius: 12px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
`);
