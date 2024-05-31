import React, { useState, useContext } from 'react';
import './Form.css'
import { IAppContext, AppContext } from '../Context/AppContext';


function Form() {

  const [contData, setContData] = useState<string>('');
  const [contTitleData, setContTitleData] = useState<string>('');
  const {jsonData, setJsonData} = useContext(AppContext) as IAppContext

  function addData(input:string) {
    setContData(input);
  }

  function addTitle(input:string){
    setContTitleData(input);
  }

  function save() {
    if(jsonData){
      const obj = {
        id: jsonData?.length + 1,
        title: contTitleData,
        body: contData,
      }
      let data = jsonData
      data.push(obj)
      setJsonData([...data])
      canc()

    }
  }

  function canc() {
    setContData('');
    setContTitleData('');
  }

  const [isClicked, setIsClicked] = useState(false);

  const show = () => {
    setIsClicked(!isClicked);
  }
  if(!isClicked ===true){
    return (
      <div className='form'>
        <div className='titolo'>
        <h3>AGGIUNGI POST</h3>
        </div>
        <div className='box'>
            <input type='checkbox' checked={isClicked} onChange={show}></input>
        </div>
      </div>
    )
  } else {
    return (
      <div className='form'>
        <div className='titolo'>
        <h3>AGGIUNGI POST</h3>
        </div>
        <label className='checkbox'>
        <div className='box'>
        <input type='checkbox' id='ilcheckbox' checked={isClicked} onChange={show}></input>
        </div>
          <span className='checkmark'></span>
          <textarea className='titolo' placeholder='Scrivi il titolo...' value={contTitleData} onChange={(event) => addTitle(event.target.value)}></textarea>
          <textarea className='testo' placeholder='Scrivi il tuo post...' value={contData} onChange={(event) => addData(event.target.value)}></textarea>
          <button className='add' onClick={() => save()}>PUBBLICA</button>
        </label>
      </div>     
    )
  }
}

export default Form