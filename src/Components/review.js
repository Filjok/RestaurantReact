import React from 'react'

function review({data}) {
  return (
    <div>
        {data.map(item=>(
            <div>
                <h6>{item.name}</h6>
                <p>{item.date}</p>
                <p>{item.comments}</p>
            </div>
        ))}
    </div>
  )
}

export default review