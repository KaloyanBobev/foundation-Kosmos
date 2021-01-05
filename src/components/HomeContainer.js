import React from 'react'

export default function HomeContainer({ data }) {
    return (
        <>
            {data.map((item) => {
                return (
                    <p key={item.sys.id}>
                        {item.fields.text}
                    </p>
                )
            })}

        </>
    )
}
