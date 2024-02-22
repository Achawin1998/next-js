// จัดเก็บหมายเลขของสินค้าที่ต้องการที่จะดูรายละเอียด
//ตั้งชื่อไฟล์ว่า [id] มันทำให้สามารถรับเป็นพารามิเตอร์ id ได้

// import { useRouter } from 'next/router'

 // const router = useRouter()  // เก็บพวกค่าต่าง ๆ ที่อยู่ใน url 
    // const {id} = router.query // ดึงเอาค่าที่ถูกส่งมาพร้อมกับ url 

// import React from 'react'

// export async function getStaticPath(){ // สร้างเหมือนกัน StaticProps   
//   const res = await fetch("https://dummyjson.com/products/?limit=12"); //ใช้ url ตัวเดิมได้อยู่เดี่๋ยวจะไป map ค่าเอา
//   const data = await res.json();

//   const paths = data.products.map((item)=>{
//     return {
//         params:{id:String(item.id)} // ได้ id มาใช้เรียบร้อย ในกรณีชนิดข้อมูลในเลข item.id เป็นเลขจำนวนเต็ม ต้องแปลงเป็น string ก่อนเพราะต้องใช้เป็น string
//     }
//   })
//   console.log(paths);
//     return {
//       paths,
//       fallback : false //ในกรณีระบุ path ไม่ถูกต้องจะระบุเป็น 404
//     }
// }



// export async function getStaticProps({params}) { // 2 ตัวนี้ต้องใช้ร่วมกันไม่งั้นจะเด้ง error
//   const id = params.id
//   const res = await fetch("https://dummyjson.com/products/"+id);
//   const data = await res.json();

//   return {
//       props: { products: data}
//   };
// }

import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/detail.module.css"

export async function getStaticPaths() { // ต้องเขียนชื่อฟังชันให้ถูกด้วยไม่งั้น error
  const res = await fetch("https://dummyjson.com/products/?limit=12"); // ตัวนี้จะกรอกเฉพาะแค่ id  
  const data = await res.json(); // เราดึงข้อมูลทั้งหมดมาแต่ว่าจะทำการ map เอาแค่ค่า id ที่หลัง
  const paths = data.products.map((item)=> {
    return {
      params: {id: String(item.id)}
    }
  })
 
    return {
      paths, // return ค่าตัว paths ข้างบน
      fallback: false
    }
}

export async function getStaticProps({params}) {
  const id = params.id
  const res = await fetch("https://dummyjson.com/products/"+id);
  const data = await res.json();

  return {
      props: { product: data  } // ตรงนี้เอาแค่ก้อนข้อมูลพอ ไม่ต้องไป tab products 
  };
}


function ProductsDetail({product}) {

  return (
    <div>
        <Head>
          <title>{product.title}</title>
        </Head>
        <div className={styles.container}>   
          <div className={styles.image}>
          <Image src={product.thumbnail} width={300} height={300} alt={product.title}/>
          </div>
          <div className={styles.detail}>
            <h1>ชื่อสินค้า : {product.title}</h1>
            <h2>ราคา : {product.price} $</h2>
            <h2>หมวดหมู : {product.category}</h2>
            <h3>แบรนด์ : {product.brand}</h3>
            <h4> รายละเอียด : {product.description}</h4>
            <h4>เรตติ้ง : {product.rating} / 5</h4>
          </div>
        </div>
     
    </div>
  )
}

export default ProductsDetail;