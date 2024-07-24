// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import News from './News';

// Now as we are doing class based components and not function based so use : rcc for react class based components
import React, { Component } from 'react'

export default class App extends Component {
  // render method is a life cyle method means react jb react ek component ko load krti h to kuch series of methods run hotii hai. SO aap esa smj lo k  render method run hoti h aur uska kam hota h screen pr JSX ko html pr compile krna aur uske bad html ko render krna..
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
