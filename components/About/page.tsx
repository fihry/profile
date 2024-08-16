"use client"; // Ensure this component is treated as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import Images from '@/public/Images/imageData.json';
import { TbX } from "react-icons/tb";

export default function About() {
    const [isModalActive, setIsModalActive] = useState(false);

    const toggleModal = () => {
        setIsModalActive(prevState => !prevState);
    };

    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I&apos;m a Fullstack Developer from Larache City, working in web development and UI/UX design.
                    I enjoy turning complex problems into efficient, scalable, and maintainable solutions.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring
                    across your message and identity in the most creative way.
                </p>
            </section>

            {/* Service Section */}
            <section className="service">
                <h3 className="h3 service-title">What I&apos;m doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Image src={Images.iconDesign} alt="design icon" width="40" height="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Image src={Images.iconDev} alt="Web development icon" width="40" height="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>
                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Image src={Images.iconApp} alt="mobile app icon" width="40" height="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile apps</h4>
                            <p className="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Image src={Images.iconPhoto} alt="camera icon" width="40" height="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>
                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <Image src={Images.avatarOne} alt="Daniel Lewis" width="80" height="80" data-testimonials-avatar />
                            </figure>
                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel Lewis</h4>
                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <Image src={Images.avatarTow} alt="Jessica Miller" width="80" height="80" data-testimonials-avatar />
                            </figure>
                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica Miller</h4>
                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <Image src={Images.avatarTree} alt="Emily Evans" width="80" height="80" data-testimonials-avatar />
                            </figure>
                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily Evans</h4>
                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <Image src={Images.avatarFore} alt="Henry William" width="80" height="80" data-testimonials-avatar />
                            </figure>
                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry William</h4>
                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Testimonials Modal */}
            <div className={`modal-container ${isModalActive ? 'active' : ''}`} data-modal-container>
                <div className={`overlay ${isModalActive ? 'active' : ''}`} data-overlay onClick={toggleModal}></div>
                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn onClick={toggleModal}>
                        <TbX />
                    </button>
                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <Image src={Images.avatarOne} alt="Daniel Lewis" width="80" height="80" data-modal-img />
                        </figure>
                        <Image src={Images.iconQuote} alt="Quote icon" width="80" height="80" />
                    </div>
                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title>Daniel Lewis</h4>
                        <time dateTime="2021-06-14">14 June, 2021</time>
                        <div data-modal-text>
                            <p>
                                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Clients Section */}
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">
                    <li className="clients-item">
                        <a href="#">
                            <Image src={Images.logoOneColor} alt="Client 1 logo" width="70" height="60" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <Image src={Images.logoTowColor} alt="Client 2 logo" width="70" height="60" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <Image src={Images.logoTreeColor} alt="Client 3 logo" width="70" height="60" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <Image src={Images.logoForeColor} alt="Client 4 logo" width="70" height="60" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <Image src={Images.logoFiveColor} alt="Client 5 logo" width="70" height="60" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <Image src={Images.logoSexColor} alt="Client 6 logo" width="70" height="60" />
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
}
