import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const isActive = (path) => {
    return router.pathname === path ? 'active-nav-link' : '';
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('sidebar-collapsed');
  };

  return (
    <>
      {/* Top Logo Bar */}
      <div className="top-logo-bar">
        <Link href="/">
          <img
            src="/images/IMG_8837.png"
            alt="Hudson C. Smith"
            className="main-logo"
          />
        </Link>
      </div>

      {/* Sidebar Toggle Button */}
      <div className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`custom-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-container">
          <div className="sidebar-links">
            <Link href="/" className={`sidebar-link ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/another" className={`sidebar-link ${isActive('/another')}`}>
              Education
            </Link>
            <Link href="/reading_list" className={`sidebar-link ${isActive('/reading_list')}`}>
              Reading List
            </Link>
            <Link href="/portfolio" className={`sidebar-link ${isActive('/portfolio')}`}>
              Portfolio
            </Link>
            <Link href="/resume" className={`sidebar-link ${isActive('/resume')}`}>
              Resume
            </Link>
            <a
              href="https://www.linkedin.com/in/hudsoncsmith/"
              className="sidebar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="sidebar-footer">
            <p>© {new Date().getFullYear()} Hudson C. Smith</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomSidebar;
