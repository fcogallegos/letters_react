import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';

import axios from 'axios';

function App() {

  //define the state
  const [ searchLetter, saveSearchLetter ] = useState({});
  //state to lyrics
  const [ lyrics, saveLyrics ] = useState('');
  //state ti info
  const [ info, saveInfo ] = useState({});

  useEffect(() => {
      //review if a object is empty
      if(Object.keys(searchLetter).length === 0) return;

      const consultApiLyrics = async () => {
          
          const { artist, song } = searchLetter;   
          const url_lyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
          const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

          const [ lyrics, information ] = await Promise.all([
            axios(url_lyrics),
            axios(url_info)
          ]);
          
          saveLyrics(lyrics.data.lyrics);
          saveInfo(information.data.artists[0]);
          
          //saveLyrics(result.data.lyrics);
      } 
      consultApiLyrics();
  }, [searchLetter, info]);

  return (
      <Fragment>
          <Form 
            saveSearchLetter={saveSearchLetter}
          />

          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                  <Info 
                    info={info}
                  />
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
