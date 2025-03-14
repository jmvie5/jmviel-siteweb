import * as React from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <Layout>
            <div className="bg-[url(../images/mascarade.webp)] bg-cover bg-center h-screen">
                <div className="flex flex-col my-4  ">
                    <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
                    <NavBar dark more />
                </div>
            </div>
            <div className=" bg-gradient-to-b from-black to bg-jmv_dark h-10"></div>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo>
    <link href='https://jeanmichelviel.ca/static/guitar-abab7ba906482382f6d1aa8653c533a5.webp' rel='image'/>
    <link href='https://jeanmichelviel.ca/static/JM_Lac-31ec5aae567197299fd67fb64df9be1a.webp' rel='image'/>
    <link href='https://jeanmichelviel.ca/static/coding-219c68b77ed0505ea42d64ad2e01ee3a.webp' rel='image'/>
    <link href='https://jeanmichelviel.ca/static/contact-44a41a4b80b801e6cbe6b78a7d575a46.webp' rel='image'/>
</Seo>;
