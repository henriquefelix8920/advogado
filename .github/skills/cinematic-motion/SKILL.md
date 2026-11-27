---
name: cinematic-motion
description: Planeje motion cinematográfico, transições A/B, scroll-linked motion e microinterações acessíveis.
---

# Cinematic Motion

- Para cada movimento, defina intenção, gatilho, alvo, duração, easing, direção e fallback.
- Considere painéis A/B: seção atual recua/avança em profundidade enquanto a próxima entra pelo topo.
- Use scroll-linked motion com parcimônia; preserve navegação e controle do usuário.
- Prefira transform/opacity; evite layout e paint caros.
- Respeite `prefers-reduced-motion`; o conteúdo deve existir sem animação.
- Evite biblioteca se CSS/WAAPI resolver. Verifique tamanho, licença e manutenção antes de adicionar dependência.
