# Guia de conteúdo

Este guia define onde o conteúdo deverá ser alterado quando a implementação começar. Os caminhos abaixo são a estrutura planejada; ainda não existem arquivos de código do site.

## Produtos e preços

Produtos: `src/data/products.ts`.

Preços: `src/data/pricing.ts`.

Cada produto deverá ter, no mínimo:

- identificador estável;
- nome;
- descrição;
- preço;
- caminho da foto;
- texto alternativo da foto;
- disponibilidade;
- slug, caso existam páginas individuais.

Todos os produtos deverão usar o mesmo modelo de dados e o mesmo layout. Produtos, textos e valores estão **A DEFINIR**.

## Fotos de produtos e conteúdo institucional

- Produtos: `public/images/catalog/`.
- Logo e identidade: `public/images/brand/`.
- Foto da proprietária: `public/images/owner/`.
- Imagem genérica do resultado do configurador: `public/images/configurator/`.

Ao trocar uma imagem, o caminho correspondente também deverá ser conferido no arquivo de dados. Nome de arquivo, formato e dimensões finais estão **A DEFINIR**.

## Feedbacks

- Dados: `src/data/testimonials.ts`.
- Fotos e vídeos: `public/media/feedbacks/`.

Cada item deverá informar o tipo de mídia, caminho, texto do feedback, identificação autorizada da pessoa e texto alternativo ou descrição. Fotos avançarão após cinco segundos; vídeos, quando terminarem.

Os feedbacks e as autorizações de publicação estão **A DEFINIR**.

## Principais Dúvidas

Local planejado: `src/data/faq.ts`.

Ilustrações planejadas: `public/images/faq/`.

Cada item terá uma pergunta e uma resposta curta. O texto deverá caber naturalmente nos balões da conversa entre os dois animais, evitando parágrafos extensos. Perguntas, respostas e personagens estão **A DEFINIR**.

## Parceiros

- Dados: `src/data/partners.ts`.
- Imagens, caso sejam usadas: `public/images/partners/`.

Cada parceiro deverá ter nome e URL do Instagram. Logo, descrição e ordem de exibição serão opcionais conforme o design aprovado. A lista está **A DEFINIR**.

## Dados gerais

Local planejado: `src/data/site.ts`.

Deverá centralizar:

- nome da marca;
- URL do Instagram;
- número do WhatsApp;
- texto Sobre Mim;
- foto da proprietária;
- quantidade de joias produzidas, preenchida manualmente e mantida estática até a próxima alteração;
- textos do rodapé;
- tutorial dos próximos passos;
- aviso sobre frete.

Somente o nome Cambuí Artes e a URL do Instagram estão definidos.

## Configurador

Local planejado: `src/data/configurator.ts`.

Opções, rótulos, imagem genérica e texto da mensagem do WhatsApp deverão ser alterados ali, sem modificar o componente visual. Todos os preços ficarão em `src/data/pricing.ts`. Consulte `CONFIGURATOR_SPEC.md` antes de qualquer mudança.

## Revisão antes de publicar

Confirmar ortografia, preço, disponibilidade, links, caminhos de mídia, textos alternativos e autorização para publicar fotos, vídeos, nomes e depoimentos.
