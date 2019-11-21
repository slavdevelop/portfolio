import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

import img from '../images/image-3.jpg';

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data);

  return (
    <Wrapper>
      <article>
        <h3>Fluid image/svg</h3>
        <Image fluid={data.fixed.childImageSharp.fluid} />
        <p>Contenttt</p>
      </article>
      <article>
        <h3>Fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <p>Contenttt</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  .basic {
    width: 100%;
  }

  article {
    border: 3px solid red;
    padding: 1rem;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

export default Images;
