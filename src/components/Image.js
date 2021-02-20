import React, { Component } from 'react';

import Imgix from 'react-imgix';

export default class Image extends Component {
    render() {
        return (
            <>
                {this.props.data.map(image => {
                    return (
                        <>
                            <a href={image.fields.src}
                                target="_blank" rel="noreferrer">
                                <Imgix
                                    className="img"
                                    sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    src={image.fields.src}
                                    imgixParams={{
                                        fit: "crop",
                                        fm: "jpg"
                                    }}
                                />
                            </a>
                        </>
                    )
                })}
            </>
        )
    }
}
