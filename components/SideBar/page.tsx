"use client"; // Ensure this component runs on the client side

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Images from '@/public/Images/imageData.json';
import { TbMail, TbChevronDown, TbPhone, TbCalendar, TbLocation, TbBrandFacebook, TbBrandTwitter, TbBrandInstagram } from "react-icons/tb";

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image src={Images.MyProfile} alt="Mohamed El Fihry" width="80" height="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Mohamed El Fihry">EL-FIHRY</h1>
          <p className="title" title='Fullstack'>Web developer</p>
        </div>

        <button className={`info_more-btn ${isSidebarOpen ? 'active' : ''}`} data-sidebar-btn onClick={handleToggleSidebar}>
          <span>Show Contacts</span>
          <TbChevronDown />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box"><TbMail /></div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:fihrylara@gmail.com" className="contact-link">fihrylara@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box"><TbPhone /></div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+212696147796" className="contact-link">+212-696147796</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box"><TbCalendar /></div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2001-11-02">Nov 02, 2001</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box"><TbLocation /></div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Larache, Morocco</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item"><a href="#" className="social-link"><TbBrandFacebook /></a></li>
            <li className="social-item"><a href="#" className="social-link"><TbBrandTwitter /></a></li>
            <li className="social-item"><a href="#" className="social-link"><TbBrandInstagram /></a></li>
          </ul>
        </div>
      )}
    </aside>
  );
}