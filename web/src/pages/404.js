import React from 'react'
import { navigate } from '@reach/router'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    font-size: 2em;
`
const P = styled.p`
    font-size: .75em;
    margin-bottom: 20px;
`
const A = styled.a`
    color: rgb(255, 159, 128);
`
export default function _404() {
    // console.log('props: ', props)
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <Container>
            <h2>Page Not Found</h2>
            <P>The page you're looking for doesn't exist</P>
            <A onClick={handleBack}>Back</A>
        </Container>
    )

}

