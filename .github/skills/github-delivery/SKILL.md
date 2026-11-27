---
name: github-delivery
description: Controle branches, commits, push, PR e release com autorização explícita.
---

# GitHub Delivery

1. Inspecione `git status`, branch, upstream, remotos e histórico.
2. Use `studio/<slug>` para o projeto.
3. Não commite ou faça push em `main`.
4. Commit local não equivale a publicar no remoto.
5. Peça autorização explícita antes de push.
6. Abrir PR exige autorização para publicar a branch; merge exige aprovação separada.
7. Nunca force-push, deploy ou altere produção sem autorização.
8. Verifique diff, arquivos sensíveis e artefatos antes de entregar.
9. Informe SHA, branch, PR e estado real; não alegue sucesso sem retorno do GitHub.
