import Image from 'next/image'
import style from '../cards/CardHorizontal.module.css';
import vercel from '../../public/vercel.svg'

export default function CardHorizontal() {
    return(
        <div className={style.column}>
            <div className={style.row}>
                <div className={style.card}>
                    <Image
                        className={style.image}
                        src={vercel}
                        alt="FilmThumbnail"
                        width={100}
                        height={100}
                    />
                    <h3 className={style.title}>Film title</h3>
                    <div className={style.counter}>
                        <button className={style.button}>-</button>
                        <input className={style.input}></input>
                        <button className={style.button}>+</button>
                    </div>
                </div>
            </div>
           
        </div>
    )
}