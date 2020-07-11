import React, { Component } from 'react'
import Draw from './draw'

 class Each extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>   
                <div className="name" >{this.props.name}</div>
                <div className="price">{this.props.price}</div>
            </div>

        )
    }
}

export default Each
