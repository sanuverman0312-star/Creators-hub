export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">
            © 2025 Shashank Creator Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/official__saanu03/" className="text-gray-500 hover:text-primary transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}