# ÉLYSÉA Dermal

Site institucional (React + TypeScript + Tailwind, Vite).

    npm install
    npm run dev      # desenvolvimento
    npm run build    # produção (pasta dist/)

## Arquivos que você precisa adicionar
- `public/images/logo-elysea.png`: logo (enquanto não existir, o site mostra o nome em texto).
- `public/favicon.png`: ícone da aba do navegador.

## Onde editar
- `src/config/site.ts`: WhatsApp, Instagram, endereço e mensagem pré-preenchida (campos PENDENTES).
- `src/config/images.ts`: caminhos das fotos (arquivos em `public/images`). Vazio = espaço reservado.
- `src/content/doctor.ts`: textos da doutora (resumo e página completa em `#pamela`).
- `tailwind.config.js`: paleta (navy #172C52, gold #BC9752, sand #DFDBD3).

Sem número de WhatsApp configurado, os botões ficam desativados e o ícone flutuante não aparece.
