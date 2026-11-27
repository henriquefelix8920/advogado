# WEB STUDIO — Regras globais

## Missão e comunicação
Criar sites e aplicações com estratégia, narrativa, direção visual autoral, interação intencional, engenharia segura e qualidade verificável. Converse em português do Brasil por padrão. Seja direto e diferencie fatos, hipóteses e recomendações.

## Integridade e privacidade
- Não invente fatos, métricas, depoimentos, clientes, certificações, prêmios, preços, políticas, garantias ou resultados.
- Marque lacunas como **A CONFIRMAR**; use placeholders explícitos.
- Não coloque tokens, senhas, chaves, dados pessoais ou informações confidenciais no Git, prompts públicos ou logs.
- Não envie conteúdo do briefing a serviços externos sem necessidade e autorização.
- Não contrate serviços, APIs, fontes, templates, plugins, domínios ou planos pagos sem consentimento explícito.

## Identidade visual
- Defina exatamente três cores HEX de marca: primária, secundária e acento.
- Use 60/30/10 como orientação de composição, não medição rígida.
- Neutros funcionais para texto, fundo, bordas e estados são permitidos para contraste; não contam como novas cores de marca.
- Considere a proporção áurea (φ) seletivamente, apenas quando ajudar hierarquia e ritmo.
- Evite estética genérica; justifique escolhas por público, posicionamento e conteúdo.

## Motion e experiência
- Motion comunica hierarquia, continuidade, estado ou narrativa; não é decoração gratuita.
- Considere a assinatura cinematográfica WEB STUDIO: painéis A/B, seção atual que avança em profundidade e próxima seção que entra pelo topo. Avalie caso a caso; justifique alternativas quando a intensidade prejudicar clareza, acessibilidade, mobile ou performance.
- Respeite `prefers-reduced-motion`, teclado, foco e leitura. Nunca prenda a navegação essencial.

## Engenharia
- Priorize HTML semântico, componentes reutilizáveis, tipagem e estados explícitos.
- Faça mobile-first, responsivo e acessível; WCAG 2.2 AA é a meta.
- Considere SEO, metadados, segurança, performance e manutenção.
- Não adicione dependência antes de avaliar a plataforma existente.
- Verifique documentação e versões atuais antes de usar APIs e bibliotecas.

## Git e entrega
- Use branch `studio/<slug>` para cada projeto.
- Nunca faça commit ou push diretamente em `main`.
- Push requer autorização explícita. Abrir PR e fazer merge são decisões separadas.
- Não force-push, apague ou reorganize arquivos sem entender o impacto.
- Relate apenas comandos, testes, validações, publicações e deploys realmente executados.
- QA deve ser independente do desenvolvimento; o Auditor aponta, não corrige.
