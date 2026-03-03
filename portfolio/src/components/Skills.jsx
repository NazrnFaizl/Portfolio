import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        {
            title: 'Technical Ink',
            skills: ['Python', 'React.js', 'Machine Learning', 'SQL', 'Unity 3D', 'Vuforia AR']
        },
        {
            title: 'Philosophies',
            skills: ['Leadership', 'Event Orchestration', 'Time Management', 'Structural Analysis']
        }
    ];

    return (
        <section className="ink-section" id="skills" style={{ display: 'block' }}>
            <span style={{ fontSize: '1rem', letterSpacing: '8px', color: 'var(--ink-soft)' }}>02 // SKILLS</span>
            <h2 className="section-title">Technique</h2>

            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', marginTop: '60px' }}>
                {categories.map((cat, idx) => (
                    <div key={idx}>
                        <h3 style={{ fontSize: '1.8rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>{cat.title}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {cat.skills.map((skill, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: sIdx * 0.1 }}
                                    className="skill-brush"
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        padding: '0.8rem 1.5rem',
                                        background: 'linear-gradient(90deg, rgba(18,18,18,0.03) 0%, transparent 100%)',
                                        borderLeft: '4px solid var(--ink-primary)'
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ marginTop: '100px', textAlign: 'center', padding: '4rem', background: 'rgba(18,18,18,0.02)', border: '1px dashed var(--ink-primary)' }}
            >
                <h3 style={{ fontSize: '2rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>ADAX Secretary 2024-2025</h3>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--ink-soft)' }}>
                    Leading departmental coordination and technical event management with a focus on collaborative excellence and operational precision.
                </p>
            </motion.div>
        </section>
    );
};

export default Skills;
