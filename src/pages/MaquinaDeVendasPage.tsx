import { useEffect } from 'react';

const TITLE = 'Máquina de vendas | Andre Souto';

const movimentos = [
  {
    nome: 'Gera demanda',
    texto:
      'O tráfego pago coloca a oferta na frente de gente que ainda não está numa lista. O resultado útil não é o clique. É a pessoa que entra numa conversa e segue para a qualificação.',
  },
  {
    nome: 'Prospecta',
    texto:
      'O outbound fala com quem já está numa lista. O disparo feito não é entrega. Quem responde segue para a qualificação.',
  },
  {
    nome: 'Qualifica',
    texto:
      'No inbound, o agente de IA confere perfil, problema e prazo. Quem não cabe sai. Quem cabe chega com o histórico. Passar nessa pré-qualificação não é estar pronto para comprar. No outbound, a resposta segue para eu aplicar o critério. A decisão continua comigo.',
  },
  {
    nome: 'Entrega',
    texto:
      'Eu coloco o lead qualificado na agenda do closer, com horário marcado. Sem horário, essa entrega não aconteceu. A máquina não fecha a venda.',
  },
] as const;

const handoff = [
  'nome',
  'empresa',
  'papel',
  'problema',
  'janela',
  'horário',
  'origem da conversa',
  'o trecho que importa',
] as const;

const conversa = [
  'O perfil de quem está pronto para comprar.',
  'A agenda do closer em que a reunião entra.',
  'O número de WhatsApp Business.',
  'O caminho da lista: a sua ou a que eu gero.',
] as const;

