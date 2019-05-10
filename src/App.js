import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/home";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 100px;
  padding-right: 50px;
  text-align: center;
`;
const StyledNavbar = styled.ul`
  justify-content: space-around;
  background-color: #444444;
  width: 100px;
  margin: 0;
  list-style: none;
  text-decoration: none;
  padding-left: 2px;
  padding-bottom: 20px;
  padding-top: 10px;
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StyledLi = styled.li`
  margin-bottom: 40px;
  padding-top: 10px;
  font-size: 20px;
`;

const Hamburger = styled.div`
  display: flex;
  padding: 1em;
  right: 5em;
  top: 3em;
  position: absolute;
  border-color: black;
  border-radius: 5px;
`;

const Patty = styled.div`
  &:before {
    content: "";
    background: black;
    height: 3px;
    width: 1.75em;
    border-radius: 3px;
  }
  content: "";
  background: black;
  height: 3px;
  width: 1.75em;
  border-radius: 3px;

  &:after {
    content: "";
    background: black;
    height: 3px;
    width: 1.75em;
    border-radius: 3px;
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: false
    };
  }

  showNavbar() {
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }
  render() {
    let Navbar = this.state.showNavbar ? (
      <StyledDiv>
        <nav>
          <StyledNavbar>
            <StyledLi>
              <StyledLink to="">Home</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="">About</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="">Portfolio</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="">Contact</StyledLink>
            </StyledLi>
          </StyledNavbar>
        </nav>

        <Route path="/home" exact component={Home} />
      </StyledDiv>
    ) : (
      ""
    );

    return (
      <div>
        <Hamburger onClick={this.showNavbar.bind(this)}>
          <Patty />
        </Hamburger>
        {Navbar}
      </div>
    );
  }
}

export default App;
