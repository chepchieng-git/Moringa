import { useState } from "react";

function App() {
    const [image, setImage] = useState("https://randomfox.ca/images/41.jpg")
    const [likes, setLikes] =useState(0)
 
  
    function handleNewFoxClick() {
      fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then(({image}) => {
        setImage(image)
        setLikes(0)
      })
    }

    function handleLikeClick() {
      setLikes(likes + 1)
      // setLikes(likes => likes + 1 )
    }
  return ( 
    <div>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className='buttons'>
        <button onClick={handleNewFoxClick}>New 🦊 Please</button>
        {/* <button onClick={() => setLikes( likes + 1 )}>likes: {likes}</button> */}
        <button onClick={handleLikeClick}>Likes: {likes}</button>
      </div> 
      <img src={image} alt="Random Fox"/>
    </div>
  )
  
}

export default App;
