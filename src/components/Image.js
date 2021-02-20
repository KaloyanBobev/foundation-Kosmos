import React, { Component } from 'react';



export default class Image extends Component {
    render() {
        return (
            <>
                {this.props.data.map((item) => {
                    return (
                        <a href={item.fields.src}
                            target="_blank" rel="noreferrer">
                            <img className="img" src={item.fields.src} alt={item.fields.name} />
                        </a>
                    )
                })}
            </>
        )
    }
}
