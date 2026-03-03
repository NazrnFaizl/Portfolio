import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="ink-section" id="contact" style={{ display: 'block', paddingBottom: '50px' }}>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                <span style={{ fontSize: '1rem', letterSpacing: '8px', color: 'var(--ink-soft)' }}>05 // CONTACT</span>
                <h2 className="section-title">Let's Connect</h2>

                <p style={{ fontSize: '1.5rem', fontWeight: 300, lineHeight: 1.6, marginTop: '40px', color: 'var(--ink-soft)' }}>
                    Whether you have an inquiry for collaboration or simply wish to discuss tech, I am always open to a conversation.
                </p>

                <div className="contact-flex-container" style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', gap: '5rem', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '4px', opacity: 0.5 }}>EMAIL</span>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
                            <a href="mailto:nazrnfaizl@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>nazrnfaizl@gmail.com</a>
                        </h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '4px', opacity: 0.5 }}>PHONE</span>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>9442902242</h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '4px', opacity: 0.5 }}>LINKEDIN</span>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
                            <a href="https://www.linkedin.com/in/fathimanasreen3/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>in/fathimanasreen3</a>
                        </h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '4px', opacity: 0.5 }}>GITHUB</span>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
                            <a href="https://github.com/NazrnFaizl" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>github.com/NazrnFaizl</a>
                        </h3>
                    </div>
                </div>

                <div style={{ marginTop: '150px' }}>
                    <div style={{ height: '1px', width: '100%', background: 'var(--ink-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ background: 'var(--paper)', padding: '0 40px', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                            Fathima Nasreen F.
                        </div>
                    </div>
                    <p style={{ marginTop: '40px', fontSize: '0.81rem', letterSpacing: '5px', fontWeight: 600, color: 'var(--ink-soft)' }}>
                        DESIGNED & ARCHIVED — 2026
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
