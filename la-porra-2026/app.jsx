const { useState, useEffect } = React;

// ----------------------
// ICONS (Inline SVG)
// ----------------------
const Icons = {
  Trophy: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
  Users: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  CalendarDays: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>,
  ChevronRight: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>,
  Medal: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="M13 12l5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>,
  TrendingUp: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  TrendingDown: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>,
  Minus: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" x2="19" y1="12" y2="12"/></svg>,
  Target: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Swords: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>,
  Clock: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Star: ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
};

// ----------------------
// COMPONENTS
// ----------------------

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center p-[2px]">
          <div className="w-full h-full bg-brand-darker rounded-full flex items-center justify-center">
            <Icons.Trophy className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        <span className="font-bold text-xl tracking-tight text-white hidden sm:block">PORRA MUNDIAL 2026</span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#clasificacion" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Clasificación</a>
        <a href="#partidos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Partidos</a>
        <a href="#premios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Premios</a>
        <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-white/10">
          Mi Cuenta
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-16 text-center relative">
    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 animate-float">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span className="text-sm font-medium tracking-wide">INSCRIPCIONES ABIERTAS</span>
    </div>
    
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
      LA PORRA DEL <br/>
      <span className="text-gradient">MUNDIAL 2026</span>
    </h1>
    
    <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
      Compite. Predice. <span className="text-white font-medium">Gana.</span>
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
      <div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center w-64 hover:-translate-y-1 transition-transform duration-300">
        <Icons.Trophy className="w-8 h-8 text-yellow-400 mb-3" />
        <span className="text-slate-400 text-sm font-medium mb-1">BOTE TOTAL</span>
        <span className="text-3xl font-bold text-white">750€</span>
      </div>
      
      <div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center w-64 hover:-translate-y-1 transition-transform duration-300">
        <Icons.Users className="w-8 h-8 text-blue-400 mb-3" />
        <span className="text-slate-400 text-sm font-medium mb-1">JUGADORES</span>
        <span className="text-3xl font-bold text-white">25<span className="text-lg text-slate-500">/30</span></span>
      </div>
      
      <div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center w-64 hover:-translate-y-1 transition-transform duration-300 border-yellow-500/30">
        <Icons.Medal className="w-8 h-8 text-yellow-500 mb-3" />
        <span className="text-yellow-500/80 text-sm font-medium mb-1">PREMIO CAMPEÓN</span>
        <span className="text-3xl font-bold text-gold-gradient">340€</span>
      </div>
    </div>
    
    <button className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-lg transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-1">
      <span className="relative z-10 flex items-center">
        Participar Ahora
        <Icons.ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { icon: Icons.CalendarDays, title: "Fase de Grupos", desc: "Predice el resultado exacto de todos los partidos de la fase de grupos. Suma puntos por acertar ganador o resultado exacto." },
    { icon: Icons.Target, title: "Fase Final", desc: "Adivina los equipos que avanzan en cada ronda del bracket final hasta el campeón." },
    { icon: Icons.Star, title: "Partido de la Jornada", desc: "Partidos seleccionados con puntuación doble. ¡Aprovecha para escalar en la clasificación!" },
    { icon: Icons.Trophy, title: "Gran Final", desc: "Predicciones especiales para la final: Primer goleador, MVP, total de tarjetas y más." }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl hover:bg-white/[0.03] transition-colors duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10">
              <step.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Prizes = () => (
  <section id="premios" className="py-12">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Estructura de Premios</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
    </div>
    
    <div className="flex flex-col lg:flex-row items-end justify-center gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
      {/* 2nd Place */}
      <div className="w-full lg:w-1/3 order-2 lg:order-1 flex flex-col items-center">
        <div className="glass-card p-6 rounded-2xl rounded-b-none border-b-0 w-full text-center relative overflow-hidden h-40 flex flex-col justify-end">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-300 shadow-[0_0_10px_rgba(203,213,225,0.8)]"></div>
          <span className="text-slate-400 text-sm font-semibold mb-1">SUBCAMPEÓN</span>
          <span className="text-4xl font-bold text-white mb-2">170€</span>
          <div className="w-8 h-8 rounded-full bg-slate-300 mx-auto flex items-center justify-center text-slate-800 font-bold">2</div>
        </div>
      </div>
      
      {/* 1st Place */}
      <div className="w-full lg:w-1/3 order-1 lg:order-2 flex flex-col items-center z-10">
        <div className="glass-card p-8 rounded-2xl w-full text-center relative overflow-hidden h-56 flex flex-col justify-end border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.15)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,1)]"></div>
          <Icons.Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-2 absolute top-6 left-1/2 -translate-x-1/2 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
          <span className="text-yellow-500 text-sm font-bold tracking-widest mb-1 mt-auto">CAMPEÓN</span>
          <span className="text-5xl font-black text-gold-gradient mb-4">340€</span>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 mx-auto flex items-center justify-center text-yellow-900 font-black text-xl shadow-[0_0_15px_rgba(250,204,21,0.4)]">1</div>
        </div>
      </div>
      
      {/* 3rd Place */}
      <div className="w-full lg:w-1/3 order-3 flex flex-col items-center">
        <div className="glass-card p-6 rounded-2xl rounded-b-none border-b-0 w-full text-center relative overflow-hidden h-32 flex flex-col justify-end">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-700 shadow-[0_0_10px_rgba(180,83,9,0.8)]"></div>
          <span className="text-slate-400 text-sm font-semibold mb-1">TERCERO</span>
          <span className="text-3xl font-bold text-white mb-2">60€</span>
          <div className="w-8 h-8 rounded-full bg-amber-700 mx-auto flex items-center justify-center text-white font-bold">3</div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="glass-card p-4 rounded-xl flex items-center justify-between border-l-4 border-l-emerald-500">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Icons.Target className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Premio "Ojo de Halcón"</h4>
            <p className="text-xs text-slate-400">Más resultados exactos acertados</p>
          </div>
        </div>
        <span className="text-xl font-bold text-emerald-400">60€</span>
      </div>
      <div className="glass-card p-4 rounded-xl flex items-center justify-between border-l-4 border-l-blue-500">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Icons.TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Premio "Remontada"</h4>
            <p className="text-xs text-slate-400">Mayor subida en la fase final</p>
          </div>
        </div>
        <span className="text-xl font-bold text-blue-400">60€</span>
      </div>
    </div>
  </section>
);

