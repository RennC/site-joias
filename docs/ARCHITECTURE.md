# Arquitetura

## Visão geral

O projeto será um site estático gerado com Astro e publicado no GitHub Pages. A página principal concentrará o conteúdo institucional e o catálogo; o configurador Eternize seu Amor terá uma rota própria.

## Tecnologias

- **Astro:** estrutura, páginas, componentes estáticos e geração do site.
- **TypeScript:** tipos, dados, regras de preço e validação.
- **React:** somente para interatividade complexa. O configurador é o principal candidato; os demais componentes deverão permanecer em Astro ou JavaScript simples quando isso for suficiente.
- **CSS moderno com design tokens:** cores, tipografia, espaços, bordas, sombras e movimentos centralizados em variáveis. Os valores visuais estão **A DEFINIR**.
- **Git e GitHub:** versionamento e repositório remoto.
- **GitHub Pages:** hospedagem dos arquivos estáticos.

## Compatibilidade com GitHub Pages

O projeto não dependerá de servidor próprio durante a navegação. A compilação deverá produzir arquivos estáticos. O endereço base do repositório será configurado no Astro quando o nome do repositório GitHub estiver definido.

Links, rotas e mídias deverão respeitar esse endereço base, inclusive quando o site for hospedado em um subdiretório do domínio `github.io`.

Não haverá contador de cliques em Finalizar nem armazenamento persistente de pedidos. A quantidade de joias produzidas exibida na página inicial será um valor estático e editável em `src/data/site.ts`.

## Estrutura de dados planejada

O conteúdo editável ficará separado dos componentes. A estrutura planejada é:

```text
src/data/products.ts
src/data/pricing.ts
src/data/testimonials.ts
src/data/faq.ts
src/data/partners.ts
src/data/configurator.ts
src/data/site.ts
```

Os tipos TypeScript deverão validar campos obrigatórios e impedir combinações inválidas no configurador. Preços serão valores numéricos em reais e serão formatados apenas na apresentação.

## Estratégia de imagens e vídeos

Arquivos públicos editáveis deverão seguir pastas previsíveis:

```text
public/images/brand/
public/images/owner/
public/images/catalog/
public/images/partners/
public/images/configurator/
public/images/faq/
public/media/feedbacks/
```

Os dados guardarão os caminhos das mídias. Fotos deverão ter texto alternativo; vídeos deverão ter controles e alternativa acessível. Formatos, dimensões, compressão e arquivos finais estão **A DEFINIR**.

## Estratégia de componentes

- Cabeçalho e navegação: Astro, com comportamento responsivo mínimo em JavaScript se necessário.
- Sobre Mim: Astro e animação acionada pela entrada na área visível.
- Catálogo: Astro, gerado a partir dos dados de produtos.
- Carrossel de feedbacks: componente interativo com regra de cinco segundos para imagens e evento de término para vídeos.
- FAQ: Astro com interação leve, salvo necessidade comprovada de estado complexo.
- Configurador: componente React com estado tipado, filtros condicionais e cálculo de preço.
- Parceiros e rodapé: Astro.

## Estratégia de rotas

- `/`: página principal com as áreas Sobre Mim, Catálogo, Feedbacks, Principais Dúvidas, chamada para Eternize seu Amor e Parceiros.
- `/eternize-seu-amor/`: configurador.
- `/catalogo/[slug]/`: rota opcional para detalhes de produtos, a ser adotada quando a quantidade de conteúdo justificar páginas individuais.

As âncoras internas e os nomes finais das rotas deverão ser estáveis e sem acentos. A adoção definitiva de páginas individuais de produto está **A DEFINIR**.

## Estratégia de SEO

- HTML semântico e conteúdo em português do Brasil.
- Título e descrição exclusivos por página.
- URL canônica compatível com o endereço final do GitHub Pages.
- Metadados de compartilhamento social e imagem padrão.
- Sitemap e `robots.txt` gerados para produção.
- Dados estruturados apropriados para organização, produtos e FAQ somente quando todos os dados obrigatórios estiverem disponíveis.
- Textos alternativos e nomes de arquivos descritivos para imagens.

Nome de domínio, descrições finais, palavras-chave, localidade atendida e imagem de compartilhamento estão **A DEFINIR**.
