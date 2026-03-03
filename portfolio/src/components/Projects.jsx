import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Projects = () => {
    const works = [
        {
            title: 'Body Fat Analytics',
            category: 'MACHINE LEARNING',
            desc: 'Precision regression modeling for physiological parameter prediction using Python.',
            stat: '98% ACCURACY'
        },
        {
            title: 'Visionary AR',
            category: 'AUGMENTED REALITY',
            desc: 'Immersive object tracking and image recognition app utilizing Unity & Vuforia.',
            stat: 'REAL-TIME TRACKING'
        },
        {
            title: 'MediTrack',
            category: 'Web Application',
            desc: 'A real-time medical inventory and patient tracking system designed to streamline hospital workflows, monitor assets, and improve operational efficiency.',
            stat: 'LIVE TRACKING & DATA MONITORING',
            link: 'https://github.com/NazrnFaizl/MedTrack'
        },
        {
            title: 'Uruttai Chat App',
            category: 'Web Application',
            desc: 'A real-time messaging platform that enables seamless one-to-one and group communication with instant notifications and secure message delivery.',
            stat: 'INSTANT REAL-TIME MESSAGING'
        }
    ];

    return (
        <section className="ink-section" id="projects" style={{ display: 'block' }}>
            <span style={{ fontSize: '1rem', letterSpacing: '8px', color: 'var(--ink-soft)' }}>
                04 // PROJECTS
            </span>

            <h2 className="section-title">Selected Works</h2>

            <div
                className="projects-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                    gap: '30px',
                    marginTop: '60px'
                }}
            >
                {works.map((work, idx) => (
                    <motion.div
                        key={idx}
                        className="ink-card"
                        whileHover={{ backgroundColor: 'rgba(18,18,18,0.02)' }}
                        style={{
                            padding: '4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <span
                            style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                letterSpacing: '3px',
                                color: 'var(--ink-soft)'
                            }}
                        >
                            {work.category}
                        </span>

                        <h3
                            style={{
                                fontSize: '3rem',
                                margin: '20px 0',
                                fontWeight: 400
                            }}
                        >
                            {work.title}
                        </h3>

                        <div
                            style={{
                                height: '1px',
                                width: '100%',
                                background: 'rgba(0,0,0,0.1)',
                                marginBottom: '30px'
                            }}
                        />

                        <p
                            style={{
                                fontSize: '1.2rem',
                                color: 'var(--ink-soft)',
                                flex: 1
                            }}
                        >
                            {work.desc}
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                marginTop: '40px'
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 800,
                                    border: '1px solid black',
                                    padding: '5px 15px'
                                }}
                            >
                                {work.stat}
                            </div>

                            {/* Only show link if it exists */}
                            {work.link && (
                                <a
                                    href={work.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--ink-primary)',
                                        fontSize: '1.5rem'
                                    }}
                                >
                                    <FaExternalLinkSquareAlt />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;