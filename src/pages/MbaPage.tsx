import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Award, 
  BookOpen, 
  Users, 
  ArrowRight,
  ChevronDown,
  Play,
  Clock,
  Zap,
  CreditCard,
  MessageCircle,
  XCircle,
  Calendar,
  Video,
  Laptop
} from 'lucide-react';

export default function MbaPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://chat.whatsapp.com/GxhMS1lyHUU45n0iRqwi3l?mode=hqctcla";

  return (
    <div className="min-h-screen bg-[#05101f] text-white font-sans selection:bg-amber-500/30">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a1d37]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-black font-bold">L</div>
            <span className="font-bold text-xl tracking-tight">MBA <span className="text-amber-500">Liderança</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#sobre" className="hover:text-amber-500 transition-colors">O Programa</a>
            <a href="#diferenciais" className="hover:text-amber-500 transition-colors">Diferenciais</a>
            <a href="#mentor" className="hover:text-amber-500 transition-colors">Mentor</a>
          </div>
          <button 
            onClick={scrollToPricing}
            className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-95"
          >
            Garantir minha vaga
          </button>
        </div>
      </nav>

      {/* 1️⃣ Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold mb-6 border border-amber-500/20 uppercase tracking-widest">
                <Award size={14} /> Certificação MEC & André Souto
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 text-white">
                Muito mais do que uma pós-graduação. É uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">mentoria prática</span> para quem lidera.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
                Para gestores que querem aprender a liderar pessoas de verdade, com acompanhamento prático e networking profissional.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToPricing}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-amber-500/20 transition-all flex items-center justify-center gap-3 group"
                >
                  Quero garantir minha vaga
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold text-zinc-300 border border-white/10 hover:bg-white/5 transition-all"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  Falar com o coordenador
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 aspect-video shadow-2xl bg-zinc-900 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Liderança Executiva" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ O Problema e a Oportunidade */}
      <section className="py-24 bg-[#0a1d37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-8">Você foi promovido, agora é líder. Mas ninguém te ensinou a <span className="text-amber-500">liderar de verdade</span>.</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            O que a maioria das pós-graduações entrega? PDFs, vídeos gravados, um diploma e... só.
          </p>
          <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20">
            <p className="text-2xl font-bold text-amber-200">
              Esse MBA é diferente: você vai ter acompanhamento ao vivo, mentoria em grupo e suporte direto de quem vive gestão todos os dias.
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ O Que Você Vai Receber */}
      <section id="sobre" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">O que você vai <span className="text-amber-500">receber</span></h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Video />, title: "Aulas ao vivo semanais", desc: "Encontros diretos com professor especialista para tirar dúvidas em tempo real." },
              { icon: <Zap />, title: "Mentorias em grupo", desc: "Acelere sua evolução com trocas práticas e orientações estratégicas." },
              { icon: <Award />, title: "Diploma reconhecido pelo MEC", desc: "Certificação oficial válida em todo o território nacional." },
              { icon: <Users />, title: "Networking Profissional", desc: "Conecte-se com outros líderes e expanda suas oportunidades." },
              { icon: <Star />, title: "Aplicação Prática", desc: "Foco total em resultados reais para o seu dia a dia na gestão." },
              { icon: <BookOpen />, title: "Comunidade Exclusiva", desc: "Acesso a um ecossistema de alunos para troca constante de experiências." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Pra Quem é Esse MBA */}
      <section className="py-24 bg-[#0a1d37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500" />
                Este MBA é para você que:
              </h3>
              <ul className="space-y-6">
                {[
                  "Está começando sua jornada como líder",
                  "Foi promovido e agora gerencia pessoas",
                  "Quer se destacar com uma liderança prática e humana",
                  "Precisa de orientação, troca e clareza na tomada de decisão"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-zinc-300">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <XCircle className="text-red-500" />
                Não é para quem:
              </h3>
              <ul className="space-y-6">
                {[
                  "Quer só o diploma",
                  "Prefere estudar sem interação ou acompanhamento"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-zinc-300">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Diferenciais (Comparação) */}
      <section id="diferenciais" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">O que torna este MBA <span className="text-amber-500">único</span></h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 font-bold text-zinc-400 uppercase tracking-wider text-sm">Recurso</th>
                  <th className="p-6 font-bold text-zinc-400 uppercase tracking-wider text-sm">Pós Tradicional</th>
                  <th className="p-6 font-bold text-amber-500 uppercase tracking-wider text-sm bg-amber-500/5">MBA André Souto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { label: "Aulas", old: "Gravadas", new: "Ao vivo toda semana" },
                  { label: "Acompanhamento", old: "Estudo solitário", new: "Mentoria em grupo" },
                  { label: "Foco", old: "Diploma apenas", new: "Diploma + Aplicação prática" },
                  { label: "Suporte", old: "Professor distante", new: "Contato direto com coordenador" },
                  { label: "Comunidade", old: "Sem comunidade", new: "Networking com outros gestores" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold text-zinc-300">{row.label}</td>
                    <td className="p-6 text-zinc-500">{row.old}</td>
                    <td className="p-6 font-bold text-white bg-amber-500/5">{row.new}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6️⃣ Quem Conduz o Programa */}
      <section id="mentor" className="py-24 bg-[#0a1d37]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 p-8 sm:p-16 rounded-[48px] border border-white/10">
            <div className="w-64 h-80 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-amber-500/20 shadow-2xl">
              <img 
                src="/Foto Andre Oficial.jpeg" 
                alt="André Souto" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold mb-6 uppercase tracking-widest">
                Coordenador & Mentor
              </div>
              <h2 className="text-4xl font-black mb-6">André Souto</h2>
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  Sou André Souto, mestre em administração, professor universitário, especialista em liderança e gestão de pessoas.
                </p>
                <p>
                  Tenho anos de experiência formando líderes na prática — e agora vou te acompanhar de perto nesse MBA completo e acessível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Como Funciona */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Como <span className="text-amber-500">funciona</span></h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Laptop />, title: "Modalidade", desc: "100% online com plataforma de fácil acesso." },
              { icon: <Video />, title: "Aulas ao vivo", desc: "1x por semana para interação e dúvidas." },
              { icon: <Award />, title: "Certificação", desc: "Reconhecida pelo MEC." },
              { icon: <Clock />, title: "Duração", desc: "Programa completo em 12 meses." },
              { icon: <Zap />, title: "Gravações", desc: "Disponíveis se não puder assistir ao vivo." },
              { icon: <MessageCircle />, title: "Grupo Exclusivo", desc: "Espaço para alunos e mentorias." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Preço e Condições */}
      <section id="preco" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-amber-500/5 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="flex-1 p-10 sm:p-16 bg-zinc-50 text-black">
              <h2 className="text-3xl font-black mb-6">Invista na sua carreira agora.</h2>
              <p className="text-zinc-600 mb-10">Escolha a melhor forma de pagamento para você e comece ainda esta semana.</p>
              
              <div className="space-y-6 mb-12">
                <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <p className="text-sm font-bold text-zinc-400 uppercase mb-1">Cartão de Crédito</p>
                  <p className="text-2xl font-black">12x de R$ 249,90</p>
                  <p className="text-xs text-zinc-500">Sem juros no cartão</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <p className="text-sm font-bold text-zinc-400 uppercase mb-1">Boleto Bancário</p>
                  <p className="text-2xl font-black">18x de R$ 199,90</p>
                </div>
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 shadow-sm">
                  <p className="text-sm font-bold text-amber-600 uppercase mb-1">À Vista (Pix ou Boleto)</p>
                  <p className="text-3xl font-black">R$ 2.497</p>
                  <p className="text-sm text-amber-700 font-bold">Economize R$ 500</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <ShieldCheck className="text-emerald-600" size={24} />
                <p className="text-sm text-emerald-900 font-bold">Inscrição 100% segura e criptografada.</p>
              </div>
            </div>

            <div className="w-full md:w-[400px] p-10 sm:p-16 bg-[#0a1d37] flex flex-col justify-center text-center">
              <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Matrículas Abertas</p>
              
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-6 rounded-2xl font-black text-xl shadow-xl shadow-amber-500/20 transition-all active:scale-95 mb-8 flex items-center justify-center gap-3">
                <CreditCard size={24} />
                Quero me inscrever agora
              </button>
              
              <div className="space-y-4">
                <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Pagamento Seguro</p>
                <div className="flex items-center justify-center gap-4 opacity-50 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Garantia e Segurança */}
      <section className="py-24 bg-[#0a1d37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 p-10 rounded-[40px] border border-amber-500/20 bg-amber-500/5">
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" 
                alt="Garantia" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4">Garantia Incondicional de 7 Dias</h3>
              <p className="text-zinc-400 leading-relaxed">
                Você tem 7 dias para testar o MBA. Se por qualquer motivo você sentir que não é para você, basta nos enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem letras miúdas.
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                Curso com chancela oficial, diploma válido em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 Depoimentos */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">O que dizem nossos <span className="text-amber-500">alunos</span></h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Carlos Silva", role: "Gerente de Projetos", text: "A metodologia prática do André mudou minha forma de lidar com a equipe. Hoje tenho muito mais clareza nas decisões." },
              { name: "Mariana Costa", role: "Coordenadora de RH", text: "O networking e as mentorias ao vivo são o grande diferencial. Você não se sente sozinho na jornada." },
              { name: "Roberto Oliveira", role: "Diretor de Operações", text: "Finalmente um MBA que foca no que realmente importa: pessoas e resultados práticos." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex gap-1 text-amber-500 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-zinc-300 italic mb-8">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-xs text-zinc-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔁 Chamada Final */}
      <section className="py-24 bg-amber-500 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-8">Está pronto para se tornar o líder que seu time precisa?</h2>
          <p className="text-xl font-bold mb-12 opacity-80">Matricule-se agora e comece ainda esta semana.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-black text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all"
            >
              Garantir minha vaga agora
            </motion.button>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-6 rounded-2xl font-black text-xl bg-white/20 hover:bg-white/30 transition-all"
            >
              <MessageCircle size={24} />
              Falar com o coordenador
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-black font-bold">L</div>
            <span className="font-bold text-xl tracking-tight">MBA <span className="text-amber-500">Liderança</span></span>
          </div>
          <p className="text-zinc-500 text-sm max-w-md mx-auto mb-10">
            André Souto Mentoria e Treinamentos LTDA. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-8 text-sm text-zinc-400">
            <a href="#" className="hover:text-amber-500 transition-colors">Termos</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
