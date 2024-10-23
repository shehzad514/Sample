import React, { useState } from 'react'

function List({data}) {
    const[readMore, setReadMore]=useState(false);
  return (
  <section>
    <div className='container'>
    <h2>Our Tour</h2>
    {data.map((item)=> (
        <div className='items' key={item.id}>
        <div className='imgCont'>
            <img src={item.image} alt={item.image}/>
        </div>
        <div className='dataCont'>
            <div className='headCont'>
                <h4>{item.name}</h4>
                <h3>{item.price}</h3>
            </div>
            <div className='paraCont'>
                <p >
                {readMore ? item.para: `${item.para.substring(0,200)}...`}
                <button className='readbtn' onClick={()=> setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                </button>
                </p>
            </div>
            <div className='btnCont'>
                <button className='btn'>Cancel</button>
            </div>
        </div>
        </div>
    ))}
    </div>
  </section>
  )
}

export default List
