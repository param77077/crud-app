import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    // const navItems = ["Home", "About", "Contact"]
    const navItems = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About",
            url: "/about"
        },
        {
            title: "Contact",
            url: "/contact"
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">React User</Link>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {navItems.map((item, key) => {
                            return (
                                <li className="nav-item" key={key}>
                                    <NavLink exact className="nav-link" to={item.url}>{item.title} <span className="sr-only">(current)</span></NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <button className='btn btn-outline-light'>Add User</button>
            </div>
        </nav>
    )
}

export default Navbar