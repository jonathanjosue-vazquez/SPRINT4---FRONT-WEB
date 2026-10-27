# JOVI — Galeria Inteligente (Sprint 4)

Projeto acadêmico desenvolvido para o **Challenge FIAP 2026 — JOVI Smartphone**, nas disciplinas
de **Front-End Design** e **Web Development** (entrega conjunta da Sprint 4).

A JOVI propõe repensar a experiência da câmera do smartphone: em vez de fotos de aula perdidas
na galeria pessoal, a câmera reconhece o contexto (quadro, caderno, slide) e organiza tudo
automaticamente em uma **Galeria Inteligente**, separada por disciplina.

Este repositório é a evolução direta do projeto entregue na Sprint 3 (`SPRINT3_FRONT` +
`Sprint-3-Web-Dev`): manteve a identidade visual, o conteúdo e o protótipo originais, e evoluiu a
base técnica para atender aos requisitos da Sprint 4.

## O que mudou na Sprint 4

* Landing page migrada integralmente para componentes React (antes, parte do conteúdo vivia só no
  HTML estático da Sprint 3).
* Tailwind CSS ativado e utilizado de fato em todos os componentes (na Sprint 3 estava instalado,
  mas não conectado).
* Nova **Galeria Inteligente** na área privada (`/dashboard`), com busca por título e filtro por
  disciplina.
* Consumo de uma API própria simples: um arquivo JSON local (`public/data/gallery.json`),
  acessado via `fetch` através de um service e de um hook customizado.
* Seções "Público-Alvo" e "Galeria" (jornada de uso), que existiam apenas no HTML estático da
  Sprint 3, foram recriadas como componentes React.

## Tecnologias

* React 19
* React Router 7
* Vite 7
* Tailwind CSS 4
* JavaScript (JSX)
* `localStorage` (sessão demonstrativa)
* `fetch` + JSON local (API própria mockada)

## Como instalar e executar

```bash
npm install
npm run dev
```

Para gerar e visualizar a versão de produção:

```bash
npm run build
npm run preview
```

> Não há backend/servidor adicional: a aplicação é 100% front-end. Os "dados da API" vêm de um
> arquivo estático (`public/data/gallery.json`), servido pelo próprio Vite como qualquer outro
> arquivo público — não é necessário subir nenhum processo além do `npm run dev`.

## Rotas

| Rota | Tipo | Conteúdo |
| --- | --- | --- |
| `/` | Pública | Landing page da JOVI (Hero, Solução, Público-Alvo, Galeria/Jornada, Protótipo, Contato, Equipe) |
| `/login` | Pública | Autenticação demonstrativa |
| `/dashboard` | **Privada** (via `ProtectedRoute`) | Galeria Inteligente do usuário, com busca e filtro |

## Usuários de teste

A autenticação é **somente demonstrativa**, feita com `localStorage`, e não deve ser usada em
produção.

| Usuário | Senha |
| --- | --- |
| `admin` | `123` |
| `joao` | `abc` |
| `maria` | `456` |

## Galeria e API local

Os itens exibidos em `/dashboard` vêm de `public/data/gallery.json` (9 capturas de exemplo:
título, disciplina, tipo e data). O fluxo de dados segue esta separação de responsabilidades:

```
public/data/gallery.json         → dados (fonte substituível por qualquer API no futuro)
src/services/galleryApi.js       → busca os dados via fetch
src/hooks/useGallery.js          → custom hook: guarda itens, loading e erro em estado
src/pages/DashboardPage.jsx      → aplica busca/filtro e decide o que exibir
src/components/Gallery.jsx       → recebe a lista via props e renderiza o grid
src/components/GalleryItem.jsx   → recebe 1 item via props e renderiza o card
```

## Arquitetura do projeto

```text
src/
├── App.jsx                  # define as rotas (pública/privada)
├── main.jsx                 # providers (Router, AuthProvider) + estilos globais
├── auth/
│   ├── AuthContext.jsx      # Context + hook useAuth() (login/logout/sessão)
│   └── storage.js           # persistência da sessão em localStorage
├── hooks/
│   └── useGallery.js        # custom hook: carrega os itens da galeria
├── services/
│   └── galleryApi.js        # fetch do JSON local da galeria
├── data/
│   ├── conteudo.js          # textos da landing (Solução, Público-Alvo, Jornada)
│   └── equipe.js             # integrantes exibidos no rodapé
├── components/
│   ├── Header.jsx, Footer.jsx, Hero.jsx
│   ├── FeatureSection.jsx    # usado para "A Solução"
│   ├── AudienceSection.jsx   # "Público-Alvo"
│   ├── JourneySection.jsx    # jornada de uso com as 5 telas do protótipo
│   ├── PrototypeSection.jsx  # link para o protótipo interativo (jovi-prototype.html)
│   ├── ContactSection.jsx    # formulário de contato (estático, sem backend)
│   ├── TeamSection.jsx       # equipe (usado no Footer)
│   ├── ProtectedRoute.jsx    # guarda de rota privada
│   ├── Gallery.jsx           # grid da galeria (recebe itens via props)
│   └── GalleryItem.jsx       # card de um item da galeria (recebe dados via props)
└── pages/
    ├── LandingPage.jsx
    ├── LoginPage.jsx
    └── DashboardPage.jsx      # área privada: Galeria Inteligente + busca/filtro
```

### Protótipo interativo

`public/jovi-prototype.html` é o protótipo mobile interativo herdado da Sprint 3 (câmera
contextual + galeria), mantido como página HTML independente e acessado por um link a partir da
seção "Protótipo JOVI" na landing page. Ele não foi reescrito em React: reescrever ~900 linhas de
um protótipo já funcional, só para "usar React", não traria nenhum ganho de requisito e
aumentaria bastante o risco de regressão visual.

## Uso de Inteligência Artificial no desenvolvimento

O Claude (Anthropic) foi utilizado como ferramenta de apoio ao longo da evolução da Sprint 3 para
a Sprint 4, especificamente para:

* Auditar os dois projetos herdados da Sprint 3 (landing estática e app React) e identificar
  divergências de conteúdo e identidade entre eles.
* Apoiar a migração de CSS puro para Tailwind CSS, preservando a paleta e a tipografia originais
  da JOVI.
* Implementar a Galeria Inteligente (service, custom hook, componentes de apresentação) seguindo
  o padrão de separação entre dados, lógica e visual já usado no projeto (mesmo padrão do
  `AuthContext`).
* Revisar responsividade, nomes de variáveis e organização de pastas.

Todas as decisões de arquitetura, o conteúdo final e a revisão do código foram validados pela
equipe responsável pelo projeto.

## Observações

* Não há backend ou banco de dados — tanto a autenticação quanto a galeria usam armazenamento e
  dados locais, para fins estritamente acadêmicos.
* O `vercel.json` mantém o fallback de rotas necessário para o React Router funcionar em
  produção.
* O formulário de contato é estático (sem envio real).

## Deploy

* **Repositório (Sprint 3):** https://github.com/nicolasprestelo/Sprint-3-Web-Dev
* **Deploy Vercel (Sprint 3):** https://sprint-3-web-dev-hello-world.vercel.app/

A Sprint 4 ainda não foi publicada/redeployada — isso será feito mediante autorização explícita
da equipe, atualizando este link quando o deploy for realizado.

## Equipe

Os integrantes estão listados em `INTEGRANTES.TXT` e em `src/data/equipe.js` (renderizados pelo
componente `TeamSection`, no rodapé da landing page).

---
Projeto acadêmico — Challenge JOVI Smartphone, FIAP 2026 — desenvolvido por **Hello World Corporation**.
