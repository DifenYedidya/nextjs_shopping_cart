// import Image from 'next/image'
import style from '../cards/Card.module.css';
import Link from 'next/link'

const Card = ({ product }) => {
    return(
        <Link href={`/details/` + product.id} className={style.card}>   
            <h3>{product.title}</h3>
            {/* <Image
                className={style.image}
                src={product.images}
                alt="productThumbnail"
                width={160}
                height={160}
            /> */}
            <h4>Price: {product.price}</h4>
            <h4>Stock: {product.stock}</h4>
        </Link>
    )
}

export default Card;