import React, { useContext, useEffect, useState } from 'react';
import { AppContext, IAppContext } from '../Context/AppContext';
import './Main.css';

function Main() {
  const {jsonData} = useContext(AppContext) as IAppContext
  return (
    <div className='main'>
      {jsonData?.slice().reverse().map((item) => (
        <div className='posts'>
          <p className='id'>{item.id}</p>
          <p className='titolo'>{item.title}</p>
          <p className='body'>{item.body}</p>
        </div>
      )) }
    </div>
  )
}

export default Main;
