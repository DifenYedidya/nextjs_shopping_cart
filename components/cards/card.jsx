import Image from 'next/image'
import style from '../cards/Card.module.css';
import vercel from '../../public/vercel.svg'

export const getStaticProps = async () => {
    const res = await fetch('https://swapi.dev/api/films/');
    const data = await res.results.json();
    
    return {
        props: { films: data }
    }
}

const Card = ({ films }) => {
    console.log({films});
    return(
        <div className={style.row}>
            <div className={style.column}>
                {films?.map(film => (
                    <div key={film.episode_id} className={style.card}>   
                        <h3>{film.title}</h3>
                        <Image
                            className={style.image}
                            src={vercel}
                            alt="FilmThumbnail"
                            width={160}
                            height={160}
                        />
                        <p>desc</p>    
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;