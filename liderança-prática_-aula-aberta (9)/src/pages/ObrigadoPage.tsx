import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, ArrowRight, Calendar, Clock, Video } from 'lucide-react';

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-[40px] p-8 sm:p-16 shadow-2xl border border-zinc-100 text-center"
      >
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
          Inscrição Confirmada!
        </h1>
        
        <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
          Parabéns por dar esse passo. Agora você faz parte do grupo seleto de líderes que buscam a excelência.
        </p>

        <div className="bg-indigo-50 rounded-3xl p-8 mb-10 text-left border border-indigo-100">
          <h2 className="font-bold text-indigo-900 mb-6 flex items-center gap-2">
            <Calendar size={20} /> Reserve na sua agenda:
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-zinc-700">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Data</p>
                <p className="font-bold">26 de Março</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-zinc-700">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Horário</p>
                <p className="font-bold">20:00 (Brasília)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-zinc-700">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                <Video size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Local</p>
                <p className="font-bold">Online (Link enviado no WhatsApp)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-zinc-800">Próximo passo obrigatório:</p>
          <a 
            href="https://chat.whatsapp.com/GxhMS1lyHUU45n0iRqwi3l?mode=hqctcla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-emerald-100 transition-all active:scale-[0.98]"
          >
            <MessageCircle size={28} />
            Entrar no Grupo VIP
          </a>
          <p className="text-sm text-zinc-400">
            Não enviamos spam. Apenas o link da aula e materiais exclusivos.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 text-zinc-400 text-sm flex items-center gap-6">
        <a href="/" className="hover:text-indigo-600 transition-colors">Voltar para o início</a>
        <span>•</span>
        <p>© 2024 André Souto</p>
      </div>
    </div>
  );
}
