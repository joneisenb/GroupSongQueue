// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  //state to store the input value from the search bar
  const [searchInput, setSearchInput] = useState('');


  //Function to update the state when the input changes
  const handleInputChange = (event) => {
    setSearchInput(event.target.value)
  }

  
//Functoin to handle the button click
//Currently it just logs the input value to the console.
  const handleButtonClick = () => {
    findLinkType(searchInput);
  }
  
//Function to send input links into the correct parser.
  const findLinkType = (link) => {
    if(searchInput.includes("open.spotify.com"))
      console.log(getTrackID_Spotify(link));
      
  }
  const getTrackID_Spotify = (link) => {
    const spotifyLinkRegex = /https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9]+)\?*/;
    const match = link.match(spotifyLinkRegex);

    if (match && match[1]) {
      return match[1];
    } else {
      console.error('Invalid Spotify track link');
      return null;
    }

  }
  
  
  
  
  
  
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1> Group Song Queue</h1>
      </header>
            
      {/* Main Content Area */}
      <main className="App-content">
            {/* Container for the search bar and button */}
            <div className="search-container">
              
              {/* Search input field */}
              <input 
                type='text'
                placeholder='Search your song...'
                value={searchInput}
                onChange={handleInputChange}

              />
              {/* Button to trigger the action */}
              <button onClick={handleButtonClick}> Add to Queue</button>
            </div>
            </main>
    

    {/* Footer Section */}
<footer className='App-footer'>
  <p>&copy; {new Date().getFullYear()} Group Song Queue</p>
<p>Built by Jon, Zach, and chat</p>

</footer>

    
    </div>
  );
}

export default App;
