import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import ToC from '../../components/TableOfContents'
import TopicSection from '../../components/TopicSection'

export default function Index({ data }) {
    console.log('Index data: ', data)
    return (
      <>
        <Layout>
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