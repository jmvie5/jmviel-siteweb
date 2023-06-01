import * as React from 'react'
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {

return (
    <Layout pageTitle="">
        <div className='flex flex-col place-self-center max-w-sm gap-2'>
            <StaticImage src="../images/exclam.png" alt="Attention!"/>
            <p className='text-jmv_white text-2xl text-center font-medium '>Site web en cours de construction.</p>
        </div> 
    </Layout>
)
}

export default IndexPage

export const Head = () => (
<Seo />
)