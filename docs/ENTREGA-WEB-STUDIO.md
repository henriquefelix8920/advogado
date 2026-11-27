# Entrega WEB STUDIO — Advocacia Criminal

## Síntese
Versão institucional estática, responsiva e editorial para revisão do responsável. A página inicial organiza as seções de escritório, profissional/equipe de apoio, áreas, conteúdos, FAQ, contato/localização e privacidade. Foram criadas oito páginas HTML individuais para as frentes criminais, além de explicações expansíveis na página inicial.

## Fatos extraídos do briefing
- Atuação declarada: Direito Criminal; Direito Penal Econômico como subárea complementar.
- Região informada: São Paulo/SP e região metropolitana; atendimento remoto nacional, inclusive perante Tribunais Superiores quando aplicável.
- Serviços prioritários: plantão criminal 24h, inquérito policial, defesa em ação penal, habeas corpus e recursos, Tribunal do Júri, execução penal e revisão criminal.
- Público: pessoas físicas, empresas, empreendedores, profissionais liberais e famílias.
- Objetivos: apresentar o escritório, explicar serviços, facilitar contato, publicar informação jurídica e fortalecer presença local.
- O briefing assinala nome, OAB, endereço e contatos como fictícios ou sujeitos à confirmação.

## Hipóteses e decisões
- Conceito: “clareza para decidir; técnica para defender”, com estética editorial inspirada em arquitetura e linhas de precisão, sem imagens apelativas.
- Três cores de marca: primária #101D2C (azul-noite), secundária #F3EFE6 (creme), acento #B18A4A (dourado).
- Tipografia: Manrope para títulos e DM Sans para leitura; fontes externas podem ser substituídas por fontes locais se a política de privacidade exigir.
- Movimento: revelação discreta de seções por opacidade e deslocamento vertical. A transição cinematográfica A/B não foi usada porque poderia competir com a leitura de conteúdo jurídico e a navegação em urgência. Respeita prefers-reduced-motion.
- Arquitetura: HTML, CSS e JavaScript nativos, sem dependências ou serviços pagos. Conteúdo estático adequado a um site institucional simples; um CMS ou painel editorial exigirá decisão e implementação futuras.

## Funcionalidades
- Navegação responsiva com menu móvel acessível.
- Seções expansíveis para áreas e artigos.
- FAQ com disclosure nativo.
- Formulário com validação nativa e cópia local da mensagem; nenhum dado é enviado ou armazenado.
- Política preliminar de privacidade e aviso persistente de revisão.
- Metadados básicos, Open Graph e JSON-LD institucional sem endereço ou OAB fictícios.
- Links de navegação por âncora e foco visível.\n- Oito páginas individuais de áreas criminais com metadados próprios e navegação responsiva.

## Pendências obrigatórias antes da publicação
1. Confirmar nome profissional/razão social e inscrição OAB/UF em fonte documental.
2. Confirmar telefone, WhatsApp, e-mail e redes sociais; não usar os dados fictícios do briefing.
3. Confirmar endereço profissional e autorização de divulgação; só então inserir mapa.
4. Validar biografia, fotografia autorizada, equipe, formação, títulos, docência e publicações.
5. Confirmar cobertura, escala, número e protocolo do plantão 24h.
6. Revisar os textos informativos e a política de privacidade com o advogado responsável.
7. Definir controlador, base legal, canal de titulares, retenção, hospedagem e mecanismo de envio do formulário.
8. Definir domínio e hospedagem. Não houve deploy, compra ou alteração de DNS.
9. Avaliar se a página precisa de CMS para artigos; nesta versão os conteúdos são estáticos.
10. Revisar publicidade profissional conforme normas vigentes da OAB e orientações da Seccional paulista antes da publicação.

## Equipe WEB STUDIO — contribuições
1. Diretor: consolidou briefing, estratégia, escopo e entrega.
2. Estrategista: definiu públicos, proposta, jornada e prioridade de contato.
3. Arte & UX: desenhou identidade editorial, hierarquia e experiência responsiva.
4. Copywriter: redigiu textos institucionais, artigos preliminares, FAQ e microcopy.
5. Arquiteto Web: escolheu arquitetura estática, sem dependências e sem coleta remota.
6. Motion: especificou movimento sutil com fallback de movimento reduzido.
7. Desenvolvedor: implementou páginas/seções e interações nativas.
8. Auditor QA: revisão independente documentada abaixo; não atuou como editor.
9. GitHub: organizou alterações na branch de trabalho e registrou commit quando efetivado.

## QA — revisão independente por checklist
- Conteúdo e integridade: alerta de versão de revisão, credenciais e endereço fictícios não apresentados como dados validados; sem depoimentos, casos, resultados ou promessas.
- Responsividade: breakpoints para telas até 700px e 900px; inspeção estática de regras mobile-first. Teste em dispositivos reais não executado.
- Acessibilidade: landmarks semânticos, skip link, labels (incluindo checkbox associado por aninhamento), foco visível, aria-expanded, live region e controles nativos. Contraste do texto de destaque sobre creme verificado por cálculo (6,20:1); contraste do texto escuro sobre dourado (5,35:1). Auditoria automatizada WCAG não executada.
- Movimento: respeita prefers-reduced-motion; não bloqueia scroll.
- Segurança e privacidade: sem backend, cookies de analytics, armazenamento ou upload; formulário apenas copia texto localmente. A conexão externa de fontes Google deve ser revista para publicação.
- SEO: title, description, Open Graph, headings e JSON-LD básico. Sitemap não incluído porque o domínio ainda não foi confirmado.
- Links e formulários: links internos revisados por inspeção de código; formulário não transmite dados e informa essa limitação.
- Build e runtime: sem etapa de build/dependências. Não foi possível executar navegador/servidor nesta sessão; verificação visual e console permanecem pendentes.

## Limitações
- Não há CMS, banco de dados, integração de WhatsApp/e-mail, endpoint de formulário, mapa, analytics ou painel administrativo.
- Não foram fornecidas imagens profissionais utilizáveis nem logotipo em arquivo; foi criada uma assinatura tipográfica provisória e ilustração geométrica original.
- O site está em estado de revisão e não deve ser publicado antes de resolver as pendências acima.
