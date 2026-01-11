interface StatsCardsProps {
  total: number
  completed: number
  incomplete: number
}

export default function StatsCards({ total, completed, incomplete }: StatsCardsProps) {
  const stats = [
    { label: "Total Tasks", value: total },
    { label: "Completed", value: completed },
    { label: "Incomplete", value: incomplete },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="relative group"
        >
          <div className="absolute inset-0 bg-pink-900 rounded-[2rem] translate-y-2 translate-x-0" />
          <div className="relative bg-gradient-to-br from-pink-400 to-pink-600 rounded-[2rem] p-8 text-center border-b-4 border-pink-700 hover:-translate-y-1 transition-transform cursor-default">
            <p className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-md">
              {stat.value}
            </p>
            <p className="text-pink-100 text-sm md:text-base uppercase tracking-widest font-bold">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
