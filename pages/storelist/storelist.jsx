import Card from "../../components/cards/card";
import style from '../storelist/Storelist.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://swapi.dev/api/films/');
    return {
        props: { films: (await res.json()).results }
    }
}

export default function Storelist({ films }) {
    return(
        <div className={style.cards}>
            {films.map((film) => (
                <Card key={film.episode_id} film={film}/>
            ))}
        </div>
    )
}