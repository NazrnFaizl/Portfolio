import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="ink-section" id="about">
            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10%' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span style={{ fontSize: '1rem', letterSpacing: '8px', color: 'var(--ink-soft)' }}>01 // ABOUT</span>
                    <h2 className="section-title">The Blueprint</h2>
                    <p style={{ fontSize: '1.4rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--ink-soft)' }}>
                        Nasreen is a digital architect currently refining the intersection of <span style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>Machine Intelligence</span> and <span style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>Human Intuition</span>.
                    </p>
                    <p style={{ marginTop: '2rem', color: 'var(--ink-soft)' }}>
                        Based in India, she orchestrates data flows and builds predictive systems with a signature focus on clarity and performance. Her academic journey in AI & Data Science is marked by an 8.28 CGPA, reflecting a disciplined pursuit of technical mastery.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <motion.div
                        className="ink-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>B.Tech</h3>
                        <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink-soft)' }}>AI & DATA SCIENCE</p>
                        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>2021 — 2025 | Institutional Merit</p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ borderTop: '1px solid var(--ink-primary)', paddingTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '2rem', fontStyle: 'italic' }}>8.28</h4>
                            <p style={{ fontSize: '0.7rem', letterSpacing: '2px', fontWeight: 600 }}>CURRENT CGPA</p>
                        </div>
                        <div style={{ borderTop: '1px solid var(--ink-primary)', paddingTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '2rem', fontStyle: 'italic' }}>80%</h4>
                            <p style={{ fontSize: '0.7rem', letterSpacing: '2px', fontWeight: 600 }}>HSC SCORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
