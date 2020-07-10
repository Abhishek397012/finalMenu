import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./fire";
import { render } from "@testing-library/react";
import Menupage from './component/menupage'

class App extends Component {

  
//   constructor(props){
//     super(props)
//     this.state = {
//         menu : []
//     }
// }

// componentDidMount(){
//   let update = []
//     let ref1 = fire.database().ref().child('menu')
//     ref1.on('value' , snap => {
//       snap.forEach(child =>{
//           if(child){
//             console.log('child.val()', child.val())
//             update.push(child.val())
//           }
//       })
//       this.setState({menu: update})
//       console.log('update', update)
//       console.log('this.state', this.state)
//     })
  
// }

  render() {

    return (
      <div>
        <h1 className = "head" >Karanataka Restaurant</h1>
        <br/>
        <Menupage/>
      </div>
    );
  }
}

export default App;
