import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
