export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📸' },
    { name: 'TikTok', url: '#', icon: '🎬' },
    { name: 'Twitter/X', url: '#', icon: '𝕏' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Matralleta</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Coffee truck. Street culture. Community-first mindset.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <a href="#journey" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#merch" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  Merch
                </a>
              </li>
              <li>
                <a href="#early-access" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@matralleta.com" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  title={link.name}
                  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8">
          {/* Bottom info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Matralleta Coffee Truck. All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm">
              Handmade in San Diego 🖤 ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
