# Decisões técnicas

## Registro

Este documento registra decisões aprovadas e seus motivos. Novas decisões deverão receber o próximo número disponível.

### D-001 — Site estático

**Decisão:** o projeto será um site estático.

**Motivo:** garantir publicação integral no GitHub Pages.

### D-002 — Astro e TypeScript

**Decisão:** Astro será a base e TypeScript será usado para dados, componentes e regras.

**Motivo:** requisitos definidos para o projeto e adequados à geração estática com regras tipadas.

### D-003 — React somente para complexidade real

**Decisão:** React não será a base de toda a interface; será reservado a componentes com estado complexo, principalmente o configurador.

**Motivo:** preservar simplicidade e reduzir JavaScript enviado à pessoa visitante.

### D-004 — CSS moderno com design tokens

**Decisão:** valores visuais serão centralizados em tokens CSS.

**Motivo:** manter consistência e facilitar futuras alterações da identidade visual.

### D-005 — GitHub Pages

**Decisão:** a hospedagem final será o GitHub Pages e todas as rotas e mídias deverão funcionar sob seu endereço base.

**Motivo:** requisito de publicação.

### D-006 — Conteúdo separado da interface

**Decisão:** produtos, feedbacks, FAQ, parceiros, dados gerais e regras do configurador terão arquivos de dados próprios em `src/data/`.

**Motivo:** permitir manutenção sem editar componentes visuais e manter layouts consistentes.

### D-007 — Mídias em pastas previsíveis

**Decisão:** imagens e vídeos editáveis serão organizados por finalidade dentro de `public/`.

**Motivo:** tornar explícito onde substituir fotos e vídeos e permitir referências simples no conteúdo.

### D-008 — Página principal e configurador separado

**Decisão:** as áreas institucionais e de catálogo ficarão na página principal; Eternize seu Amor terá rota própria.

**Motivo:** o briefing pede navegação por áreas e uma página que se atualiza progressivamente para o configurador.

### D-009 — Carrossel orientado pelo tipo de mídia

**Decisão:** fotos permanecem por cinco segundos e vídeos permanecem até o término.

**Motivo:** comportamento definido no briefing.

### D-010 — Pedido iniciado pelo WhatsApp

**Decisão:** o site montará uma mensagem sem emojis com o resumo da configuração e abrirá o WhatsApp; a pessoa confirmará o envio.

**Motivo:** atender ao fluxo de encomenda sem servidor de comércio eletrônico.

### D-011 — Git local antes do remoto

**Decisão:** o histórico foi iniciado localmente na branch `main`; ainda não há remoto.

**Motivo:** a conexão com GitHub foi explicitamente adiada.

### D-012 — Contador manual de joias produzidas

**Decisão:** a página inicial exibirá apenas a quantidade de joias produzidas, definida manualmente em `src/data/site.ts` e mantida estática até uma atualização deliberada.

**Motivo:** não haverá contagem de cliques em Finalizar nem necessidade de armazenamento persistente.

### D-013 — Formação de preço do configurador

**Decisão:** o tipo de joia determina o preço base. Somente os detalhes apresentados a partir dessa escolha alteram o preço; pessoa ou animal, tipo de animal e forma de eternização não acrescentam valor.

**Motivo:** regra comercial definida pela proprietária.

### D-014 — Adicionais independentes do Pingente

**Decisão:** Corrente Veneziana e Moldura são opcionais, podem ser combinadas e usam quatro preços independentes para seus respectivos banhos de Ouro e Prata.

**Motivo:** regra comercial definida pela proprietária.

### D-015 — Fundação de dados e preços

**Decisão:** conteúdo editável ficará em módulos tipados de `src/data/`; `src/data/pricing.ts` será a única fonte de preços, separada dos produtos, das regras e da interface.

**Motivo:** impedir valores comerciais hardcoded e facilitar manutenção segura.

### D-016 — Configuração portátil do GitHub Pages

**Decisão:** `site` e `base` serão recebidos por variáveis de ambiente no build, e o workflow oficial do Astro fornecerá os valores do repositório no GitHub. O workflow usará a raiz no caso especial `<proprietário>.github.io` e o nome do repositório nos demais casos. Um futuro domínio próprio exigirá revisão dessa configuração.

**Motivo:** permitir desenvolvimento local na raiz e publicação estática em um subdiretório do GitHub Pages sem inventar o endereço final.

## Decisões pendentes

Permanecem **A DEFINIR**:

- identidade visual concreta baseada no Instagram;
- conteúdo, preços e arquivos de mídia;
- detalhes opcionais das páginas individuais de produto;
- valor inicial da quantidade de joias produzidas;
- número e texto da mensagem do WhatsApp;
- domínio e metadados finais de SEO.
