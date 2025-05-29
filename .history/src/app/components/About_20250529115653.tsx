import React from 'react';

const About: React.FC = () => (
    <section style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem' }}>
        <h1>About EmpowerCare</h1>
        <p>
            EmpowerCare is dedicated to providing innovative solutions that improve the quality of care and empower individuals to lead healthier lives. Our mission is to bridge the gap between technology and healthcare, making support accessible, efficient, and compassionate.
        </p>
        <h2>Our Values</h2>
        <ul>
            <li>Compassionate Care</li>
            <li>Innovation</li>
            <li>Accessibility</li>
            <li>Integrity</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
            Have questions or want to learn more? Reach out at <a href="mailto:info@empowercare.com">info@empowercare.com</a>.
        </p>
    </section>
);

export default About;