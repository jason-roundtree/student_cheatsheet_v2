import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import throttle from 'lodash.throttle'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import ToC from '../components/TableOfContents'
import NavMenu from '../components/NavMenu'
import TopicSection from '../components/TopicSection'

const SecondaryNavBar = styled.nav`
  display: flex;
  align-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(255, 159, 128);
  /* box-shadow: 0px -5px 32px 6px rgb(255, 253, 240); */
`
const NavMenuBtn = styled.button`
  font-family: 'Work Sans', sans-serif;
  font-size: 1em;
  z-index: 1;
  color: rgb(255, 253, 240);
  background-color: rgb(255, 159, 128);
  text-align: center;
  padding: 5px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    text-shadow: rgb(255, 253, 240) 1px 0 10px;
  }
`

export default function Index({ data }) {
  // these "nav" references are for the secondary nav that appears once you've scrolled past table of contents
  const [navIsActive, setNavIsActive] = useState(false)
  const [navMenuIsActive, setNavMenuIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 400))
    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 400))
    }
  }, [])

  function handleScroll() {
    // console.log('handleScroll')
    // TODO: is this all neccessary for cross-browser issues?
    // setDocScrollTop(Math.max(document.documentElement.scrollTop, document.body.scrollTop))
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
    <div id="top-of-page">
      <Layout>
          <SEO />
          <ToC data={data.allSanitySection.edges} />
          
          {data.allSanitySection.edges.map(({node}) => {
            return (
              <TopicSection 
                section={node} 
                key={node._id}
              />
            )
          })}
      </Layout>

      {navIsActive && (
        <SecondaryNavBar>
          <NavMenuBtn 
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
    </div>
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
          _rawDescription(resolveReferences: {maxDepth: 10})
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
              _rawDescriptionSubsection(resolveReferences: {maxDepth: 10})
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
              notes
              _rawMacCommand(resolveReferences: {maxDepth: 10})
              _rawWindowsCommand(resolveReferences: {maxDepth: 10})
            }
          }
        }
      }
    }
  }
`