export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p>© 2025 NPHere Candles. All rights reserved.</p>
        <div className="flex gap-4">
          {["Facebook", "Instagram", "LinkedIn"].map((s, i) => (
            <a key={i} href="#" className="hover:text-white transition">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

