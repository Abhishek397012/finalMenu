import React, { Component } from 'react'

export class draw extends Component {

    constructor(props){
        super(props)
    }


    render() {
        {console.log('this.props.name', this.props.name)}
        {console.log('this.props.price', this.props.price)}
        return (
            <div >
                <div className="name">{this.props.name}</div>
                <div className="price">{this.props.price}</div>
                <br/>
            </div>
        )
    }
}

export default draw
