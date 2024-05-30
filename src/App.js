import './App.css';
import Blog from './components/Blog';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Archive from './components/Archive';
import Header from './components/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const sections = [
  { title: 'About Me', url: '/about' },
  { title: 'Experience', url: '/experience' },
  { title: 'Projects', url: '/projects' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Archive', url: '/archive' },
];

const myTheme = createTheme(
  {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
  }
);

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Tanmay's Portfolio" sections={sections} />
          <Blog />
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/archive' element={<Archive />} />
          </Routes>
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
