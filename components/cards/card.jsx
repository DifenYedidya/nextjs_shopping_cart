import Image from 'next/image'
import style from '../cards/Card.module.css';
import vercel from '../../public/vercel.svg'

export default function Card() {
    return(
        <div className={style.row}>
            <div className={style.column}>
                <div className={style.card}>
                    <h3>card title</h3>
                    <Image
                        src={vercel}
                        alt="FilmThumbnail"
                        width={200}
                        height={200}
                    />
                    <p>desc</p>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.card}>
                    <h3>card title</h3>
                    <Image
                        src={vercel}
                        alt="FilmThumbnail"
                        width={200}
                        height={200}
                    />
                    <p>desc</p>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.card}>
                    <h3>card title</h3>
                    <Image
                        src={vercel}
                        alt="FilmThumbnail"
                        width={200}
                        height={200}
                    />
                    <p>desc</p>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.card}>
                    <h3>card title</h3>
                    <Image
                        src={vercel}
                        alt="FilmThumbnail"
                        width={200}
                        height={200}
                    />
                    <p>desc</p>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.card}>
                    <h3>card title</h3>
                    <Image
                        src={vercel}
                        alt="FilmThumbnail"
                        width={200}
                        height={200}
                    />
                    <p>desc</p>
                </div>
            </div>
        </div>
    )
}