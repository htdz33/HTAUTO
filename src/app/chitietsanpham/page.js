"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Link from "next/link";
import { useState, Suspense } from "react"; // Thêm Suspense

// 1. Tách phần nội dung chính ra một Component riêng
function ProductDetailContent() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id")) || 0;

  const products = [
    {
      name: "Bugatti Chiron Super Sport",
      price: "3.120.000 USD",
      old: "3.900.000 USD",
      percent: "-20%",
      img: "/image/2.webp",
      desc: "Bugatti Chiron Super Sport là siêu xe nhanh nhất thế giới với động cơ W16 8.0L quad-turbo.",
      specs: {
        engine: "W16 8.0L Quad Turbo",
        power: "1600 HP",
        acceleration: "2.4s",
        speed: "490 km/h"
      }
    },
    {
      name: "Lamborghini Aventador",
      price: "2.500.000 USD",
      old: "2.900.000 USD",
      percent: "-15%",
      img: "/image/3.jpg",
      desc: "Aventador là biểu tượng Lamborghini với động cơ V12 mạnh mẽ.",
      specs: {
        engine: "V12 6.5L",
        power: "740 HP",
        acceleration: "2.9s",
        speed: "350 km/h"
      }
    },
    {
      name: "Ferrari SF90 Stradale",
      price: "2.200.000 USD",
      old: "2.600.000 USD",
      percent: "-10%",
      img: "/image/4.jpg",
      desc: "SF90 là siêu xe hybrid đầu tiên của Ferrari.",
      specs: {
        engine: "V8 Hybrid",
        power: "986 HP",
        acceleration: "2.5s",
        speed: "340 km/h"
      }
    },
    {
      name: "McLaren 720S",
      price: "1.900.000 USD",
      old: "2.200.000 USD",
      percent: "-12%",
      img: "/image/5.avif",
      desc: "McLaren 720S có thiết kế khí động học và trọng lượng nhẹ.",
      specs: {
        engine: "V8 Twin Turbo",
        power: "710 HP",
        acceleration: "2.8s",
        speed: "341 km/h"
      }
    },
    {
      name: "Rolls Royce Phantom",
      price: "3.500.000 USD",
      old: "3.900.000 USD",
      percent: "-8%",
      img: "/image/6.jpg",
      desc: "Phantom là biểu tượng của sự sang trọng.",
      specs: {
        engine: "V12 6.75L",
        power: "563 HP",
        acceleration: "5.3s",
        speed: "250 km/h"
      }
    },
    {
      name: "Bentley Continental GT",
      price: "2.000.000 USD",
      old: "2.300.000 USD",
      percent: "-13%",
      img: "/image/7.jpg",
      desc: "Bentley GT kết hợp thể thao và sang trọng.",
      specs: {
        engine: "W12 6.0L",
        power: "626 HP",
        acceleration: "3.7s",
        speed: "333 km/h"
      }
    },
    {
      name: "Porsche 911 Turbo S",
      price: "1.800.000 USD",
      old: "2.100.000 USD",
      percent: "-10%",
      img: "/image/8.webp",
      desc: "911 Turbo S tăng tốc cực nhanh.",
      specs: {
        engine: "Flat-6 3.7L",
        power: "640 HP",
        acceleration: "2.7s",
        speed: "330 km/h"
      }
    },
    {
      name: "Aston Martin DB11",
      price: "1.700.000 USD",
      old: "2.000.000 USD",
      percent: "-15%",
      img: "/image/9.avif",
      desc: "DB11 mang phong cách quý tộc.",
      specs: {
        engine: "V8 Twin Turbo",
        power: "528 HP",
        acceleration: "4.0s",
        speed: "322 km/h"
      }
    },
    {
      name: "BMW i8",
      price: "1.200.000 USD",
      old: "1.500.000 USD",
      percent: "-20%",
      img: "/image/10.webp",
      desc: "BMW i8 là siêu xe hybrid.",
      specs: {
        engine: "1.5L Hybrid",
        power: "369 HP",
        acceleration: "4.2s",
        speed: "250 km/h"
      }
    },
    {
      name: "Audi R8",
      price: "1.600.000 USD",
      old: "1.900.000 USD",
      percent: "-14%",
      img: "/image/11.jpg",
      desc: "Audi R8 có động cơ V10 mạnh mẽ.",
      specs: {
        engine: "V10 5.2L",
        power: "610 HP",
        acceleration: "3.2s",
        speed: "330 km/h"
      }
    }
  ];

  const product = products[id] || products[0];

  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        {/* LEFT - IMAGE */}
        <div className={styles.left}>
          <div className={styles.imageBox}>
            <Image
              src={product.img}
              alt={product.name}
              width={600}
              height={400}
              className={styles.img}
              priority
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.rating}>
            ⭐⭐⭐⭐⭐ <span>(258 đánh giá cao cấp)</span>
          </div>

          <div className={styles.priceBox}>
            <span className={styles.price}>{product.price}</span>
            <span className={styles.old}>{product.old}</span>
            <span className={styles.percent}>{product.percent}</span>
          </div>

          <p className={styles.desc}>{product.desc}</p>

          {/* THÔNG SỐ - Đã sửa để lấy data từ object product */}
          <div className={styles.specs}>
            <h3>Thông số kỹ thuật</h3>
            <ul>
              <li>Động cơ: {product.specs.engine}</li>
              <li>Công suất: {product.specs.power}</li>
              <li>0-100km/h: {product.specs.acceleration}</li>
              <li>Tốc độ tối đa: {product.specs.speed}</li>
            </ul>
          </div>

          <div className={styles.saleBox}>
            <h4>🎁 Ưu đãi VIP</h4>
            <ul>
              <li>Miễn phí vận chuyển toàn cầu</li>
              <li>Tặng gói bảo dưỡng 3 năm</li>
              <li>Hỗ trợ trả góp 0%</li>
            </ul>
          </div>

          <button className={styles.btn}>🛒 MUA NGAY</button>
          <Link href="/" className={styles.back}>← Quay lại</Link>
        </div>
      </div>
    </div>
  );
}

// 2. Export chính bọc trong Suspense để tránh lỗi Build
export default function ProductDetail() {
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{padding: '100px', textAlign: 'center'}}>Đang tải dữ liệu siêu xe...</div>}>
        <ProductDetailContent />
      </Suspense>
      <Footer />
    </>
  );
}