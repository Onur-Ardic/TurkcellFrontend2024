import React from 'react'
import WeatherInfo from './WeatherInfo'
import Card from './Card'


const ShowCase = ({data, firstDay}) => {

 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>San Francisco</h1>
                        <WeatherInfo />
                    </div>
                    <div className="col-lg-6">
                        {/* {
                            // data && <Card day={data.result[0]} />
                        } */}
                        <Card day={firstDay} />
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowCase
