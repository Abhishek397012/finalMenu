import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import fire from '../fire'
import "react-tabs/style/react-tabs.css";
import { render } from '@testing-library/react';
import Each from './Each'


class Menupage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: [],
      category: []
    }
  }

  componentDidMount() {
    let update = []
    let list = []
    let ref1 = fire.database().ref()
    ref1.on('value', snap => {
      snap.child('test').forEach(child => {
        if (child) {
          update.push(child.val())
        }
      })
      snap.child('category').forEach(each => {
        list.push(each.val())
      })

      this.setState({ menu: update, category: list })
      // console.log('this.state', this.state)
    })

  }



  render() {

    //  { console.log('render')}  

    return (
        <Tabs>
          <div className ="tablist">
            <TabList>
              {this.state.category.map((item) => {
                return (<Tab className="tab">{item}</Tab>)
              })
              }
            </TabList>
          </div>

          
            {this.state.category.map((item) => {
              return (
                <TabPanel className="panel">
                  <div>
                    <div className="nameHeading">Name</div>
                    <div className="priceHeading">Price</div>
                  </div>
                  <div >
                    {/* // sending each catagory to be searched
                    // and drawing matched item */}
                    {this.state.menu.map(food => {
                      if (food.category === item) {
                        return <Each name={food.name} price={food.price} />
                      }
                    })}
                  </div>
                </TabPanel>
              );
            })
            }
        </Tabs>
    
    )
  }
}

export default Menupage
