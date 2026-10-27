# SPRINT4_PROGRESS.md — JOVI Galeria Inteligente

> Fonte de estado do projeto. Atualizar sempre que um bloco avançar ou uma decisão for tomada.

## Objetivo

Evoluir o projeto da Sprint 3 (dois ZIPs: `SPRINT3_FRONT` + `Sprint-3-Web-Dev`) para atender aos
requisitos técnicos da Sprint 4 (Web Development + Front-End Design, entrega conjunta),
preservando a identidade e a proposta do produto **JOVI — Galeria Inteligente**.

## Decisões de arquitetura (não reverter sem decisão explícita do usuário)

* Base técnica: projeto React do `Sprint-3-Web-Dev` (Vite + React Router + Context API).
* Base de conteúdo/identidade: `SPRINT3_FRONT` (textos, seções, protótipo, paleta de cores).
* Produto final chama-se **JOVI**; "Hello World Corporation" é só o nome da equipe (rodapé/README).
* API: JSON local em `public/data/gallery.json`, consumido via `fetch`. Sem MockAPI/serviço externo.
* Autenticação: demonstrativa, via `localStorage` (já existia no projeto, mantida).
* Sem backend, sem banco de dados, sem Redux/Zustand — fora do escopo acadêmico.
* Protótipo `jovi-prototype.html` (~922 linhas) **mantido como HTML estático**, não convertido para
  componentes React — custo alto, sem ganho de requisito.
* Nenhum `git push`, deploy ou alteração remota deve ser feito sem autorização explícita.

## Estado do ambiente (importante para continuidade)

O sandbox de execução é **efêmero**: o diretório de trabalho (`/home/claude/jovi`) não persiste
entre sessões/turns distintos. Em caso de nova sessão, refazer a extração dos ZIPs originais
(`/mnt/user-data/uploads/SPRINT3_FRONT.zip` e `/mnt/user-data/uploads/Sprint-3-Web-Dev.zip`) e
reconstruir o projeto a partir deste arquivo de progresso + do histórico da conversa.

**Rede bloqueada neste ambiente**: `npm install` falha com erro 403 (proxy de rede desabilitado).
Não é possível rodar `npm run dev` / `npm run build` reais aqui. A validação usada como
alternativa: checagem de sintaxe de todos os `.js`/`.jsx` via `esbuild` (instalado localmente como
dependência do pacote `tsx`) + verificação manual de resolução de imports + validação do JSON.
Isso cobre erros de sintaxe e imports quebrados, mas **não substitui** `npm run build` real nem
teste visual no navegador — isso fica pendente para quando o usuário rodar localmente.

## Blocos concluídos

- [x] **Bloco 1 — Identidade JOVI restaurada**: `data/conteudo.js` reescrito (Solução, Público-Alvo,
      Jornada), `index.html` com título/meta JOVI, Header/Hero/Footer com marca JOVI (Hello World
      Corporation permanece só como crédito de equipe).
- [x] **Bloco 2 — Arquitetura React**: mantida a estrutura existente (`auth/`, `components/`,
      `data/`, `pages/`), acrescentadas `hooks/` e `services/` só para a galeria (sem abstrações
      extras).
- [x] **Bloco 3 — Rotas e autenticação**: `/`, `/login`, `/dashboard` (privada via `ProtectedRoute`)
      mantidas como já estavam — já atendiam ao requisito, só precisaram de ajuste de conteúdo.
- [x] **Bloco 4 — Galeria**: `Gallery.jsx` (recebe `itens` via props) + `GalleryItem.jsx` (recebe
      dados de 1 item via props), 100% apresentacional.
- [x] **Bloco 5 — API local**: `public/data/gallery.json` (9 itens) → `services/galleryApi.js`
      (`fetch`) → `hooks/useGallery.js` (loading/erro/dados) → `DashboardPage.jsx`.
- [x] **Bloco 6 — Busca e filtro**: implementados em `DashboardPage.jsx` via `useState` +
      `useMemo` (busca por título + filtro por disciplina), sobre os dados retornados pelo hook.
- [x] **Bloco 7 — Tailwind**: `@import "tailwindcss"` + tokens de marca via `@theme` em
      `global.css`. Todos os componentes migrados para classes utilitárias. CSS antigo
      (`landing.css`, `dashboard.css`, `login.css`, `prototype.css`) removido após confirmar que
      nada mais os importava.
- [x] **Bloco 8 — Responsividade**: breakpoints `sm:`/`md:`/`lg:` aplicados em todos os componentes
      com layout próprio (grids, header com menu mobile, formulários). Revisão só por código —
      sem teste visual real no navegador (ver limitação de ambiente acima).
- [x] **Bloco 9 — Protótipo existente**: preservado como está em `public/jovi-prototype.html`,
      só referenciado por link a partir de `PrototypeSection.jsx`.
- [x] **Bloco 10 — Documentação**: `README.md` reescrito cobrindo os itens exigidos pelo PDF;
      `INTEGRANTES.TXT` criado (maiúsculo, conforme exigido), com nomes/RMs extraídos do
      `integrantes.txt` original (não inventados).
- [x] **Bloco 11 — Testes possíveis no ambiente**: executados (ver seção de testes no relatório
      da conversa). `npm install`/`build` **não** executados — bloqueados por falta de rede.
- [x] **Bloco 12 — Auditoria final**: ver checklist no relatório enviado ao usuário nesta sessão.

## Pendências

- [ ] Rodar `npm install` + `npm run build` + `npm run dev` **no ambiente real do usuário** (fora
      deste sandbox) para validação final de build e visual.
- [ ] Revisão visual manual (o ambiente não tem navegador/screenshot) — conferir Desktop/Tablet/
      Mobile de verdade antes da banca.
- [ ] Decidir se/quando fazer `git push` e novo deploy na Vercel (aguardando autorização).
- [ ] Opcional: revisar copy do formulário de contato / Hero com a equipe antes da entrega final.

## Arquivos-chave

Ver árvore completa no `README.md`. Resumo do que é novo nesta Sprint 4:
`src/hooks/useGallery.js`, `src/services/galleryApi.js`, `src/components/Gallery.jsx`,
`src/components/GalleryItem.jsx`, `src/components/AudienceSection.jsx`,
`src/components/JourneySection.jsx`, `src/components/ContactSection.jsx`,
`public/data/gallery.json`, `INTEGRANTES.TXT`.
