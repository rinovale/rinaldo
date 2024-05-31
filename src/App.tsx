import React, {useState, useEffect, useContext} from 'react';
import Nav from './Nav/Nav';
import Form from './Form/Form';
import Main from './Main/Main';
import { Post, TPost } from './Type/CommonType';
import { AppContext } from './Context/AppContext';

function App() {
  const [jsonData, setJsonData] = useState<Post[] | undefined>()
  const propTypes = {jsonData, setJsonData}

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => setJsonData((json as TPost).posts))
  }, [])
  return(
    <div>
    <AppContext.Provider value={propTypes}>
    <Nav></Nav>
    <Form></Form>
    <Main></Main>
    </AppContext.Provider>
    </div>
  )
}


export default App;


