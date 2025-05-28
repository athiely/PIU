import './Card.css'
import garfield_img from "../assets/personagem/personagem.jpg"
import cinderella_img from "../assets/personagem/GarfieldCharacter.webp"
import pica_pau_img from "../assets/personagem/Pica_pau.webp"
import tecna_img from "../assets/personagem/tecna.png"
import barbie_img from "../assets/personagem/barbie.png"
import flora_img from "../assets/personagem/flora.png"


const personagens = [
    {name: "Cinderella", image: garfield_img, caption: "Princesa da Disney"},
    {name: "Garfield", image: cinderella_img, caption: "Gato que fala"},
    {name: "Pica-Pau", image: pica_pau_img, caption: "Passarinho"},
    {name: "Tecna", image: tecna_img, caption: "Fada da Tecnologia"},
    {name: "Barbie", image: barbie_img, caption: "Barbie MODA E MAGIA"},
    {name: "Flora", image: flora_img, caption: "Fada da Natureza"}
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