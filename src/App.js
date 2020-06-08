import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';

import axios from 'axios';

function App() {

  //define the state
  const [ searchLetter, saveSearchLetter ] = useState({});
  //state to lyrics
  const [ lyrics, saveLyrics ] = useState('');

  useEffect(() => {
      //review if a object is empty
      if(Object.keys(searchLetter).length === 0) return;

      const consultApiLyrics = async () => {
          
          const { artist, song } = searchLetter;   
          const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

          const result = await axios(url);
          saveLyrics(result.data.lyrics);
      } 
      consultApiLyrics();
  }, [searchLetter]);

  return (
      <Fragment>
          <Form 
            saveSearchLetter={saveSearchLetter}
          />
      </Fragment>
  );
}

export default App;
