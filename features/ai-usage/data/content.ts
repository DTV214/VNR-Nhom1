export const aiUsageSections = [
  {
    title: "Cấu trúc nội dung",
    description:
      "AI được dùng để chuyển bản HTML tham khảo thành dữ liệu có cấu trúc, tách các mốc lịch sử, nhóm luận điểm và chuẩn hóa cách trình bày cho từng section.",
  },
  {
    title: "UI/UX và component",
    description:
      "AI hỗ trợ dựng giao diện Next.js theo kiến trúc feature-based, tạo các component có thể tái sử dụng như carousel, grid, dropdown, timeline và banner tư liệu.",
  },
  {
    title: "Hình ảnh và tư liệu",
    description:
      "Các URL ảnh hiện là slot Cloudinary mẫu để giữ layout hoàn chỉnh. Khi có ảnh chính thức, chỉ cần thay dữ liệu trong file content mà không phải sửa cấu trúc UI.",
  },
  {
    title: "Nguyên tắc kiểm chứng",
    description:
      "Phần nội dung lịch sử nên được đối chiếu với giáo trình, văn kiện, bảo tàng hoặc nguồn lưu trữ chính thống trước khi dùng trong báo cáo nghiên cứu.",
  },
];

export const aiWorkflow = [
  "Phân tích HTML mẫu, giữ palette và tinh thần thiết kế ban đầu.",
  "Tách source thành app, components/ui, features/home và features/ai-usage.",
  "Chuẩn hóa nội dung thành data layer để dễ thay đổi ảnh, mốc thời gian và mô tả.",
  "Kiểm tra lint, typecheck và build production để bảo đảm source chạy ổn định.",
];
