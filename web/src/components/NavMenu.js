import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavMenuPanel = styled.nav`
    background-color: rgb(16, 16, 16);
    opacity: .9;
    position: fixed;
    top: 0;
    width: 100%;
    text-align: center;
    /* TODO: how does scroll work when menu expands beyond bottom of window? (scroll currently operates on the content behind the menu) */
    font-size: 1.2em;
`
const StyledLink = styled(props => <Link {...props} />)`
    color: rgb(255, 159, 128);
    &:hover {
        border-bottom: 2px solid rgb(144, 210, 245);
    }
    ${({ active }) => active && `
        color: rgb(144, 210, 245);
        text-shadow: rgb(94, 183, 232) 1px 0 10px;
    `}
`

export default function NavMenu({ data, handleNavMenuToggle, activeSection }) {
    // console.log('menu props activeSection: ', activeSection)
    return (
        <NavMenuPanel>
            <ul id="navmenu_list">
                <li>
                    <StyledLink to='#top-of-page'>Home</StyledLink>
                </li>
                {data.map(({ node }) => {
                    return node.section_active && (
                        <li key={node._id}>
                            <StyledLink 
                                // href={`#${node.anchor_id}`}
                                to={`#${node.anchor_id}`}
                                onClick={handleNavMenuToggle}
                                // TODO: instead of keeping current-section class in css file is there a way to do it with styled-components props and Gatsby
                                active={node.anchor_id === activeSection}
                            >
                                {node.name}
                            </StyledLink>
                        </li>
                    )
                })}
            </ul>
        </NavMenuPanel>
    )
}