export default function MaquinaDeVendasPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = TITLE;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div id="topo" className="min-h-screen scroll-smooth bg-[#f3efe7] text-[#1c1915]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:bg-[#143f34] focus:px-3 focus:py-2 focus:text-[#f3efe7]"
      >
        Ir para o conteúdo
      </a>

      <header className="sticky top-0 z-20 border-b border-[#e3dcd0] bg-[#f3efe7]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#topo" className="min-w-0">
            <span className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#5c564c]">
              Andre Souto
            </span>
            <span className="font-display text-base font-semibold leading-tight">
              Máquina de vendas
            </span>
          </a>
          <nav aria-label="Nesta página" className="flex items-center gap-5 text-sm">
            <a href="#entregas" className="hidden text-[#5c564c] underline-offset-4 hover:underline md:inline">
              Entregas
            </a>
            <a href="#anda" className="hidden text-[#5c564c] underline-offset-4 hover:underline md:inline">
              Como anda
            </a>
            <a href="#fee" className="hidden text-[#5c564c] underline-offset-4 hover:underline md:inline">
              Fee
            </a>
            <a
              href="#conversa"
              className="inline-flex items-center bg-[#143f34] px-3.5 py-2 text-sm font-medium text-[#f3efe7] hover:bg-[#0f3128] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143f34]"
            >
              Próximo passo
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="mx-auto w-full max-w-5xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#5c564c]">
            Para uma empresa que já tem quem fecha
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            A máquina entrega o lead pronto para comprar e a reunião na agenda do closer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3f3a33] sm:text-xl">
            Esta conversa é sobre a máquina de vendas. Não é um pacote de disparo, de anúncio nem de hora de SDR.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#3f3a33]">
            São três entregas, juntas. A máquina para na reunião marcada. Quem conduz a reunião e fecha a venda é o seu closer.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              'Lead pronto para comprar',
              'Reunião na agenda do closer',
              'Vizus Chat, com o seu acesso',
            ].map((item) => (
              <li key={item} className="border border-[#e3dcd0] bg-[#faf7f2] px-4 py-3 text-sm font-medium">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="entregas" className="scroll-mt-24 border-t border-[#e3dcd0]">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#5c564c]">O que você leva</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Três entregas, juntas.
            </h2>

            <div className="mt-12 grid gap-12">
              <article className="grid gap-4 border-t border-[#e3dcd0] pt-8 md:grid-cols-[8rem_1fr]">
                <p className="font-display text-sm font-semibold text-[#143f34]">01</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">O lead pronto para comprar</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-[#3f3a33]">
                    É a pessoa que cabe no perfil, reconhece o problema com as próprias palavras, tem intenção numa janela combinada e participa da decisão, ou aponta quem participa.
                  </p>
                </div>
              </article>

              <article className="grid gap-4 border-t border-[#e3dcd0] pt-8 md:grid-cols-[8rem_1fr]">
                <p className="font-display text-sm font-semibold text-[#143f34]">02</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">A reunião na agenda do closer</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-[#3f3a33]">
                    Eu coloco esse lead qualificado na agenda, com horário marcado. Sem horário, essa entrega não aconteceu. A agenda em si não faz parte da oferta: o que se marca é o horário.
                  </p>
                  <p className="mt-4 text-sm font-medium">O handoff leva</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {handoff.map((item) => (
                      <li key={item} className="border border-[#e3dcd0] bg-[#faf7f2] px-3 py-1.5 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5c564c]">
                    A origem da conversa é a lista disparada no outbound ou a conversa vinda do inbound, incluindo tráfego pago.
                  </p>
                </div>
              </article>

              <article className="grid gap-4 border-t border-[#e3dcd0] pt-8 md:grid-cols-[8rem_1fr]">
                <p className="font-display text-sm font-semibold text-[#143f34]">03</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">O Vizus Chat</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-[#3f3a33]">
                    A ferramenta de conversa entra como parte da máquina. Você tem acesso para interagir com o seu lead. Nela acontecem o disparo das listas, a conversa que continua depois da resposta e a pré-qualificação do inbound. Não entra função além disso.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="fora" className="scroll-mt-24 border-t border-[#e3dcd0] bg-[#1c1915] text-[#f3efe7]">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#c8bfb2]">O que não entra</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              A máquina não fecha a venda.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e4dcd0]">
              Quem conduz a reunião e fecha é o seu closer.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                'Lista fria',
                'Contato que só respondeu',
                'Clique',
                'Garantia de receita',
                'Cota de leads',
                'Ferramenta de agenda',
              ].map((item) => (
                <li key={item} className="border border-[#3a342c] px-4 py-3 text-sm">
                  Não entra: {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#c8bfb2]">
              Quando o lead não está pronto, ele não é entregue e a reunião não é marcada. A fila de conversas em aberto não é lista de leads nem agenda cheia. Você vê a contagem e os motivos de descarte.
            </p>
          </div>
        </section>

        <section id="anda" className="scroll-mt-24 border-t border-[#e3dcd0]">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#5c564c]">Como a máquina anda</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Demanda, prospecção, qualificação e entrega.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#3f3a33]">
              Os motores são o tráfego pago, o outbound, o inbound e o SDR. Não se contratam separados. Você não contrata um cargo de SDR. Contrata o filtro que decide o que merece ser entregue.
            </p>

            <ol className="mt-10 grid gap-px border border-[#e3dcd0] bg-[#e3dcd0] sm:grid-cols-2">
              {movimentos.map((passo, index) => (
                <li key={passo.nome} className="bg-[#f3efe7] p-5 sm:p-6">
                  <p className="font-display text-sm font-semibold text-[#143f34]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{passo.nome}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3f3a33]">{passo.texto}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 max-w-2xl">
              <h3 className="font-display text-xl font-semibold">O que faz esses motores girarem</h3>
              <p className="mt-3 leading-relaxed text-[#3f3a33]">
                As engrenagens que já têm nome são a experiência, mais de 20 anos em vendas, e a tecnologia: Vizus Chat, API oficial, agente de IA no inbound e Meta. Há lugar para outras. A lista de engrenagens não está fechada.
              </p>
              <p className="mt-3 leading-relaxed text-[#3f3a33]">
                A experiência é a estratégia e a qualificação: o critério de pronto para comprar, a mensagem da lista e o que o agente de IA confere no inbound. O tráfego pago não gira nessa engrenagem.
              </p>
            </div>
          </div>
        </section>

        <section id="whatsapp" className="scroll-mt-24 border-t border-[#e3dcd0]">
          <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#5c564c]">WhatsApp</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                No número que você oferece.
              </h2>
            </div>
            <div className="max-w-xl leading-relaxed text-[#3f3a33]">
              <p>
                O outbound sai no WhatsApp Business, no seu número. O disparo é pela API oficial e só com modelo de mensagem pronto e aprovado pela Meta. Sem esse modelo, o disparo não sai.
              </p>
              <p className="mt-4">
                A resposta volta e a conversa continua dentro do Vizus Chat. Você tem acesso para interagir com o seu lead.
              </p>
            </div>
          </div>
        </section>

        <section id="fee" className="scroll-mt-24 border-t border-[#e3dcd0]">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#5c564c]">Como se paga</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Fee mensal e único. Sem número.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#3f3a33]">
              O valor eu defino depois de conversar com o parceiro que opera o tráfego. Até lá, a proposta não leva número. Não há segunda cobrança por lead aceito nem por reunião. O fee não muda com a quantidade de leads, de reuniões nem de contatos da lista. Reunião devolvida não gera desconto nem cobrança extra.
            </p>

            <div className="mt-10 grid gap-px border border-[#e3dcd0] bg-[#e3dcd0] md:grid-cols-2">
              <div className="bg-[#faf7f2] p-6">
                <h3 className="font-display text-xl font-semibold">Entra no fee</h3>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed">
                  <li>O Vizus Chat</li>
                  <li>O serviço de tráfego pago</li>
                  <li>O meu trabalho</li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[#5c564c]">
                  Isso mantém a máquina acesa o mês inteiro: o disparo no WhatsApp Business, a pré-qualificação do agente no inbound, a revisão em que eu decido quem está pronto para comprar e o ato de colocar esse lead na agenda do closer. A reunião não tem preço à parte.
                </p>
              </div>
              <div className="bg-[#faf7f2] p-6">
                <h3 className="font-display text-xl font-semibold">Fica fora, no seu cartão</h3>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed">
                  <li>A verba de anúncio, dentro da Meta</li>
                  <li>O valor da API e das mensagerias</li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[#5c564c]">
                  Não há valor fechado para a verba, para a API nem para as mensagerias. Nada disso entra no fee.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-semibold">A lista também fica fora do fee</h3>
              <div className="mt-6 grid gap-px border border-[#e3dcd0] bg-[#e3dcd0] md:grid-cols-2">
                <article className="bg-[#f3efe7] p-6">
                  <h4 className="font-display text-lg font-semibold">Se a lista for sua</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#3f3a33]">
                    É um custo à parte, sem cobrança por contato.
                  </p>
                </article>
                <article className="bg-[#f3efe7] p-6">
                  <h4 className="font-display text-lg font-semibold">Se eu gerar a lista</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#3f3a33]">
                    O adicional é por contato conseguido para essa lista. Contato da lista não é lead pronto nem reunião. O valor desse contato não está fixado.
                  </p>
                </article>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5c564c]">
                Lista sem origem clara não entra no disparo.
              </p>
            </div>
          </div>
        </section>

        <section id="papeis" className="scroll-mt-24 border-t border-[#e3dcd0]">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#5c564c]">Quem faz o quê</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Estratégia comigo. Tráfego com o parceiro.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <article>
                <h3 className="font-display text-xl font-semibold">Andre Souto</h3>
                <p className="mt-3 leading-relaxed text-[#3f3a33]">
                  Eu cuido da estratégia e da qualificação dos leads. Também marco a reunião na agenda do closer.
                </p>
              </article>
              <article>
                <h3 className="font-display text-xl font-semibold">Parceiro de tráfego</h3>
                <p className="mt-3 leading-relaxed text-[#3f3a33]">
                  O parceiro opera o tráfego pago. Não há nome, divisão de receita nem outro escopo nesta conversa.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="conversa" className="scroll-mt-24 border-t border-[#e3dcd0] bg-[#143f34] text-[#f3efe7]">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#b7d0c6]">Próximo passo</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Se fizer sentido, a conversa seguinte fecha quatro pontos.
            </h2>
            <ol className="mt-8 grid max-w-2xl gap-3">
              {conversa.map((ponto, index) => (
                <li key={ponto} className="flex gap-4 border border-[#2f6a59] px-4 py-3">
                  <span className="font-display text-sm font-semibold text-[#b7d0c6]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{ponto}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-2xl leading-relaxed text-[#d5ebe3]">
              O valor do fee mensal vem depois da conversa com o parceiro do tráfego. Até lá, a proposta não leva número.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#b7d0c6]">
              Esta página não envia mensagem. Não há formulário.
            </p>
            <p className="mt-10 font-display text-lg font-semibold">Andre Souto</p>
          </div>
        </section>
      </main>
    </div>
  );
}
