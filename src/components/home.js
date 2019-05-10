import React from "react";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  margin: 300px 50px;
  z-index: 0;
`;

export default class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <h1>Hi, i'm Bintang Saputra</h1>
      </HomeWrapper>
    );
  }
}
