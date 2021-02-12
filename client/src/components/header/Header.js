import axios from 'axios';
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import './header.css'

function Header() {

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;

    const logoutUser = async () => {
        try {
            
            await axios.get('/user/logout')

            localStorage.removeItem('fisrtLogin')

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/" onClick={logoutUser} className="nav-link"><i className="fas fa-sign-out-alt"></i>&nbsp;SignOut</Link></li>  
            </>
        )
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product" className="nav-link"><i className="fas fa-plus-circle"></i>&nbsp;Create Product</Link></li>
            </>
        )
    }


    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className="logo" ><i className="fas fa-volleyball-ball"></i>&nbsp;{ isAdmin ? 'Admin' : 'Ball'}</Link></li>
                </ul>

                <ul>
                    <li><Link to="/" className="nav-link" ><i className="fas fa-home"></i>&nbsp;Home</Link></li>
                    <li><Link to="/product" className="nav-link" ><i className="fas fa-boxes"></i>&nbsp;{ isLogged ? 'Shop' : 'Product'}</Link></li>
                    
                    {isAdmin && adminRouter()}

                    {
                        isLogged ?
                        loggedRouter()
                        :
                        <li><Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i>&nbsp;SignIn</Link></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
