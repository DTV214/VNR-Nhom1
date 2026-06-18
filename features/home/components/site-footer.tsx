import Link from "next/link";

const footerLinks = [
  "Chính sách bảo mật",
  "Điều khoản sử dụng",
  "Liên hệ tác giả",
  "Lưu trữ số",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-foreground py-16 text-white">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-display text-4xl font-bold text-primary-fixed">
            Hồ Chí Minh 1946
          </div>
          <p className="mt-2 text-sm text-white/60">
            © 2026 Hồ Chí Minh 1946 - Lưu trữ lịch sử Việt Nam
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-5 md:gap-8">
          {footerLinks.map((link) => (
            <Link
              className="text-sm text-white/65 underline-offset-4 transition hover:text-primary-fixed hover:underline"
              href="#thoi-khac"
              key={link}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
