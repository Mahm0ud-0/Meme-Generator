import trollFace from '../assets/troll-face.png'

export default function Header() {

    console.log(trollFace)
    return (
        <header>
            <img src={trollFace} alt="" />
            <h2>Meme Generator</h2>
        </header>
    )
}