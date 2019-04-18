import React from 'react';
import WordCloud from '../components/word-cloud/word-cloud';
import CustomPageTemplate from '../templates/custom-page-template';

const TechStack = ({data}) => {
  return (
    <CustomPageTemplate data={data}>
      <WordCloud />
    </CustomPageTemplate>
  );
};

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        customPage
        title
        date
        description
      }
    }
  }
`;

export default TechStack;
