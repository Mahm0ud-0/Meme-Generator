import React from "react"
import memesData from "../memesData.js"


export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })  

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        setMemeImage(memesArray[randomNumber].url)

    }


    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
    }
    
    
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Bottm text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                    onClick={getMemeImage}>
                    Get a new meme image
                </button>

            </div>
            <div className="meme">
                <img src={memeImage} alt="" className="meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}