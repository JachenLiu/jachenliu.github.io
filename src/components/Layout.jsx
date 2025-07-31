import React from 'react';
import '../styles/globals.css';
import '../styles/Layout.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Winkchen } from './Winkchen';
import { ThemeProvider } from '../context/ThemeContext';

export function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="layout-container">
        <header>
          <Navbar />
        </header>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">    
          <Footer />
        </footer>
        <Winkchen />
      </div>
    </ThemeProvider>
  );
}