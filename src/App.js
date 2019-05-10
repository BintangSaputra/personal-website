import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/home";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  /* display: flex; */
  /* flex-direction: column;
  align-items: flex-end; */
  /* padding-top: 100px; */
  /* padding-right: 10px; */
  text-align: center;
  /* justify-content: flex-end; */
  position: absolute;
  right: 10px;
  z-index: 1;
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
  flex-direction: column;
  padding: 1em;
  align-items: flex-end;
  /* right: 5em;
  top: 3em; */
  /* position: absolute;
  border-color: black;
  border-radius: 5px; */
`;

const Patty = styled.div`
  content: "";
  background: black;
  height: 3px;
  width: 1.75em;
  border-radius: 3px;
  margin-bottom: 6px;
`;

const PattySecond = styled.div`
  background: black;
  height: 3px;
  width: 1.5em;
  border-radius: 3px;
  margin-bottom: 6px;
`;

const PattyThird = styled.div`
  background: black;
  height: 3px;
  width: 1.75em;
  border-radius: 3px;
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
    return (
      <div>
        <Hamburger onClick={this.showNavbar.bind(this)}>
          <Patty />
          <PattySecond />
          <PattyThird />
        </Hamburger>
        {this.state.showNavbar && (
          <StyledDiv>
            <nav>
              <StyledNavbar>
                <StyledLi>
                  <StyledLink to="/home">Home</StyledLink>
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
          </StyledDiv>
        )}

        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
