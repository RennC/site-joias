# Especificação — Eternize seu Amor

## Objetivo

O configurador será uma página própria que conduz a pessoa por perguntas condicionais, filtra as opções compatíveis, atualiza o preço após cada escolha e gera um resumo para encomenda via WhatsApp.

A ordem técnica poderá mudar, mas todas as perguntas e opções deste documento deverão ser preservadas.

## Regras gerais de preço

- O tipo de joia escolhido define o preço base.
- As escolhas anteriores ao tipo de joia — pessoa ou animal, tipo de animal e forma de eternização — não alteram o preço.
- Todos os detalhes apresentados depois da escolha da joia terão variáveis de preço configuráveis e alterarão o valor final.
- O preço final será o preço base da joia somado aos valores de formato, tamanho e adicionais aplicáveis.
- A pessoa verá o preço atualizado após cada escolha.
- Todos os preços estão **A DEFINIR**.

## Árvore de decisões

### 1. Quem você deseja eternizar?

#### Meu animalzinho

Perguntar: **Qual o animalzinho?**

- Cachorro
- Gato
- Porquinho-da-índia
- Coelho
- Pássaro
- Outro — exibir campo para digitação

Depois perguntar: **De que forma?**

- Pena
- Pelo
- Bigode
- Cinzas
- Cabelo
- Dente

#### Pessoa que amo

Perguntar: **De que forma?**

- Cabelo
- Cinzas
- Bigode
- Dente

### 2. Qual joia você gostaria?

Para **gato ou cachorro**, o briefing lista:

- Pingente
- Bibelô
- Pirâmide
- Busto
- Placa

Para **outro animal** ou **pessoa que amo**:

- Pingente
- Pirâmide
- Placa

Busto deverá ser ocultado em todos os demais caminhos e aparecer somente quando o animal for gato ou cachorro e a forma escolhida for Pelo.

Todas as formas de eternização listadas para animalzinho poderão ser escolhidas para qualquer tipo de animal.

### 3. Personalização por tipo

#### Pingente

Disponível para pessoas e animais.

1. Formato:
   - Coração
   - Redonda
2. Tamanho do Coração:
   - Padrão — 2,9 cm
   - Mini — 1 cm
3. Tamanho da Redonda:
   - Padrão — 3 cm
   - Mini — 1 cm
4. Adicionais:
   - Corrente Veneziana — opcional:
     - Banho de Ouro — acréscimo **A DEFINIR**
     - Banho de Prata — acréscimo **A DEFINIR**
   - Moldura — opcional:
     - Banho de Ouro — acréscimo **A DEFINIR**
     - Banho de Prata — acréscimo **A DEFINIR**
5. Botão Finalizar.

Corrente Veneziana e Moldura poderão ser adicionadas ou não. Será permitido escolher nenhuma, uma ou ambas. Cada combinação de adicional e banho terá seu próprio preço, totalizando quatro valores independentes.

#### Bibelô

Disponível somente para gato ou cachorro.

- Sem personalização adicional informada.
- Botão Finalizar.

#### Pirâmide

Disponível para pessoas e animais.

Tamanho:

- Pequena — 5 cm
- Média — 6 cm
- Grande — 7,5 cm

Após a escolha do tamanho, o fluxo deverá oferecer o botão Finalizar.

#### Busto

Disponível somente quando:

- a pessoa escolheu Meu animalzinho;
- o animal é gato ou cachorro;
- a forma escolhida é Pelo.

Sem personalização adicional informada. Botão Finalizar.

#### Placa

Disponível para todas as pessoas e animais.

Tamanho:

- Média — 6 cm
- Grande — 8 cm

Botão Finalizar.

## Tela final

Sempre que o fluxo chegar a Finalizar, mostrar:

1. valor final da joia;
2. foto genérica do catálogo;
3. aviso visível: **Imagem de como ficará**;
4. tutorial dos próximos passos — texto **A DEFINIR**;
5. alerta de que o frete para envio do material é por conta do cliente;
6. botão **Encomendar via WhatsApp**.

A imagem ficará em `public/images/configurator/`; arquivo **A DEFINIR**.

## Mensagem do WhatsApp

Ao clicar em Encomendar via WhatsApp, abrir uma mensagem pronta, sem emojis, com:

- frase inicial genérica — **A DEFINIR**;
- pessoa ou animal escolhido;
- tipo de animal ou texto de Outro, quando aplicável;
- forma de eternização;
- tipo de joia;
- formato, quando aplicável;
- tamanho, quando aplicável;
- adicionais e banhos, quando aplicáveis;
- valor final.

O número de destino e o texto exato estão **A DEFINIR**.

## Validações

- Não avançar sem resposta obrigatória.
- Exigir texto quando a opção Outro for selecionada.
- Ocultar opções incompatíveis com o caminho atual.
- Limpar escolhas dependentes quando uma resposta anterior mudar.
- Recalcular o preço após toda mudança.
- Não gerar combinações ausentes desta especificação.

## Contagem

O configurador não contará cliques em Finalizar nem pedidos. O único número exibido no site será a quantidade de joias produzidas na página inicial, mantida manualmente e fora do configurador.
