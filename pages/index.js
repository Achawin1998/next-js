import styles from "@/styles/Home.module.css" //เวลาตั้งค่า css แล้วก็ต้อง import มาด้วย
// เวลาเรียกใช้ต้องพิมพ์ style แล้ว tab className
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
          <title>Home Page</title>
          <meta name="keywords" content="testing-products"></meta>
      </Head>
      <div className={styles.container}>
      <h1 className={styles.title}>หน้าแรกของเว็ปไซต์</h1>
      <Image src="/shopping.svg" width={375} height={375} alt="logo shopping"/>
      <p>ยินต้อนรับสู่ร้านของเรา</p>
      <Link href="/products" className={styles.btn}>ดูสินนค้าทั้งหมด</Link>
      </div>
    </>
  )
}
