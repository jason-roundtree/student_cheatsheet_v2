import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    // TODO: is it problematic getting pathname from window? Better way to do it using Gatsby with React Router?
    const path = window.location.pathname
    console.log('path: ', path)
    return (
        <div id='layout'>
            <header>
                <h1>Web Dev Student Cheatsheet & Reference</h1>

                <nav>
                    <ul>
                        {path === "/" 
                            ?   <ListLink to='/about'>About</ListLink>
                            :   <ListLink to='/'>Home</ListLink>
                        }
                    </ul>
                </nav>
            </header>
            
            <>{children}</>
            
        </div>
    )
}

