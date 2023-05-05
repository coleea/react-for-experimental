import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import z from 'zod'

const productSchema = z.array(z.object({
    id:z.number(),
    price:z.number(),
    discountPercentage:z.number(),
    rating:z.number(),
    stock:z.number(),
    title:z.string(),
    description:z.string(),
    brand:z.string(),
    category:z.string(),
    thumbnail:z.string(),
    images: z.array(z.string()),
}))

type productType = z.infer<typeof productSchema>

export function FetchExample() {

    const [errMsg, seterrMsg] = useState("");
    const [latestFetchTime, setLatestFetchTime] = useState(() => Date.now());
    const [products, setProducts] = useState<productType>([]);

    const getPost = (signal: AbortSignal) => {
      axios.get('https://dummyjson.com/products', {signal})
      .then(res => {
        const products = res?.data?.products;
        try {
            productSchema.parse(products)            
            setProducts(products);
        } catch (error) {
            seterrMsg(`'파싱에러' : ${error}`)
        }
      }).catch(console.error)
      ;
    };

    const effector = () => {
        const abortController = new AbortController()
        const signal = abortController.signal
        getPost(signal);
        return () => {
            abortController.abort()
        }
    }

    useEffect(effector, [latestFetchTime]);
    
    return (
    <>
    <button onClick={() => setLatestFetchTime(Date.now())}>click here to re-fetch</button>
    {errMsg !== "" 
    && errMsg}
    {products && 
    products.map(post => <p key={post.id}>{post.title}</p>)
    }</>);
}

