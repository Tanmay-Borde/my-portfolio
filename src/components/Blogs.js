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
import { Box } from '@mui/material';
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
    <OuterShell>
      <Tabs value={selectedtab} sx={{ width: '100%' }}>
        <TabsBar>
          <Tab value={'tech-blogs'} to={'tech-blogs'} slots={{ root: Link }} style={{ textDecoration: 'none' }}>
            {`Technology`}
          </Tab>
          <Tab value={'business-blogs'} to={'business-blogs'} slots={{ root: Link }} style={{ textDecoration: 'none' }}>
            {`Business`}
          </Tab>
          <Tab value={'humanity-blogs'} to={'humanity-blogs'} slots={{ root: Link }} style={{ textDecoration: 'none' }}>
            {`Humanity`}
          </Tab>
        </TabsBar>
        <ContentPanel value={'tech-blogs'}>
          <TechBlogs />
        </ContentPanel>
        <ContentPanel value={'business-blogs'}>
          <BusinessBlogs />
        </ContentPanel>
        <ContentPanel value={'humanity-blogs'}>
          <HumanityBlogs />
        </ContentPanel>
      </Tabs>
    </OuterShell>
  )

}

const OuterShell = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1100,
  minWidth: 280,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const TabsBar = styled(BaseTabsList)(({ theme }) => ({
  width: '100%',
  maxWidth: 1100,
  minWidth: 280,
  backgroundColor: 'rgba(15, 23, 42, 0.7)',
  borderRadius: theme.spacing(2.5),
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: theme.spacing(3.5),
  display: 'flex',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.3),
  flexWrap: 'nowrap',
  justifyContent: 'center',
  boxShadow: '0 18px 45px rgba(15, 23, 42, 0.55)',
  backdropFilter: 'blur(14px)',
  border: '1px solid rgba(255,255,255,0.05)',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    justifyContent: 'flex-start',
  },
}));

const Tab = styled(BaseTab)(({ theme }) => ({
  color: '#fff',
  cursor: 'pointer',
  fontSize: '0.98rem',
  fontWeight: 600,
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  padding: theme.spacing(1.3, 2.6),
  border: '1px solid transparent',
  borderRadius: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 1 0',
  minWidth: 160,
  transition: 'all 0.2s ease',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
  },

  [`&.${buttonClasses.disabled}`]: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  [`&.${tabClasses.selected}`]: {
    backgroundColor: '#fff',
    color: '#0f172a',
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.35)',
    borderColor: 'rgba(15, 23, 42, 0.18)',
  },

  [theme.breakpoints.down('sm')]: {
    flex: '0 0 auto',
    minWidth: 120,
    padding: theme.spacing(1, 2.1),
    fontSize: '0.9rem',
  },
}));

const ContentPanel = styled(BaseTabPanel)(({ theme }) => ({
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  background: 'transparent',
  padding: 0,
  border: 'none',
  opacity: 1,
}));
