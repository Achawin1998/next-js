import Head from "next/head"
//https://dummyjson.com/products/?limit=12
import Image from "next/image";
import styles from "@/styles/Products.module.css"
import Link from "next/link";


export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products/?limit=12");
    const data = await res.json();

    return {
        props: { products: data.products }
    };
}
//    <img src={item.thumbnail}></img>
export default function Index({ products }) {
    return (
        <>
            <Head>
                <title>Products</title>
                <meta name="keywords" content="testing-products" />
            </Head>
         
            <div className={styles.container} >
                {products.map((item)=>{
                    return <div key={item.id}>
                                <Link href={"/products/"+item.id}>
                                <h2 className={styles.title}>{item.title}</h2>
                                <Image src={item.thumbnail} width={350} height={350} alt={item.title}/>
                                </Link>
                           </div>
                })}
            </div>  
        </>
    );
}