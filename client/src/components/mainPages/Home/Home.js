import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

function Home() {
    return (
        <div>
            <div className="link-background">
                <div className="link-back-content">
                    <h1>New Product</h1>
                    <h6>View our Products</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo saepe cupiditate.</p>
                    <Link to="/product">Products</Link>
                </div>
            </div>
            <div className="welcome">
                <h1>Welcome to Ball</h1>
                <div className="icons">
                    <i className="fas fa-volleyball-ball"></i>
                    <i className="fas fa-football-ball"></i>
                    <i className="fas fa-basketball-ball"></i>
                    <i className="fas fa-futbol"></i>
                </div>
            </div>
            <div className="titulo-history">
                <h1>Know the History</h1>
            </div>
            <div className="card">
                <div className="cards">
                    <div className="card-ball">
                        <i className="fas fa-futbol"></i>
                        <h1>Futbol</h1>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum maiores asperiores animi placeat quaerat itaque earum illo laboriosam minima.</p>
                    </div>
                    <div className="card-ball">
                        <i className="fas fa-volleyball-ball"></i>
                        <h1>Volleyball</h1>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum maiores asperiores animi placeat quaerat itaque earum illo laboriosam minima.</p>
                    </div>
                    <div className="card-ball">
                        <i className="fas fa-football-ball"></i>
                        <h1>Rugby</h1>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum maiores asperiores animi placeat quaerat itaque earum illo laboriosam minima.</p>
                    </div>
                    <div className="card-ball">
                    <i className="fas fa-basketball-ball"></i>
                        <h1>Basketball</h1>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum maiores asperiores animi placeat quaerat itaque earum illo laboriosam minima.</p>
                    </div>
                </div>
            </div>
            <div className="followMe">
                <h1>Follow Me</h1>
                <div className="social-media">
                    <Link to="https://github.com/Leandro-Rial">
                        <i className="fab fa-github"></i>
                        <h5>GitHub</h5>
                    </Link>
                </div>
            </div>
            <footer>
                <h2>&copy; 2021</h2>
            </footer>
        </div>
    )
}

export default Home
