import React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (
        <div id='layout'>
            <header>
                <Link to='/'>
                    <h1>Web Dev Student Cheatsheet & Reference</h1>
                </Link>

                <nav>
                    <ul>
                        <ListLink to='/'>Home</ListLink>
                        <ListLink to='/about'>About</ListLink>
                    </ul>
                </nav>
            </header>
            
            <div>
                {children}
            </div>
            
            <Footer />
        </div>
    )
}

