import React from 'react'; 
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Your Health, Our Priority</h1>
                    <p>Book appointments with top doctors, get personalized consultations, and ensure your health is in safe hands.</p>
                    <Link to="/finddoctors">
                        <button className="hero-btn">Get Started</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
