import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Bên trái: Logo */}
        <div className={styles.logo}>
         HTAUTO
        </div>

        {/* Ở giữa: Menu điều hướng */}
        <nav className={styles.nav}>
          <ul>
            <li>Giới thiệu</li>
            <li>Sản phẩm</li>
            <li>Dịch vụ</li>
            <li>Trả góp</li>
            <li>Liên hệ</li>
          </ul>
        </nav>

        {/* Bên phải: Nút kêu gọi hành động */}
        <div className={styles.ctaButton}>
          Đăng ký lái thử
        </div>
      </div>
    </header>
  );
}