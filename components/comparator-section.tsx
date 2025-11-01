"use client"

const comparisons = [
  {
    saturated: {
      icon: "🗽",
      name: "Cancún",
      description: "Hoteles gigantes, playas abarrotadas",
    },
    alternative: {
      icon: "🌴",
      name: "Mahahual",
      description: "Pueblo pesquero, arrecifes vírgenes, relax auténtico",
    },
  },
  {
    saturated: {
      icon: "🏙️",
      name: "Barcelona",
      description: "Colas interminables, precios inflados",
    },
    alternative: {
      icon: "🏛️",
      name: "Tarragona",
      description: "Anfiteatro romano vacío, tapas con locales",
    },
  },
  {
    saturated: {
      icon: "🗼",
      name: "París",
      description: "Multitudes en cada monumento",
    },
    alternative: {
      icon: "🏘️",
      name: "Estrasburgo",
      description: "Paseos en barca tranquilos, barrios con alma",
    },
  },
]

export function ComparatorSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "rgba(186, 192, 202, 0.08)" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          style={{ color: "var(--text-primary)" }}
        >
          Menos turismo, más descubrimiento
        </h2>
        <div className="space-y-6">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 transition-all duration-200"
              style={{
                borderRadius: "var(--card-radius)",
                backgroundColor: "var(--bg-primary)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(186, 192, 202, 0.1)" }}
              >
                <span className="text-3xl">{comparison.saturated.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {comparison.saturated.name}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>{comparison.saturated.description}</p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(188, 63, 35, 0.05)" }}
              >
                <span className="text-3xl">{comparison.alternative.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--accent-primary)" }}>
                    {comparison.alternative.name}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>{comparison.alternative.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
