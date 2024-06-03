import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Archive from './components/Archive';
import Header from './components/Header';
// import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Home from './components/Home';
import Blogs from './components/Blogs';

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'About Me', url: '/about' },
  { title: 'Experience', url: '/experience' },
  { title: 'Projects', url: '/projects' },
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
          <Header title="TP" sections={sections} />
          {/* <Home /> */}
          {/* <Blog /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/archive' element={<Archive />} />
          </Routes>
          {/* <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
