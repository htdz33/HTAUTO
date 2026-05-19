import Image from "next/image";
import styles from "./product.module.css";

const products = [
  { id: 1, name: "Bugatti Chiron Super Sport", price: "3.120.000 USD", old: "3.900.000 USD", percent: "-20%", img: "/image/2.webp", desc: "Siêu xe nhanh nhất thế giới, thiết kế sang trọng và động cơ mạnh mẽ." },
  { id: 2, name: "Lamborghini Aventador", price: "2.500.000 USD", old: "2.900.000 USD", percent: "-15%", img: "/image/3.jpg", desc: "Thiết kế hầm hố, động cơ V12 mạnh mẽ, biểu tượng của tốc độ." },
  { id: 3, name: "Ferrari SF90 Stradale", price: "2.200.000 USD", old: "2.600.000 USD", percent: "-10%", img: "/image/4.jpg", desc: "Siêu xe hybrid đầu tiên của Ferrari với công nghệ hiện đại." },
  // thêm các xe khác nếu muốn
];

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id == params.id);

  if (!product) return <h1>Không tìm thấy sản phẩm</h1>;

  return (
    <div className={styles.container}>
      
      <div className={styles.card}>
        
        <div className={styles.image}>
          <Image src={product.img} alt={product.name} width={500} height={300} />
        </div>

        <div className={styles.info}>
          <h1>{product.name}</h1>

          <p className={styles.price}>{product.price}</p>
          <p className={styles.old}>{product.old} ({product.percent})</p>

          <p className={styles.desc}>{product.desc}</p>

          <button className={styles.btn}>Mua ngay</button>
        </div>

      </div>

    </div>
  );
}