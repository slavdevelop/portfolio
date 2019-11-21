import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "image-1.jpg" }) {
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

  return (
    <Wrapper>
      <h2>Labs</h2>
      <div className="articles">
        <article>
          <h3>Fluid Image / SVG</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <p>
            Cras ultricies ligula sed magna dictum porta. Nulla porttitor
            accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem. Cras ultricies ligula sed magna dictum porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
            aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem. Libero malesuada feugiat. Quisque
            velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit
            nisi, pretium ut lacinia in, elementum id enim. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
        </article>
        <article>
          <h3>Fluid Image / SVG</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <p>
            Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus suscipit tortor eget felis
            porttitor volutpat. Donec rutrum congue leo eget malesuada. Sed
            porttitor lectus nibh. Curabitur aliquet quam id dui posuere
            blandit. Nulla quis lorem ut libero malesuada feugiat. Quisque velit
            nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui
            posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Donec rutrum congue leo eget malesuada. Donec rutrum
            congue leo eget malesuada.
          </p>
        </article>
        <article>
          <h3>Fluid Image / SVG</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur
            arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque
            in ipsum id orci porta dapibus. Donec sollicitudin molestie
            malesuada. Nulla quis lorem ut libero malesuada feugiat. Vivamus
            suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem. Donec sollicitudin
            molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80vw;
  margin: 0 auto;
  text-align: center;

  .articles {
    display: flex;
    justify-content: space-between;

    article {
      width: 25%;
    }
  }

  @media and (min-width: 968) {
    .articles {
      flex-direction: col;
    }
  }
`;

export default Images;
