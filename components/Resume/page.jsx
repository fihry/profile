import React from 'react';
import { TbBook } from 'react-icons/tb';

export default function Resume() {
    const education = [
        {
            title: 'University School of the Arts',
            duration: '2007 — 2008',
            description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
        },
        {
            title: 'New York Academy of Art',
            duration: '2006 — 2007',
            description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.',
        },
        {
            title: 'High School of Art and Design',
            duration: '2002 — 2004',
            description: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.',
        },
    ];

    const experience = [
        {
            title: 'Creative Director',
            duration: '2015 — Present',
            description: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
        },
        {
            title: 'Art Director',
            duration: '2013 — 2015',
            description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
        },
        {
            title: 'Web Designer',
            duration: '2010 — 2013',
            description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
        },
    ];

    const skills = [
        { name: 'Web design', level: 80 },
        { name: 'Graphic design', level: 70 },
        { name: 'Branding', level: 90 },
        { name: 'WordPress', level: 50 },
    ];

    return (
        <article className="resume" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            {/* Education Section */}
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                       <TbBook/>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    {education.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.duration}</span>
                            <p className="timeline-text">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Experience Section */}
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <TbBook />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    {experience.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.duration}</span>
                            <p className="timeline-text">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Skills Section */}
            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    {skills.map((skill, index) => (
                        <li className="skills-item" key={index}>
                            <div className="title-wrapper">
                                <h5 className="h5">{skill.name}</h5>
                                <data value={skill.level}>{skill.level}%</data>
                            </div>
                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
