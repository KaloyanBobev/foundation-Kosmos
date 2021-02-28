import React, { Component } from 'react';



export default class Image extends Component {
    render() {
        return (
            <>
                {this.props.data.map((image) => {
                    return (
                        <span key={image.sys.id}>
                            <a className="btn"
                                href={image.fields.src}
                                target="_blank" rel="noreferrer">
                                <img
                                    className="img"
                                    src={image.fields.src}
                                    alt={image.fields.name}
                                />
                            </a>
                        </span>
                    )
                })
                }
            </>
        )
    }
}
