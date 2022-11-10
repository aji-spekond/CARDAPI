import React from 'react'
import { useParams } from 'react-router-dom';

const FlimName = ({details}) => {
    let {id}=useParams();
  return (
    <div>
        <h2>PersonDetails</h2>
        <div>
        {details && details.map((detail)=>{
            return(
                <>
                <h3 key={detail.title}>{detail.director}</h3>
                </>
            );
        })}
        </div>
    </div>
  )
}

export default FlimName;