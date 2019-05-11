import React from "react";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 300px 50px;
  z-index: 0;
`;

export default class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <h1>Hi, I'm Bintang Saputra</h1>
        <h2>I am a Frontend Web Developer</h2>
      </HomeWrapper>
    );
  }
}
