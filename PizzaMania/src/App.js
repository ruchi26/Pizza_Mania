import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import Dividerh from './components/common/Dividerh';
import Menu from './components/common/Menu';
import What from './components/common/What' 
import { Image } from 'semantic-ui-react'


class App extends Component {
  constructor(){
    super()
    this.state = {
      items : []
    }
  }
  render() {
    const {items} = this.state
    return (
      <div>
        <Navbar items={items}/>
        <Image src = 'http://mypizzachoice.com/facebookimages/Pizza3.jpg' style = {{width:'100%',height:'55y0px'}}/>
        <What/>
        <Dividerh/>
        <Menu items = {items}/>
      </div>
    );
  }
}

export default App;
