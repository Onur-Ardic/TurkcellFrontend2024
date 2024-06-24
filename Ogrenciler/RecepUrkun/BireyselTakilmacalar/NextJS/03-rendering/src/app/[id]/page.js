import React from 'react'

const IdPage = ({ params }) => {
    console.log("IdPage: ", params.id);
    return (
        <div>IdPage: {params.id}</div>
    )
}

export default IdPage