import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <section className="ink-section" id="home">
            <div className="splatter" style={{ top: '10%', left: '5%' }}>
                <svg width="400" height="400" viewBox="0 0 200 200">
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74,43.2C66.7,57.2,57.7,70.6,45.2,78.5C32.7,86.4,16.3,88.8,1,87C-14.3,85.2,-28.7,79.2,-41.8,71.6C-54.9,63.9,-66.7,54.7,-74.6,42.9C-82.5,31.1,-86.6,16.6,-86.4,2.1C-86.2,-12.4,-81.8,-26.8,-73.4,-39C-65,-51.2,-52.6,-61.2,-39.1,-68.8C-25.6,-76.4,-12.8,-81.7,1.3,-84C15.4,-86.3,30.8,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div style={{ width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span style={{ fontSize: '1.2rem', letterSpacing: '4px', color: 'var(--ink-soft)' }}>THE ART OF ENGINEERING</span>
                    <h1 style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', marginTop: '20px', fontWeight: 300 }}>
                        Fathima <br />
                        <span style={{ fontStyle: 'italic', fontWeight: 600 }}>Nasreen F.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="home-flex-container"
                    style={{ marginTop: '50px', display: 'flex', gap: '3rem', alignItems: 'flex-start' }}
                >
                    <p style={{ maxWidth: '400px', fontSize: '1.1rem', color: 'var(--ink-soft)', borderLeft: '2px solid var(--ink-primary)', paddingLeft: '30px' }}>
                        Transforming complex data into digital poetry. A Software Developer merging AI precision with innovative design.
                    </p>

                    <div style={{ alignSelf: 'center' }}>
                        <button className="ink-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            Explore Projects <FaArrowRight />
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="splatter" style={{ bottom: '10%', right: '5%', opacity: 0.1 }}>
                <svg width="600" height="600" viewBox="0 0 200 200">
                    <path fill="currentColor" d="M37.5,-64.1C48.1,-56.3,56.1,-45.5,63.3,-34.2C70.4,-22.9,76.8,-11.5,76.6,-0.1C76.4,11.3,69.5,22.5,61.9,32.7C54.3,42.8,46,51.8,35.9,59C25.8,66.1,12.9,71.4,-0.4,72.1C-13.8,72.8,-27.6,68.9,-38.8,61.9C-50.1,55,-58.8,45,-66.1,33.7C-73.4,22.4,-79.2,9.8,-78.9,-2.6C-78.5,-15.1,-72,-27.4,-63.3,-37.9C-54.6,-48.5,-43.7,-57.3,-32.2,-64.6C-20.7,-71.9,-10.3,-77.7,0.7,-78.9C11.7,-80.1,23.4,-76.7,37.5,-64.1Z" transform="translate(100 100)" />
                </svg>
            </div>
        </section>
    );
};

export default Home;
