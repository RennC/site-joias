# Constituição de desenvolvimento — Cambuí Artes

## Escopo

Estas regras valem para todo o repositório. Toda pessoa ou agente que analisar, alterar, testar ou revisar o projeto deve segui-las.

## Fontes oficiais e leitura obrigatória

Antes de alterações relevantes, leia `docs/PROJECT_BRIEF.md` e confirme que o trabalho respeita o negócio, o público, o posicionamento e a experiência emocional desejada.

Antes de decisões arquiteturais, leia `docs/ARCHITECTURE.md` e `docs/DECISIONS.md`.

Antes de alterar conteúdo ou sua organização, leia `docs/CONTENT_GUIDE.md`.

Antes de alterar o configurador Eternize seu Amor, leia integralmente `docs/CONFIGURATOR_SPEC.md`.

Antes de declarar uma etapa pronta, confira `docs/ACCEPTANCE_CRITERIA.md`.

Se uma informação da Cambuí Artes não estiver documentada, escreva **A DEFINIR** ou solicite uma decisão. Nunca invente conteúdo, preço, produto, depoimento, parceiro, contato, regra comercial ou característica da marca.

## Arquitetura obrigatória

- Use Astro como base do site e TypeScript para dados, regras e componentes.
- Use React somente onde houver interatividade complexa que justifique seu custo, especialmente no configurador.
- Preserve a geração estática e a compatibilidade integral com GitHub Pages.
- Considere sempre o endereço base do GitHub Pages em rotas, links e caminhos de mídia.
- Não introduza dependência de servidor, banco de dados ou recurso incompatível com hospedagem estática sem decisão arquitetural previamente aprovada e documentada.
- Evite dependências desnecessárias. Antes de adicionar uma biblioteca, confirme que a plataforma ou uma implementação pequena e sustentável não resolve o problema.
- Mantenha dados, regras comerciais, apresentação e comportamento em responsabilidades separadas.
- Atualize `docs/ARCHITECTURE.md` e `docs/DECISIONS.md` sempre que uma decisão arquitetural mudar.

## Dados e regras comerciais

- O catálogo deve ser orientado por dados em `src/data/products.ts`.
- O FAQ deve ser orientado por dados em `src/data/faq.ts`.
- Os feedbacks devem ser orientados por dados em `src/data/feedbacks.ts`.
- Os parceiros devem ser orientados por dados em `src/data/partners.ts`.
- Dados gerais da marca devem ficar em `src/data/site.ts`.
- Regras, opções e preços do configurador devem ficar separados da interface, em `src/data/configurator.ts` e em módulos de domínio tipados quando necessário.
- Nunca espalhe preços dentro de páginas ou componentes.
- Componentes não devem conter preços, contatos, contadores, links comerciais ou outros valores comerciais hardcoded.
- A interface deve consumir dados tipados e não duplicar regras de disponibilidade, compatibilidade ou cálculo.
- Toda alteração comercial deve ser feita em uma única fonte de verdade e refletida na documentação quando mudar uma regra aprovada.

## Experiência, conteúdo e visual

- Priorize mobile desde a primeira decisão de layout e valide progressivamente telas maiores.
- Priorize acessibilidade: HTML semântico, navegação por teclado, foco visível, contraste adequado, textos alternativos e controles compreensíveis.
- Respeite `prefers-reduced-motion` e não faça a compreensão do conteúdo depender de animações.
- Mantenha linguagem emocional, acolhedora, sensível e respeitosa.
- Não use estética agressiva de e-commerce, pressão artificial, urgência falsa, contadores de escassez ou linguagem que explore o luto.
- Preserve consistência visual por meio de design tokens; não espalhe valores visuais arbitrários.
- Mantenha textos curtos e claros, especialmente nos balões do FAQ e nas etapas do configurador.

## Qualidade e testes

- Execute testes proporcionais à alteração antes de declarar uma tarefa concluída.
- Após alterações relevantes em código, dados, configuração, rotas ou dependências, execute `npm run build`.
- Quando existirem testes automatizados aplicáveis, execute-os além do build.
- Verifique os caminhos principais em viewport mobile e desktop quando houver alteração visual ou interativa.
- Valide todos os ramos afetados do configurador quando regras, opções ou preços mudarem.
- Não declare sucesso se testes ou build falharem. Corrija a falha ou informe claramente o bloqueio e seu impacto.
- Mudanças apenas documentais não exigem build, mas exigem revisão de consistência e verificação de links e nomes de arquivos.

## Uso de subagentes

- Sempre que uma tarefa grande puder ser separada com segurança em análise independente, testes ou auditorias, use subagentes.
- Defina para cada subagente um escopo claro, uma entrega verificável e, quando houver edição, a propriedade exclusiva dos arquivos envolvidos.
- Nunca permita que vários subagentes alterem simultaneamente os mesmos arquivos.
- Subagentes podem analisar os mesmos arquivos em paralelo, mas somente um responsável pode editá-los durante a mesma etapa.
- O agente principal deve integrar os resultados, resolver divergências e executar a verificação final do conjunto.

## Fluxo de trabalho e Git

- Antes de editar, confira o estado do repositório e preserve alterações existentes que não pertençam à tarefa.
- Faça mudanças pequenas, coesas e fáceis de revisar.
- Não misture refatoração não solicitada com uma alteração funcional.
- Ao concluir cada etapa aprovada, faça um commit pequeno e descritivo.
- Não inclua em um commit arquivos alheios à etapa.
- Não conecte, publique, faça push, altere o GitHub Pages ou modifique recursos externos sem autorização explícita.
- Nunca reescreva histórico ou descarte alterações do usuário sem autorização explícita.

## Critério de conclusão

Uma tarefa só está concluída quando:

1. respeita o briefing e a arquitetura;
2. mantém conteúdo e regras em suas fontes de dados;
3. atende acessibilidade e comportamento mobile aplicáveis;
4. passou pelos testes e pelo build exigidos;
5. atualizou a documentação afetada;
6. não deixou contradições conhecidas sem registrá-las;
7. foi registrada em commit pequeno e descritivo quando a etapa foi aprovada.
