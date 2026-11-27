# Projeto Advogado — WEB STUDIO

Repositório do primeiro projeto conduzido pelo **WEB STUDIO Agent Team**.

> O ambiente do estúdio está incluído neste repositório: 9 agentes, 10 skills, instruções, prompt mestre e Dev Container para GitHub Codespaces.

## Abrir no Chromebook

1. Entre na sua conta GitHub.
2. [Abra/crie o Codespace desta branch](https://codespaces.new/henriquefelix8920/advogado/tree/studio/advogado?quickstart=1).
3. Aguarde o VS Code Web carregar o projeto.
4. Entre no GitHub Copilot, caso solicitado.
5. No Chat, selecione **Diretor WEB STUDIO**.

Não é necessário instalar Node, Git ou VS Code no Chromebook. O desenvolvimento roda no Codespace.

## Primeiro passo: briefing

Adicione o briefing original em `docs/briefing/` ou anexe o arquivo diretamente ao Chat do Copilot. Consulte `docs/briefing/README.md` antes de compartilhar material confidencial. Preserve uma cópia do original; o Diretor deve distinguir informações confirmadas, hipóteses e lacunas.

Depois, envie ao Diretor:

```text
Diretor WEB STUDIO, leia AGENTS.md, docs/MASTER-PROMPT-WEB-STUDIO-v4.md,
docs/TEAM-MANUAL.md e o briefing em docs/briefing/.
Conduza o discovery completo deste projeto de advocacia.
Não implemente ainda: entregue diagnóstico, estratégia, posicionamento,
estrutura do site, direção visual, copy, arquitetura, motion e pendências.
Não invente informações jurídicas, resultados, clientes ou credenciais.
```

## Estrutura
- `.github/agents/`: Diretor e 8 especialistas.
- `.github/skills/`: 10 skills.
- `.github/instructions/`: instruções persistentes.
- `AGENTS.md`: regras globais.
- `docs/MASTER-PROMPT-WEB-STUDIO-v4.md`: método completo.
- `docs/briefing/`: material do cliente.
- `.devcontainer/`: configuração Codespaces.

## Governança
Trabalhe em branches `studio/<slug>`; nunca faça commit/push diretamente em `main`. Push requer autorização explícita. PR e merge são aprovações separadas. Não contrate serviços pagos, publique dados ou altere produção sem autorização.

## Estado inicial
Estrutura de desenvolvimento criada em `studio/advogado`. Nenhum briefing do cliente foi adicionado ainda e nenhuma aplicação foi implementada.
