export default function TruckJourney() {
  const milestones = [
    {
      phase: 'The Dream',
      year: '2024',
      description: 'Started with vision and a beat-up van. Coffee knowledge, zero logistics.',
      icon: '💭',
    },
    {
      phase: 'The Build',
      year: 'Early 2025',
      description: 'Complete truck rebuild. Custom espresso setup, storage, branding. Nights and weekends.',
      icon: '🔧',
    },
    {
      phase: 'First Cup',
      year: 'Spring 2025',
      description: 'Soft launch in Pacific Beach. Community feedback reshapes everything.',
      icon: '☕',
    },
    {
      phase: 'Growth',
      year: 'Summer 2025',
      description: 'Multiple locations, merch launch, crew expansion. Matralleta becomes a thing.',
      icon: '🚀',
    },
    {
      phase: 'Momentum',
      year: 'Now',
      description: 'Street culture meets coffee culture. We\'re just getting started.',
      icon: '🎯',
    },
  ];

  return (
    <section id="journey" className="relative py-24 px-6 lg:px-12 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Matralleta Journey</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From van dreams to street culture. Here's how we rebuilt a truck and a vision.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 to-zinc-700"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline point */}
                <div className="hidden md:flex flex-1 justify-end pr-12">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-2xl relative z-10 shadow-lg">
                    {milestone.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 md:pl-0">
                  <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 border border-amber-600/20 hover:border-amber-600/40 transition-colors duration-200">
                    <div className="flex items-center gap-3 md:hidden mb-4">
                      <span className="text-3xl">{milestone.icon}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-amber-400 font-semibold text-sm">{milestone.year}</p>
                      <h3 className="text-2xl font-bold">{milestone.phase}</h3>
                      <p className="text-zinc-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
