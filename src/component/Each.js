import React, { Component } from 'react'
import Draw from './draw'

export class Each extends Component {

    constructor(props){
        super(props)
    }


    render() {
        {console.log('this.props.category', this.props.category)}
        {console.log('this.props.list', this.props.list)}
        return (
            <div>
                {this.props.list.map(element => {
                    if (element.category === this.props.category) {
                        {console.log('element.name match:', element.name)}
                        return (
                            <div >
                                <div className="name">{element.name}</div>
                                <div className="price">{element.price}</div>
                                <br/>
                            </div>
                        )
                    }
                })
                }
            </div>
        )
    }
}

export default Each
