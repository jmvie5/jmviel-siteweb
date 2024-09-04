import * as React from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

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

export const Head = () => <Seo />;
