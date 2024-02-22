/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:   "cdn.dummyjson.com",  // ใช้แค่สองตัวนี้ในที่นี้ อันนี้คือตำแหน่งรูปภาพให้ไปดูตำแหน่งที่ error
      },
    ],
    unoptimized: true    //ในกรณีเอารูปภาพมาจากข้างนอกหรือ api ต้องมาตั้งค่าตรงนี้
  },
}

module.exports = nextConfig

