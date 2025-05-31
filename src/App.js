import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Archive from './components/Archive';
import Header from './components/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Home from './components/Home';
import Blogs from './components/Blogs';
import { Divider } from '@mui/material';
import Publications from './components/Publications';
import { Helmet } from 'react-helmet';
import TechBlogs from './components/TechBlogs';
import BusinessBlogs from './components/BusinessBlogs';
import HumanityBlogs from './components/HumanityBlogs';
import Feeds from './components/Feeds';

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'About Me', url: '/about' },
  { title: 'Experience', url: '/experience' },
  { title: 'Projects', url: '/projects' },
  // { title: 'Publications', url: '/publications' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Feeds', url: '/feeds' },
  { title: 'Archive', url: '/archive' },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <Helmet>
        <title>{`Tanmay's Blogfolio`}</title>
        <meta name='Tanmay Blogfolio'></meta>
      </Helmet>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header sections={sections} />
          <Divider flexItem='true' />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/blogs' element={<Blogs />}>
              <Route path='tech-blogs' element={<TechBlogs />} />
              <Route path='business-blogs' element={<BusinessBlogs />} />
              <Route path='humanity-blogs' element={<HumanityBlogs />} />
              <Route index element={<TechBlogs />} />
            </Route>
            <Route path='/feeds' element={<Feeds />} />
            <Route path='/archive' element={<Archive />} />
          </Routes>
          <Divider flexItem='true' />
          <Footer
            title="Quick Connect"
            description="Crafted by Tanmay & Gemini."
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;