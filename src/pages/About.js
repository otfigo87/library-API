import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4em;
  background: #b3d0c7;
`;
const Title = styled.h1`
  margin: 1rem 0.5rem;
  font-family: monospace;
`;

const About = () => {
  return (
    <Wrapper>
      <Title>About Page</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi
        molestiae, doloribus illum iusto porro accusamus sapiente tempora illo
        optio sed blanditiis, fugit eligendi repudiandae soluta inventore
        mollitia quam sunt repellat accusantium, unde ipsum! Perspiciatis natus
        laboriosam corporis asperiores eligendi error? Consectetur facilis
        explicabo esse, consequatur, repellat similique asperiores quos vero
        delectus nostrum dicta ab magni! Velit, error? A, voluptate facilis
        quisquam voluptatum aut minima, doloremque esse magnam cumque alias sunt
        quae delectus autem aspernatur incidunt? Modi, quis neque. Ea numquam
        totam amet eum cupiditate placeat dignissimos, delectus nesciunt iste at
        magnam dolor ducimus aut enim in earum voluptas iusto?Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Cumque sequi molestiae, doloribus
        illum iusto porro accusamus sapiente tempora illo optio sed blanditiis,
        fugit eligendi repudiandae soluta inventore mollitia quam sunt repellat
        accusantium, unde ipsum! Perspiciatis natus laboriosam corporis
        asperiores eligendi error? Consectetur facilis explicabo esse,
        consequatur, repellat similique asperiores quos vero delectus nostrum
        dicta ab magni! Velit, error? A, voluptate facilis quisquam voluptatum
        aut minima, doloremque esse magnam cumque alias sunt quae delectus autem
        aspernatur incidunt? Modi, quis neque. Ea numquam totam amet eum
        cupiditate placeat dignissimos, delectus nesciunt iste at magnam dolor
        ducimus aut enim in earum voluptas iusto?
      </p>
    </Wrapper>
  );
}

export default About