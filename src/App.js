import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import GlobalStyle from './components/styles/GlobalStyle';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const theme = {
  colors: {
    primary: '#3a7bd5',
    secondary: '#00d2ff',
    accent: '#6c4ee6',
    text: '#222',
    textLight: '#444',
    background: '#f8fafc',
    white: '#fff',
  },
  breakpoints: {
    mobile: '600px',
    tablet: '900px',
  }
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Analytics />
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
