import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import WordCloud from '../components/word-cloud/word-cloud';
import Page from '../components/Page';

const TechStack = () => {
  const siteTitle = 'Ayush Sharma | Web developer';
  const pageTitle = 'Tech Stack';
  const metaDescription = 'Technical stack of author represented as word cloud';

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <WordCloud />
      </Page>
    </Layout>
  );
};

export default TechStack;
