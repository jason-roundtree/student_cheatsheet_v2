import React from 'react'
import Layout from '../../components/layout'
import Footer from '../../components/Footer'

export default function About() {
    return (
        <div>
            <Layout>
                <div id='about'>
                    <p>
                        My goal in making this site is to provide a resource for students learning web development, as well as for my own edification and as a reference for more experienced coders who may find the content useful. My intent is not for this to be an exhaustive resource on the various topics, but rather, I wanted to include content that I've found helpful and that addresses common questions and oversights that often come up as I've been helping students (and myself) learn web development. 
                    </p>
                    <p>
                        The subjects are primarily focused on popular technologies that are often taught in coding bootcamps and online tutorials. I also tend to add things that I constantly find myself having to google and re-reference. Many explanations and code examples I've included are borrowed directly from great websites like Mozilla Developer Network. I try to only use other content verbatim when I think a description or example really elucidates a subject nicely and it isn't too technical and convoluted, particularly for somebody relatively newer to coding. For content that isn't as beginner friendly I try to mold or reframe it to be a little more accessible. I try to highlight differences between Mac and Windows where necessary, but keep in mind that everybody's systems can differ slightly - particularly with shortcuts and key-bindings - so if something I have listed isn't working as expected you can probably do a little searching to figure out how the commands work for you.
                    </p>
                    <p>
                        I'm planning on continuially adding new topics, examples, refining/simplifying explanations, editing mistakes and adding enhancements, so if there's anything that you think should be added, or if you see any errors, or if you have any feedback at all, I'd love to hear from you!
                    </p>
                </div>
            </Layout>
            <Footer />
        </div>
    )
}
    