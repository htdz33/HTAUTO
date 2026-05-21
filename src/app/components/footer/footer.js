import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.item3}>
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          {/* Cột 1: Thông tin đại lý */}
          <div className={styles.contactInfo}>
            <strong>Showroom Hyundai</strong>
            <p>Địa chỉ: 648 Trường Chinh, P.13 , Q.Tân Bình, TP.HCM</p>
            <p>Hotline Kinh doanh: 0907777782</p>
            <p>Hotline Dịch vụ: 190826382</p>
            <p>Email: info@hyundaikinhduongvuong.com</p>
          </div>

          {/* Cột 2: Dòng xe tiêu biểu */}
        

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div>
            <strong>Hỗ trợ khách hàng</strong>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Hướng dẫn trả góp</li>
              <li>Đặt lịch hẹn dịch vụ</li>
              <li>Đăng ký lái thử</li>
            </ul>
          </div>

          {/* Cột 4: Kết nối */}
          <div>
            <strong>Kết nối với chúng tôi</strong>
            <ul className={styles.website}>
              <li title="Facebook">Facebook</li>
              <li title="Youtube">Youtube</li>
              <li title="Zalo">Zalo</li>
            </ul>
            <div style={{marginTop: '20px'}}>
               <i className={styles.tgdd}></i>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2024 HTAUTO. Bản quyền thuộc về Đại lý ủy quyền của HTAUTO Thành Công Việt Nam.</p>
          <p>Thiết kế bởi Team HTAUTO - Chuyên nghiệp & Tận tâm</p>
        </div>
      </footer>
    </div>
  );
}