import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import ToC from '../../components/TableOfContents'
import TopicSection from '../../components/TopicSection'

export default function Index({ data }) {
    console.log('data: ', data)
    return (
        <Layout>
            <ToC data={data.allSanitySection.edges} />
            {data.allSanitySection.edges.map(section => {
              return <TopicSection section={section.node} />
            })}
            
        </Layout>
    )
}

export const query = graphql`
  {
    allSanitySection {
      edges {
        node {
          _id
          anchor_id
          section_active
          type
          _type
          name
          description
          external_links {
            _id
            _type
            description
            url
          }
          subsections {
            ... on SanityGeneralSubsection {
              id
              _id
              _type
              name
              description
              code_samples
              syntax
              subsection_active
              external_links {
                _id
                _type
                description
                url
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