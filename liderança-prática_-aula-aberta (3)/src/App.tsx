/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Video, 
  Users, 
  ArrowRight, 
  Target, 
  BookOpen, 
  ShieldCheck,
  AlertCircle,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const urlParams = new URLSearchParams(window.location.search);

    // Substitua pela sua URL do Web App após o deploy
    const ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbwpjMcjTduyNjglzbRO1Kx_gaXVkI3rdlnYtGgd_omTGPD3CfyPgEXZ_H7N0XANpZ5BNg/exec";

    const payload = {
      name: formData.get("name"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      honeypot: formData.get("company"),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_content: urlParams.get("utm_content") || "",
      utm_term: urlParams.get("utm_term") || "",
    };

    try {
      // Usamos mode: 'no-cors' pois o Google Apps Script não suporta CORS completo em POST direto do browser
      // sem um proxy, mas o dado chega na planilha normalmente.
      await fetch(ENDPOINT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Como o 'no-cors' não permite ler a resposta, assumimos sucesso se não houver erro de rede
      setFormSubmitted(true);
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setErrorMsg("Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header / Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
            <span className="font-display font-bold text-xl tracking-tight">Liderança <span className="text-indigo-600">Prática</span></span>
          </div>
          <button 
            onClick={scrollToForm}
            className="hidden sm:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-all hover:shadow-lg active:scale-95"
          >
            Garantir minha vaga
          </button>
        </div>
      </nav>

      {/* SEÇÃO 1 — HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-200 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-6 border border-indigo-100 uppercase tracking-wider">
                <Users size={14} /> Aula Ao Vivo Gratuita
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
                Os 3 erros que novos líderes cometem ao assumir uma equipe
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Se você foi promovido a líder e percebeu que ninguém te ensinou a liderar pessoas, essa aula é para você.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <div className="flex items-center gap-3 text-zinc-700 font-medium">
                  <Calendar className="text-indigo-600" size={20} />
                  <span>26 de Março</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                <div className="flex items-center gap-3 text-zinc-700 font-medium">
                  <Clock className="text-indigo-600" size={20} />
                  <span>20:00 (Horário de Brasília)</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                <div className="flex items-center gap-3 text-zinc-700 font-medium">
                  <Users className="text-indigo-600" size={20} />
                  <span>Online e ao vivo</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 transition-all flex items-center justify-center gap-3 group"
              >
                Quero participar da aula
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <p className="mt-4 text-sm text-zinc-500 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                Inscrição 100% gratuita e segura
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Liderança e Gestão" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl mb-1">Aula Exclusiva</p>
                    <p className="text-sm opacity-90">Vagas limitadas para interação ao vivo</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-600 rounded-full -z-10 blur-2xl opacity-40" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-600 rounded-full -z-10 blur-3xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — PARA QUEM É ESSA AULA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Para quem é essa aula?</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users />, text: "Foi promovido a líder recentemente" },
              { icon: <Target />, text: "Sente dificuldade em conduzir sua equipe" },
              { icon: <BookOpen />, text: "Nunca recebeu treinamento para liderar pessoas" },
              { icon: <ShieldCheck />, text: "Quer desenvolver autoridade como gestor" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <p className="font-semibold text-zinc-800 leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — O QUE VOCÊ VAI APRENDER */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-indigo-600/10 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
              O que você vai <span className="text-indigo-400">aprender</span> nessa aula:
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                "O erro nº1 que faz novos líderes perderem autoridade",
                "Por que muitos líderes têm dificuldade em dar feedback",
                "Como conduzir pessoas mesmo sem ter sido preparado para isso"
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 group hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} className="text-white" />
                  </div>
                  <p className="text-lg text-zinc-200 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — QUEM CONDUZ */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] p-8 sm:p-12 shadow-xl border border-zinc-100 flex flex-col md:flex-row items-center gap-10">
            <div className="w-64 h-64 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-indigo-50 shadow-lg">
              <img 
                src="/Foto Andre Oficial.jpeg" 
                alt="André Souto" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-4 uppercase tracking-widest">
                Seu Mentor
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">André Souto</h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Mestre em Gestão de Pessoas e especialista em Liderança pela Universidade de Ohio (EUA). Atua há mais de 20 anos na área de gestão e desenvolvimento de líderes, com experiência prática como diretor comercial e gestor em grandes empresas.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — FORMULÁRIO DE INSCRIÇÃO */}
      <section id="inscricao" className="py-24 bg-indigo-600 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl font-bold mb-3 text-zinc-900">Garanta sua vaga gratuita</h2>
                <p className="text-zinc-500">Preencha os dados abaixo para receber o link da aula.</p>
              </div>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    {/* Honeypot Field */}
                    <input type="text" name="company" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                    <div>
                      <label className="block text-sm font-bold text-zinc-700 mb-2">Nome completo *</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="Como quer ser chamado?"
                        className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-zinc-700 mb-2">WhatsApp (com DDD) *</label>
                      <input 
                        required
                        name="whatsapp"
                        type="tel" 
                        placeholder="(00) 00000-0000"
                        className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-zinc-700 mb-2">E-mail (opcional)</label>
                      <input 
                        name="email"
                        type="email" 
                        placeholder="seu@email.com"
                        className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errorMsg}
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processando...
                        </>
                      ) : "Quero participar da aula gratuita"}
                    </button>
                    <p className="text-center text-xs text-zinc-400 mt-4">
                      Ao se inscrever, você concorda com nossa Política de Privacidade.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">Inscrição Confirmada!</h3>
                    <p className="text-zinc-600 mb-8">Enviamos os detalhes da aula para o seu WhatsApp.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-indigo-600 font-bold hover:underline"
                    >
                      Fazer outra inscrição
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — AVISO DE ESCASSEZ */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-amber-600 font-bold">
              <AlertCircle size={20} />
              <span>Aviso Importante:</span>
            </div>
            <p className="text-zinc-600 font-medium">
              A aula será ao vivo e as vagas são limitadas para garantir interação. Não haverá reprise pública.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs">L</div>
              <span className="font-display font-bold text-lg tracking-tight">Liderança <span className="text-indigo-600">Prática</span></span>
            </div>
            <div className="text-zinc-400 text-sm">
              © 2024 André Souto. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">Termos de Uso</a>
              <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
