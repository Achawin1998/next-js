 import Navbar from "./Navbar"
 import Footer from "./Footer"
 // ไอตัวนี้คือโครงสร้างหลักที่ทุก ๆ pages จะใช้ด้วยกัน
function Layout({children}) {  // children จะแสดงเนื้อหาที่แตกต่างกันแต่ละตัว
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout