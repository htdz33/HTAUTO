'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  const banners = [
    { img: "/image/1.webp", title: "Bugatti Chiron", price: "3.120.000 USD" },
    { img: "/image/3.jpg", title: "Lamborghini Aventador", price: "2.500.000 USD" },
    { img: "/image/4.jpg", title: "Ferrari SF90", price: "2.200.000 USD" },
  ];

  const products = [
    { name: "Bugatti Chiron Super Sport", price: "3.120.000 USD", img: "/image/2.webp" },
    { name: "Lamborghini Aventador", price: "2.500.000 USD", img: "/image/3.jpg" },
    { name: "Ferrari SF90 Stradale", price: "2.200.000 USD", img: "/image/4.jpg" },
    { name: "McLaren 720S", price: "1.900.000 USD", img: "/image/5.avif" },
    { name: "Rolls Royce Phantom", price: "3.500.000 USD", img: "/image/6.jpg" },
    { name: "Bentley Continental GT", price: "2.000.000 USD", img: "/image/7.jpg" },
    { name: "Porsche 911 Turbo S", price: "1.800.000 USD", img: "/image/8.webp" },
    { name: "Aston Martin DB11", price: "1.700.000 USD", img: "/image/9.avif" },
    { name: "BMW i8", price: "1.200.000 USD", img: "/image/10.webp" },
    { name: "Audi R8", price: "1.600.000 USD", img: "/image/11.jpg" },
  ];

  return (
    <div>
      <Header />

      <main className={styles.container}>
        {/* Banner - Đã bỏ Swiper, hiển thị ảnh đầu tiên */}
        <div className={styles.banner}>
          <Image 
            src={banners[0].img} 
            alt={banners[0].title} 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Danh sách sản phẩm */}
        <div className={styles.item2}>
          <div className={styles.mainContent}>
            {products.map((item, i) => (
              <div className={styles.product} key={i}>
                <div className={styles.mainProduct}>
                  <div className={styles.productImage}>
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      width={250} 
                      height={150} 
                    />
                  </div>

                  <div className={styles.productName}>
                    <h5>{item.name}</h5>
                  </div>

                  <div className={styles.productPrice}>
                    <strong className={styles.price}>{item.price}</strong>
                  </div>
                </div>

                <div className={styles.buyButton}>
                  <Link href={`/chitietsanpham?id=${i}`}>Xem chi tiết</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}