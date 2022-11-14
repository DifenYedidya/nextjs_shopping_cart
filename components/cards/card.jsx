import Image from 'next/image'
import style from '../cards/Card.module.css';
import vercel from '../../public/vercel.svg'

const Card = ({ film }) => {
    return(
        <div className={style.card}>   
            <h3>{film.title}</h3>
            <Image
                className={style.image}
                src={vercel}
                alt="FilmThumbnail"
                width={160}
                height={160}
            />
            <h4>Director: {film.director}</h4>
            <h5>Released: {film.release_date}</h5>
        </div>
    )
}

export default Card;