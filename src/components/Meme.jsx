import React from "react"


export default function Meme() {


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3eqjd8.jpg",
      });

    const [allMemes, setAllMemes] = React.useState([]);


    
    React.useEffect( () => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        //  update the `meme.randomImage` state to be the random chosen image URL
        setMeme((prevState) => {
          return { ...prevState, randomImage: url };
        });
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
                <img src={meme.randomImage} alt="" className="meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}