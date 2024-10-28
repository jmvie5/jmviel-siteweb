import * as React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import { graphql, HeadProps } from 'gatsby';
import Seo from "../../components/Seo";
import { FormattedMessage } from "react-intl";
import { DataProps } from "../../types";

const GamesPage = () => {

  return (
    <Layout>
      <div className="bg-[url()] bg-cover h-96 text-white">
        <div className="grid grid-rows-3 justify-between h-96 ">
          <div className="flex flex-col my-4 ">
            <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
            <NavBar more />
          </div>

          <div className="ml-4 row-span-2 min-[480px]:w-[360px] lg:w-[450px]">
            <h2 className="text-xl my-4">Jeux</h2>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default GamesPage;

export function Head(props: HeadProps<DataProps>) {
  return <Seo title={props.data.pageTitle.message} description={props.data.pageDescription.message} />;
}

export const query = graphql`
  query ContactPage($locale: String) {
      pageTitle: translation(locale: { eq: $locale }, key: { eq: "Games" }) {
          message
      }
      pageDescription: translation(locale: { eq: $locale }, key: { eq: "Games-desc" }) {
          message
      }
  }
`;
