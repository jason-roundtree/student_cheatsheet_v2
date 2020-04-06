import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div id='layout'>
        <header>
            <Link to='/'>
                <h1 style={{ textAlign: `center` }}>Student Cheatsheet & Reference</h1>
            </Link>

            <ul style={{ margin: `auto`, textAlign: `center` }}>
                <ListLink to='/'>Home</ListLink>
                <ListLink to='/about'>About</ListLink>
            </ul>
        </header>
        
        <div>
            {children}
        </div>
    </div>
)