const Leaderboard = () => {
  const players = [
    { rank: 1, name: "David L.", pts: 124, trend: "up", change: 2 },
    { rank: 2, name: "Carlos M.", pts: 118, trend: "same", change: 0 },
    { rank: 3, name: "Andrea P.", pts: 115, trend: "down", change: -1 },
    { rank: 4, name: "Javi G.", pts: 109, trend: "up", change: 5 },
    { rank: 5, name: "Elena R.", pts: 105, trend: "down", change: -2 },
    { rank: 6, name: "Marcos T.", pts: 98, trend: "up", change: 1 },
    { rank: 7, name: "Sara F.", pts: 95, trend: "same", change: 0 },
  ];

  return (
    <div id="clasificacion" className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center">
            <Icons.Medal className="w-5 h-5 mr-2 text-yellow-500" />
            Clasificación en Vivo
          </h2>
          <p className="text-xs text-slate-400 mt-1">Jornada 3 de Fase de Grupos</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
          LIVE
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 text-xs text-slate-400 uppercase tracking-wider bg-black/20">
              <th className="px-6 py-4 font-semibold">Pos</th>
              <th className="px-6 py-4 font-semibold">Jugador</th>
              <th className="px-6 py-4 font-semibold text-right">Puntos</th>
              <th className="px-6 py-4 font-semibold text-center">Tendencia</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p, i) => (
              <tr key={i} className="border-b border-white/5 table-row-hover transition-colors">
                <td className="px-6 py-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${p.rank === 1 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
                      p.rank === 2 ? 'bg-slate-300/20 text-slate-300 border border-slate-300/30' : 
                      p.rank === 3 ? 'bg-amber-700/20 text-amber-500 border border-amber-700/30' : 
                      'text-slate-400'}`}>
                    {p.rank}
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-white">{p.name}</td>
                <td className="px-6 py-4 font-bold text-emerald-400 text-right">{p.pts} <span className="text-xs text-slate-500 font-normal">pts</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center">
                    {p.trend === 'up' && <div className="flex items-center text-emerald-500 text-xs font-medium"><Icons.TrendingUp className="w-4 h-4 mr-1" /> +{p.change}</div>}
                    {p.trend === 'down' && <div className="flex items-center text-red-500 text-xs font-medium"><Icons.TrendingDown className="w-4 h-4 mr-1" /> {p.change}</div>}
                    {p.trend === 'same' && <div className="flex items-center text-slate-500 text-xs font-medium"><Icons.Minus className="w-4 h-4 mr-1" /> -</div>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-white/5 bg-white/[0.02] text-center">
        <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
          Ver clasificación completa →
        </button>
      </div>
    </div>
  );
};

const MatchOfDay = () => (
  <div id="partidos" className="glass-card rounded-2xl p-1 relative overflow-hidden group">
    {/* Animated border effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
    
    <div className="bg-[#0f172a] rounded-xl p-6 relative z-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-xs font-bold tracking-wider text-yellow-400 uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
          <Icons.Star className="w-3.5 h-3.5 mr-1.5" />
          Partido del Día
        </div>
        <div className="flex items-center text-slate-400 text-xs font-medium">
          <Icons.Clock className="w-3.5 h-3.5 mr-1" />
          Hoy, 20:00 CET
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-3xl">🇪🇸</span>
          </div>
          <span className="font-bold text-white">España</span>
        </div>
        
        <div className="flex flex-col items-center px-4">
          <div className="text-xs text-emerald-400 font-bold mb-1 tracking-widest">PUNTOS x2</div>
          <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 font-mono text-xl font-bold text-white shadow-inner">
            VS
          </div>
        </div>
        
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-3xl">🇩🇪</span>
          </div>
          <span className="font-bold text-white">Alemania</span>
        </div>
      </div>

      <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-colors flex items-center justify-center mt-auto">
        <Icons.Swords className="w-5 h-5 mr-2" />
        Hacer Predicción
      </button>
    </div>
  </div>
);

const RulesSummary = () => (
  <div className="glass-card rounded-2xl p-6">
    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
      <Icons.CalendarDays className="w-5 h-5 mr-2 text-blue-400" />
      Sistema de Puntuación
    </h3>
    <ul className="space-y-3">
      <li className="flex items-start">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">3</div>
        <div>
          <span className="text-sm font-medium text-slate-200">Pleno (Resultado Exacto)</span>
          <p className="text-xs text-slate-500 mt-0.5">Aciertas el ganador y el número exacto de goles.</p>
        </div>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">1</div>
        <div>
          <span className="text-sm font-medium text-slate-200">Tendencia (1X2)</span>
          <p className="text-xs text-slate-500 mt-0.5">Aciertas el ganador o el empate, pero no los goles.</p>
        </div>
      </li>
    </ul>
    <div className="mt-4 pt-4 border-t border-white/5">
      <a href="#" className="text-xs text-emerald-400 hover:underline">Leer reglamento completo</a>
    </div>
  </div>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#020617] pt-12 pb-8 mt-24">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Icons.Trophy className="w-6 h-6 text-emerald-500" />
          <span className="font-bold text-lg text-white">PORRA MUNDIAL 2026</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Reglas</a>
          <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Premios</a>
          <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contacto</a>
        </div>
      </div>
      <div className="text-center md:text-left text-slate-600 text-xs border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 La Porra Privada. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">Diseñado para la máxima competición.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-24">
        <Hero />
        <HowItWorks />
        <Prizes />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Leaderboard />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <MatchOfDay />
            <RulesSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
