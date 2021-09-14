import React, { Component } from 'react'

import './css/CardComponent.css'

class CardComponent extends Component {
    render() {
        return (
            <div className="card">
                <div className="card_image">
                    <img alt = "category" src = {this.props.imageSource} />
                </div>
            </div>
        )
    }
}

export default CardComponent


                