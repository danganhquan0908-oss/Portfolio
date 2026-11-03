# CV & Portfolio Trực Tuyến - Đặng Anh Quân

Trang web tĩnh CV hiện đại, chuyên nghiệp dành cho ứng tuyển vị trí **Software Engineering Intern / Software Developer**.

---

## 📁 Cấu trúc thư mục

```text
d:\CV/
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions tự động deploy lên GitHub Pages
├── index.html         # Mã nguồn HTML5 ngữ nghĩa chuẩn, đầy đủ nội dung từ bản phác thảo
├── style.css          # Bộ định dạng CSS hiện đại (Dark/Light mode, Responsive & Print PDF A4)
├── script.js          # Xử lý đổi theme, sao chép email 1-click, in CV, cuộn mượt
├── README.md          # Hướng dẫn sử dụng và triển khai online
└── assets/
    └── avatar.jpg     # Ảnh đại diện cá nhân chất lượng cao
```

---

## 🌟 Tính năng nổi bật

1. **Giao diện hiện đại & chuyển đổi Dark / Light Mode**:
   - Mặc định tone tối (Dark Mode) công nghệ, có nút chuyển sáng/tối lưu tự động vào `localStorage`.
2. **Chuẩn hóa in ấn / Xuất file PDF (Chuẩn A4)**:
   - Tích hợp nút **"In / Lưu PDF"** (`window.print()`) kèm bộ `@media print` được thiết kế riêng.
   - Khi bấm in hoặc lưu PDF, thanh công cụ, nút bấm và màu nền rườm rà sẽ được lược bỏ, căn lề chuẩn trang A4 sắc nét để gửi nhà tuyển dụng hoặc hệ thống ATS.
3. **Sao chép nhanh Email**:
   - Nhấn vào email để sao chép ngay lập tức kèm thông báo toast tiện lợi.
4. **Trực quan hóa đồ án tiêu biểu**:
   - Giới thiệu chi tiết dự án **Monthly Parking System (MPS)** kèm liên kết trực tiếp tới repository GitHub: `https://github.com/danganhquan0908-oss/Monthly-Parking-System`.
5. **Tương thích mọi thiết bị (Responsive)**:
   - Hiển thị đẹp mắt trên máy tính để bàn, laptop, iPad/tablet và điện thoại di động.

---

## 🌐 Triển khai lên GitHub Pages (Repository: Portfolio)

Link trang web sau khi deploy:
👉 **`https://danganhquan0908-oss.github.io/Portfolio/`**

### Các bước kích hoạt GitHub Pages:
1. Vào repository: **`https://github.com/danganhquan0908-oss/Portfolio`**
2. Nhấn vào tab **Settings** (Cài đặt) ở thanh trên cùng.
3. Ở menu bên trái, chọn mục **Pages**.
4. Tại mục **Build and deployment** -> **Source**:
   - **Cách 1 (Tự động với GitHub Actions)**: Chọn `GitHub Actions`. Hệ thống sẽ chạy file `.github/workflows/deploy.yml` đã được cấu hình sẵn.
   - **Cách 2 (Deploy trực tiếp từ Branch)**: Chọn `Deploy from a branch`, chọn branch `main` và thư mục `/ (root)` rồi bấm **Save**.
5. Đợi 1-2 phút, trang web CV của bạn sẽ chính thức online tại:
   `https://danganhquan0908-oss.github.io/Portfolio/`
