import React from 'react'
import './Partners.scss'
import {useGetDataQuery} from "../../../redux";
import Loader from "../Loader/Loader";


function Partners() {
    const {data = [], isLoading} = useGetDataQuery('sponsors')
    if (isLoading) return <Loader/>
    return (<div className='partners'>
        <div className="slider">
            <div className="slide-track">
                <div className="doctors__container">
                    <div className="doctors__wrapper">
                        {data.result.map((doc) => (<>
                            <img key={doc.id} src={doc.image} alt=""/>
                        </>))}
                        {data.result.map((doc) => (<>
                            <img key={doc.id} src={doc.image} alt=""/>
                        </>))}
                        {data.result.map((doc) => (<>
                            <img key={doc.id} src={doc.image} alt=""/>
                        </>))}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Partners