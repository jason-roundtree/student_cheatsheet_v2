import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import throttle from 'lodash.throttle'

const NavMenuPanel = styled.nav`
  background-color: rgb(16, 16, 16);
  opacity: 0.9;
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

export default function NavMenu({ data, handleNavMenuToggle, }) {
    const [activeSection, setActiveSection] = useState(null)
    // console.log('menu props activeSection: ', activeSection)
    useEffect(() => {
        window.addEventListener("scroll", throttle(handleObserver, 400))
        return () => {
        window.addEventListener("scroll", throttle(handleObserver, 400))
        }
    }, [])

    function handleObserver() {
        // console.log('handleObserver')
        const options = { rootMargin: "-30px 0px -50% 0px" }
        const observer = new IntersectionObserver(checkIntersection, options)

        const topicSections = document.querySelectorAll("section")
        topicSections.forEach(section => {
            observer.observe(section)
        })

        function checkIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    intersectionHandler(entry)
                    }
                })
        }

        function intersectionHandler(entry) {
            // console.log('intersectionHandler entry: ', entry)
            const id = entry.target.id
            setActiveSection(id)
            const currentlyActive = document.querySelector(
                "#navmenu_list .current-section"
            )
            const shouldBeActive = document.querySelector(
                `#navmenu_list a[href='#${id}']`
            )
            if (currentlyActive) {
                currentlyActive.classList.remove("current-section")
            }
            if (shouldBeActive) {
                shouldBeActive.classList.add("current-section")
            }
        }
    }
    return (
        <NavMenuPanel>
            <ul id="navmenu_list">
                <li>
                    <StyledLink to="#top-of-page">Home</StyledLink>
                </li>
                {data.map(({ node }) => {
                    return (
                        node.section_active && (
                            <li key={node._id}>
                                <StyledLink
                                    href={`#${node.anchor_id}`}
                                    to={`#${node.anchor_id}`}
                                    onClick={handleNavMenuToggle}
                                    active={node.anchor_id === activeSection}
                                >
                                    {node.name}
                                </StyledLink>
                            </li>
                        )
                    )
                })}
            </ul>
        </NavMenuPanel>
    )
}