import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";


export default function NavBar() {

    return (
        <div className="nav-bar">
            <nav className="buttons">
                <Link to="/" className="btn">
                    <button className="ui secondary basic button">Home<i className="home icon"></i></button>
                </Link>
                <Link to="Cart" className="btn">
                    <button className="ui secondary basic button">Cart<i className="shopping cart icon"></i></button>
                </Link>
                <Link to="StaffView" className="btn">
                    <button className="ui secondary basic button">Admin<i className="user icon"></i></button>
                </Link>
                <div className="title">
                        <h1>Books</h1>
                </div>
                <div>
                    <h1 className="book-icon"><i className="book icon"></i></h1>
                </div>
                <Link to="SearchBar" className="btn">
                    <button className="ui secondary basic button">Search <i className="search icon"></i></button>
                </Link>
            </nav>
        </div>
    );
       

        
}
