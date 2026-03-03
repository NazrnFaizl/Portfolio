import React from 'react';

const Certifications = () => {
    const certs = [
        { name: 'Digital Productivity', org: 'UNICEF' },
        { name: 'AR & VR Development', org: 'NASSCOM' },
        { name: 'Paper Publication', org: 'Standard Journal' }
    ];

    return (
        <section id="certifications">
            <h2>Certifications</h2>
            <div className="grid-list" style={{ gap: '1rem' }}>
                {certs.map((cert, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 500 }}>{cert.name}</h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{cert.org}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
