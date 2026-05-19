import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>Trang chủ</li>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>Gmail.com</li>
        </ul>
      </nav>
      <div>
        <Image src="/next.svg" alt="Logo" width={100} height={24} />
      </div>
    </div>
  );
}