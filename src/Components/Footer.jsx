import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/brindha-s-21656a249/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            Brindha Selvaraj<FaLinkedin size={30} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
