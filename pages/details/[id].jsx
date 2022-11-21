export const getStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = (await res.json()).products;

    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = fetch('https://dummyjson.com/products' + id);

    return {
        props: { product: (await res.json()).products }
    }
}

const Details = ({product}) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <h3>{product.stock}</h3>
            <h3>{product.brand}</h3>
            <h5>{product.description}</h5>
        </div>
    )
}

export default Details;