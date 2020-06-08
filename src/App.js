import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';

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

          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">

              </div>
              <div className="col-md-6">
                  <Song 
                      lyrics={lyrics}
                  />
              </div>
            </div>
          </div>
      </Fragment>
  );
}

export default App;
