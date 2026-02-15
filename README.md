# StiveDev — Portfólio

Site de portfólio em Next.js (App Router), TypeScript, Tailwind CSS e Framer Motion.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy no GitHub Pages

O projeto está configurado para **export estático** e deploy via **GitHub Actions**.

### 1. Ativar o GitHub Pages

1. No repositório: **Settings** → **Pages**
2. Em **Source**, escolha **GitHub Actions**
3. Salve

### 2. Formulário de contato (Formspree)

Para o formulário da página **Contato** enviar e-mails no site publicado:

1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário e defina o e-mail de destino (ex.: aristoteles.775@gmail.com)
3. Copie o **Form ID** (aparece na URL: `https://formspree.io/f/XXXXXXXX`)
4. No repositório: **Settings** → **Secrets and variables** → **Actions**
5. Crie um secret: nome `FORMSPREE_ID`, valor = o Form ID (só a parte `XXXXXXXX`)

### 3. Deploy

A cada **push na branch `master`**, o workflow faz o build e publica em:

**https://netocruz1104.github.io/stivedev/**

(Substitua `netocruz1104` pelo seu usuário do GitHub se for diferente.)

---

## Build manual

```bash
npm run build
```

Para GitHub Pages (com basePath):

```bash
GITHUB_PAGES=true npm run build
```

Os arquivos estáticos ficam na pasta `out/`.

## Estrutura

- `src/app/` — Páginas (Home, Sobre, Projetos, Contato)
- `src/components/` — UI, seções, animações
- `src/lib/` — Utilitários

## Licença

Privado / uso pessoal.
