import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.item3}>
      <footer className={styles.footer}>
        <section className={styles.footerSection}>
          <div>
            <strong>Tổng đài hỗ trợ</strong>
            <ul>
              <li>Gọi mua: 1900 232 461</li>
              <li>Khiếu nại: 1800 1063</li>
              <li>Bảo hành: 1900 232 465</li>
            </ul>
          </div>

          <div>
            <strong>Về công ty</strong>
            <ul>
              <li>Giới thiệu công ty</li>
              <li>Tuyển dụng</li>
              <li>Gửi góp ý</li>
              <li>Tìm cửa hàng</li>
            </ul>
          </div>

          <div>
            <strong>Thông tin khác</strong>
            <ul>
              <li>Lịch sử mua hàng</li>
              <li>Chính sách đổi trả</li>
              <li>Tích điểm</li>
            </ul>
          </div>

          <div>
            <strong>Website cùng tập đoàn</strong>
            <ul className={styles.website}>
              <li><i className={styles.tgdd}></i></li>
              <li><i className={styles.topzone}></i></li>
              <li><i className={styles.bhx}></i></li>
              <li><i className={styles.ankhang}></i></li>
            </ul>
          </div>
        </section>

        <div className={styles.copyright}>
          © 2018. Công ty cổ phần HTAUTO.
        </div>
      </footer>
    </div>
  );
}