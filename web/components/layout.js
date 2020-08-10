import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout(props) {
    return (
        <div id='layout'>
            <header>
                <h1>Web Dev Student Cheatsheet & Reference</h1>

                <nav>
                    <ul>
                        {props.id !== "about" 
                            ?   <ListLink to='/about'>About</ListLink>
                            :   <ListLink to='/'>Home</ListLink>
                        }
                    </ul>
                </nav>
            </header>
            
            <>{props.children}</>
            
        </div>
    )
}

