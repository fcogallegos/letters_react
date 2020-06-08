import React, { useState } from 'react';

const Form = () => {

    //state search
    const [search, saveSearch ] = useState({
        artist: '',
        song: ''
    });

    //state error
    const [ error, saveError ] = useState(false);

    //extract artist and song
    const { artist, song } = search;

    //function to every input for read his content
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //consult the APIS
    const searchInformation = e => {
        e.preventDefault();
        
        //validation of inputs
        if(artist.trim() === '' || song.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        //if all fine, pass to main component
        
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                        onSubmit={searchInformation}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Song yrics finder</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>                                    
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;