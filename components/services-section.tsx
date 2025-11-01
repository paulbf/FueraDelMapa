"use client"

const services = [
  {
    icon: "📍",
    title: "Itinerarios Personalizados",
    description: "Diseñamos tu viaje según tus intereses reales, no tours genéricos",
  },
  {
    icon: "🏠",
    title: "Alojamiento con Alma",
    description: "Posadas familiares, hoteles boutique, casas rurales con carácter",
  },
  {
    icon: "🍷",
    title: "Experiencias Locales",
    description: "Cenas en casas de locales, talleres artesanales, rutas secretas",
  },
  {
    icon: "✈️",
    title: "Logística Sin Estrés",
    description: "Traslados, seguros, soporte 24/7 - todo resuelto",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
          style={{ color: "var(--text-primary)" }}
        >
          Cómo hacemos que tu viaje sea único
        </h2>
        <p
          className="text-xl text-center mb-16 max-w-2xl mx-auto text-pretty"
          style={{ color: "var(--text-secondary)" }}
        >
          Nos encargamos de cada detalle para que vos solo disfrutes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 min-h-[220px] transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              style={{
                borderRadius: "var(--card-radius)",
                boxShadow: "0 6px 18px rgba(20,15,21,0.05)",
                backgroundColor: "var(--bg-primary)",
                border: "1px solid rgba(186, 192, 202, 0.3)",
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
