import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import ToC from '../../components/TableOfContents'
import NavMenu from '../../components/NavMenu'
import TopicSection from '../../components/TopicSection'
// import { styles } from 'prism-react-renderer/themes/oceanicNext'

const SecondaryNavBar = styled.nav`
  display: flex;
  align-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(255, 159, 128);
`
const NavMenuBtn = styled.button`
  font-family: 'Work Sans', sans-serif;
  font-size: 1em;
  z-index: 1;
  background-color: rgb(255, 159, 128);
  text-align: center;
  padding: 5px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

export default function Index({ data }) {
  // these "nav" references are for the secondary nav that appears once you've scrolled past table of contents
  const [navIsActive, setNavIsActive] = useState(false)
  const [navMenuIsActive, setNavMenuIsActive] = useState(false)
  // console.log('Index data: ', data)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    console.log('handleScroll')
    // TODO: replace offset number with calculation that determines once ToC section has been passed
    if (window.pageYOffset > 900) {
      setNavIsActive(true)
    } else {
      setNavIsActive(false)
      setNavMenuIsActive(false)
    }
  }

  function handleNavMenuToggle() {
    setNavMenuIsActive(navMenuIsActive ? false : true)
  }

  return (
    <>
      <Layout id="top-of-page">
          <ToC data={data.allSanitySection.edges} />
          
          {data.allSanitySection.edges.map(section => {
            return (
              <TopicSection 
                section={section.node} 
                key={section._id}
              />
            )
          })}
      </Layout>

      {navIsActive && (
        <SecondaryNavBar>
          <NavMenuBtn 
            id="navmenu_button"
            onClick={handleNavMenuToggle}
          >
            Toggle Menu
          </NavMenuBtn>
          {navMenuIsActive && (
            <NavMenu 
              data={data.allSanitySection.edges} 
              handleNavMenuToggle={handleNavMenuToggle}
            />
          )}
        </SecondaryNavBar>
      )}

      <Footer />
    </>
  )
}

export const query = graphql`
  {
    allSanitySection(sort: {fields: list_order}) {
      edges {
        node {
          _id
          anchor_id
          section_active
          type
          _type
          name
          description
          list_order
          external_links {
            _id
            _type
            description
            url
          }
          subsections {
            ... on SanityGeneralSubsection {
              _id
              _type
              name
              description
              syntax
              subsection_active
              external_links {
                _id
                _type
                description
                url
              }
              code {
                _type
                code
                language
              }
            }
            ... on SanityShortcutSubsection {
              id
              _id
              _type
              name
              mac_command
              windows_command
              notes
            }
          }
        }
      }
    }
  }
`