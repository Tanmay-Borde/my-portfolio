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

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'About Me', url: '/about' },
  { title: 'Experience', url: '/experience' },
  { title: 'Projects', url: '/projects' },
  { title: 'Publications', url: '/publications' },
  { title: 'Blogs', url: '/blogs' },
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
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header sections={sections} />
          <Divider />
          <br />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/archive' element={<Archive />} />
          </Routes>
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
