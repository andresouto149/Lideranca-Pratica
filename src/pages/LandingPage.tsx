import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, AlertCircle } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const urlParams = new URLSearchParams(window.location.search);

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
      await fetch(ENDPOINT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      navigate('/obrigado');
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setErrorMsg("Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
            <span className="font-display font-bold text-xl tracking-tight">Liderança <span className="text-indigo-600">Prática</span></span>
          </div>
          <button
            onClick={() => scrollTo('inscricao')}
            className="hidden sm:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-all hover:shadow-lg active:scale-95"
          >
            Quero me inscrever
          </button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-200 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Troque este bloco pelo vídeo do André. */}
            <div className="aspect-video rounded-3xl bg-zinc-900 border-8 border-white shadow-2xl flex items-center justify-center px-6 text-center">
              <p className="text-white text-lg sm:text-xl font-medium">[Vídeo do André]</p>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mt-12 mb-6 max-w-3xl">
              Aulas ao vivo de gestão de pessoas e vendas, com André Souto.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 mb-8 max-w-2xl leading-relaxed">
              O mercado de trabalho cobra cada vez mais de quem lidera e de quem vende. Saber conduzir uma equipe, conversar com um cliente, resolver um conflito e fechar um negócio faz diferença no dia a dia e na carreira. Esse conhecimento costuma ser caro e distante. Aqui, não.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('inscricao')}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 transition-all flex items-center justify-center gap-3 group"
              >
                Quero me inscrever
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button
                onClick={() => scrollTo('como-funciona')}
                className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg border border-zinc-200 transition-all"
              >
                Como funciona
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Como funciona</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-6" />
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
              As aulas são ao vivo, pelo Google Meet, uma vez por semana, com duas horas cada. Cada assunto é uma trilha de oito encontros. Os encontros são às segundas, [horário].
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">Trilha 1</p>
              <h3 className="font-display text-2xl font-bold mb-3">Gestão de Pessoas</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">Começa em 15 de fevereiro de 2027. Oito encontros de duas horas.</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">Trilha 2</p>
              <h3 className="font-display text-2xl font-bold mb-3">Vendas</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">Começa em 3 de maio de 2027. Oito encontros de duas horas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-zinc-100 shadow-sm">
              <h2 className="font-display text-3xl font-bold mb-4">Quanto custa</h2>
              <p className="font-display text-5xl sm:text-6xl font-extrabold text-indigo-600 mb-2">R$ 49,90</p>
              <p className="text-lg font-medium text-zinc-700 mb-6">por mês, pago por Pix</p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Não tem contrato nem fidelidade. Você paga o mês e assiste às aulas daquele mês. Se quiser parar, é só não pagar o mês seguinte.
              </p>
            </div>
            <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-zinc-100 shadow-sm">
              <h2 className="font-display text-3xl font-bold mb-4">Para quem é</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Para quem lidera ou quer liderar, para quem vende ou quer vender melhor, e para quem quer se destacar no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 rounded-[40px] p-8 sm:p-12 border border-zinc-100 flex flex-col md:flex-row items-center gap-10">
            <div className="w-64 h-64 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
              <img
                src="/escola-de-gente/andre-souto.jpg"
                alt="André Souto"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Quem ensina</h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  André Souto foi professor universitário no curso de Administração. É mestre em Administração, na área de Gestão de Pessoas, e especialista em Liderança pelos Estados Unidos. Tem mais de 20 anos na área comercial, como diretor comercial e consultor.
                </p>
                <p>
                  Nas aulas, ele leva o que viveu: as equipes que liderou, as vendas que fez e perdeu, os erros e o que aprendeu com eles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inscricao" className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl font-bold mb-3 text-zinc-900">Inscrição</h2>
                <p className="text-zinc-500">
                  Preencha seu nome, e-mail e WhatsApp. Antes da primeira aula do mês, você recebe o Pix. Depois do pagamento, chega por e-mail o link da sala com as datas das aulas daquele mês.
                </p>
              </div>

              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
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
                  ) : "Quero me inscrever"}
                </button>
                <p className="text-center text-xs text-zinc-400 mt-4">
                  Ao se inscrever, você concorda com nossa Política de Privacidade.
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

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
              <a href="/mba" className="text-zinc-400 hover:text-indigo-600 transition-colors font-bold">MBA Liderança</a>
              <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">Termos de Uso</a>
              <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
