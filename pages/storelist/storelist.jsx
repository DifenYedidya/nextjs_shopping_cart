import Card from "../../components/cards/card";
import style from '../storelist/Storelist.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return {
        props: { products: (await res.json()).products }
    }
}

export default function Storelist({ products }) {
    return(
        <div className={style.cards}>
            {products.map((product) => (
                <Card key={product.id} product={product}/>
            ))}
        </div>
    )
}