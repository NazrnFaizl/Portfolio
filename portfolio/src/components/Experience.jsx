import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
                {
            company: 'CAPE START',
            role: 'RESEARCH ANALYST INTERN',
            year: 'Aug 2025 - Present',
            summary: 'Developed real-time computer vision models for object detection, person tracking, ReID, and drone-based detection using deep learning.'
        },
        {
            company: 'EVOLVE ROBOTICS',
            role: 'DATA SCIENCE INTERN',
            year: 'JAN 2025',
            summary: 'Engineered robust data pipelines and pre-processing modules for robotics analytics.'
        },
        {
            company: 'SPECTRUM SOFTECH',
            role: 'MACHINE LEARNING INTERN',
            year: 'AUG 2024',
            summary: 'Developed predictive models and executed exploratory data analysis for system optimization.'
        }

    ];

    return (
        <section className="ink-section" id="experience" style={{ display: 'block' }}>
            <span style={{ fontSize: '1rem', letterSpacing: '8px', color: 'var(--ink-soft)' }}>03 // EXPERIENCE</span>
            <h2 className="section-title">Timeline</h2>

            <div style={{ marginTop: '80px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '1px', background: 'rgba(0,0,0,0.1)' }} />

                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{ paddingLeft: '60px', marginBottom: '100px', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', left: '-5px', top: '0', width: '11px', height: '11px', background: 'var(--ink-primary)', borderRadius: '50%' }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--ink-soft)', background: '#eee', padding: '2px 8px' }}>
                                {exp.year}
                            </span>
                        </div>

                        <h3 style={{ fontSize: '3rem', margin: '20px 0 10px', fontWeight: 300 }}>{exp.company}</h3>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--ink-soft)', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px' }}>
                            {exp.role}
                        </h4>
                        <p style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                            {exp.summary}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;



