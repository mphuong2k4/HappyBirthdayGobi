# Happy Birthday Gobi

Website chúc mừng sinh nhật dành riêng cho Gobi, xây dựng bằng React, Vite, Tailwind CSS và Framer Motion.

## Chạy local

```bash
npm install
npm run dev
```

## Kiểm tra và build

```bash
npm run lint
npm run build
npm run preview
```

## Thay ảnh

- Ảnh chính: `src/assets/images/memory-1.webp.JPG`.
- Ảnh section Wishes: `public/images/gobi-main-placeholder.jpg`.
- Sáu ảnh Gallery: `public/images/gallery-placeholder-1.jpg` đến `gallery-placeholder-6.jpg`.

Giữ nguyên tên file khi thay ảnh để không cần sửa code. Gallery sử dụng tỷ lệ ảnh tự nhiên để hạn chế cắt người trên cả desktop và điện thoại.

## Nội dung

Lời chúc chính nằm trong `src/data/birthday.js`. Nội dung và caption giao diện nằm trong `src/components/BirthdayJourney.jsx`.

## Triển khai

Workflow tại `.github/workflows/deploy-pages.yml` tự động build và deploy GitHub Pages khi push lên nhánh `main`.
