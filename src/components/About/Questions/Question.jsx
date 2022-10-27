import React from 'react'

import './Question.scss'

import QuestionCard from "../../UsableComponents/Cards/QuestionCard/QuestionCard";

function Question({data}) {
    return (
        <div className='questions'>
            {data.aboutus_content.map(about => (
                <QuestionCard data={about}/>
            ))}
        </div>
    )
}

export default Question