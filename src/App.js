// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import WorkFeatures from "./components/Work";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import likeyLogo from "./images/likey-logo.svg";
import instagramIcon from "./images/instagram-icon.png";
import twitterIcon from "./images/Twitter-X-Logo.webp";
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work-features" element={<WorkFeatures />} />
            </Routes>
          </main>

          <footer className="footer mt2 md-mt3 bg-primary py2">
            <div className="wrapper">
              <div className="footer-wrap flex justify-between">
                {/* Logo on the left */}
                <div className="footer__logo">
                  <a href="https://your-link-here.com" className="logo block">
                    <img
                      src={likeyLogo}
                      alt="Likey Logo"
                      style={{ width: "80px" }}
                    />
                  </a>
                </div>

                {/* Icons on the right */}
                <div className="footer__icons flex">
                  <a
                    className="icon icon--small"
                    href="https://twitter.com/likelystory_mcr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={twitterIcon}
                      alt="Twitter Icon"
                      width="24"
                      height="24"
                    />
                  </a>
                  <a
                    className="icon icon--small"
                    href="https://www.instagram.com/likelystory_mcr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram Icon"
                      width="24"
                      height="24"
                    />
                  </a>
                </div>

                {/* Other links */}
                <div className="footer__links md-flex flex-wrap items-center">
                  {/* Other footer links */}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
