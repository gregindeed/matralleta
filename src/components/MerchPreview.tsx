export default function MerchPreview() {
  const merch = [
    {
      name: 'Classic Crew Tee',
      category: 'Shirt',
      description: 'Heavy cotton. Bold Matralleta logo. Available in black & cream.',
      price: '$32',
      emoji: '👕',
      color: 'from-slate-600 to-slate-800',
    },
    {
      name: 'Coffee Mug',
      category: 'Drinkware',
      description: 'Ceramic. 12oz. Perfect for daily coffee rituals.',
      price: '$16',
      emoji: '☕',
      color: 'from-amber-700 to-amber-900',
    },
    {
      name: 'Sticker Pack',
      category: 'Sticker',
      description: 'Set of 5. Weather-resistant. Truck, coffee, culture vibes.',
      price: '$8',
      emoji: '🎨',
      color: 'from-pink-600 to-purple-800',
    },
    {
      name: 'Snapback Cap',
      category: 'Hat',
      description: 'Cotton twill. Embroidered logo. Adjustable fit.',
      price: '$28',
      emoji: '🧢',
      color: 'from-zinc-700 to-zinc-900',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-600/20 text-amber-400 border border-amber-600/40">
              Limited Edition
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Matralleta Merch</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Wear the culture. Limited-edition drops tied to our journey. Early access members get first pick.
          </p>
        </div>

        {/* Merch grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {merch.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden border border-zinc-700 hover:border-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20"
            >
              {/* Merch visual */}
              <div className={`h-40 bg-gradient-to-br ${item.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                {item.emoji}
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-amber-400 text-xs font-semibold uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-bold mt-1">{item.name}</h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
                  <span className="text-amber-400 font-bold text-lg">{item.price}</span>
                  <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg text-sm font-semibold transition-colors duration-200">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6">
            See new drops first. Join the Matralleta crew.
          </p>
          <a
            href="#early-access"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-amber-600/50 hover:shadow-2xl"
          >
            Early Access Signup
          </a>
        </div>
      </div>
    </section>
  );
}
