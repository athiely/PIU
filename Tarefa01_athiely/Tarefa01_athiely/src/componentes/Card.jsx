import './Card.css'
import garfield_img from "../assets/personagem/personagem.jpg"
import cinderella_img from "../assets/personagem/GarfieldCharacter.webp"


const personagens = [
    {name: "Cinderella", image: garfield_img, caption: "Princesa da Disney"},
    {name: "Garfield", image: cinderella_img, caption: "Gato que fala"}
]
export default function Card() {
    return (
        <>
            <div>
                {personagens.map((pers) => (
                    <figure key={pers.name}>
                        <img src={pers.image} alt={pers.caption} />
                        <figcaption>{pers.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </>
    )
}