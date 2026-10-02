/* ========================================================================
   ZONA DE CONFIGURAÇÃO
   Banco de dados estático e configurações da aplicação
======================================================================== */

const configuracoes = {
    contato: {},
    redesSociais: {}
};

const sobreMim = []; // Texto está direto no HTML para SEO

const catalogo = [
    {
        titulo: 'Bibelô',
        descricao: 'Gatinho ou Cachorrinho eternizado.',
        imagem: './assets/bibelo/Screenshot_20260824-145334.Fotos.png'
    },
    {
        titulo: 'Busto Pet',
        descricao: 'Cachorrinho ou Gatinho feito com amor.',
        imagem: './assets/busto-pet/Screenshot_20260824-145823.Fotos.png'
    },
    {
        titulo: 'Chaveiros Afetivos',
        descricao: 'Formatos: Coração, Redondo, Elipse ou Gota.',
        imagem: './assets/chaveiros/Screenshot_20260824-145317.Fotos.png'
    },
    {
        titulo: 'Moldura Afetiva',
        descricao: 'Formatos: Coração, Redonda ou Portal.',
        imagem: './assets/moldura/Screenshot_20260824-145209.Fotos.png'
    },
    {
        titulo: 'Pingente',
        descricao: 'Formatos: Coração, Redondo, Gota com pelinhos e cinzas.',
        imagem: './assets/pingente/Screenshot_20260824-145228.Fotos.png'
    },
    {
        titulo: 'Pirâmide',
        descricao: 'Tamanhos de 5cm, 6cm ou 7cm.',
        imagem: './assets/piramide/Screenshot_20260824-145415.Fotos.png'
    },
    {
        titulo: 'Placa Afetiva',
        descricao: 'Tamanhos de 5cm ou 7cm.',
        imagem: './assets/placa/Screenshot_20260304-132630.Google.png'
    }
];

const feedbacks = [
    { tipo: 'imagem', src: './assets/feedback/Screenshot_20260906-114809.Instagram.png' },
    { tipo: 'imagem', src: './assets/feedback/Screenshot_20260906-114853.Instagram.png' }
];

const DB_DUVIDAS = [
    {
        pergunta: 'Como funciona o envio do material (pelinhos)?',
        resposta: 'Você pode enviar pelos Correios! Após o fechamento, passamos o endereço e as instruções detalhadas de como separar e embalar com segurança.'
    },
    {
        pergunta: 'Quanto tempo demora para ficar pronto?',
        resposta: 'O prazo médio é de 20 a 30 dias úteis após o recebimento do material, pois o processo de secagem e cura da resina é delicado e feito com muito cuidado e respeito.'
    },
    {
        pergunta: 'Como coletar',
        resposta: '<strong>Animais de pelo curto:</strong><ul><li>Colete através da escovação</li><li>Colete através de pequenos puxões na parte de cima do pescoço</li><li>Passe a mão no seu pet do pescoço até o rabo, assim vai juntar bastante pelo também</li><li>Se tiver mais de uma cor lembre de coletar todas</li></ul><br><strong>Animais de pelo longo:</strong><ul><li>Colete através da escovação</li><li>Pegue pequenas mechas do pelo e corte com uma tesoura próximo a pele, pra não ficar marca e se tiver mais cores corte poucos fios por vez, de vários pontos. Sendo assim junta todas as cores</li></ul>'
    },
    {
        pergunta: 'Como enviar',
        resposta: '<ul><li><strong>Pelos longos e cabelos humanos:</strong> Corte uma mecha suficiente para o modelo de joia escolhido, coloque em um pedaço de papel alumínio, dobre e identifique cada embrulho</li><li><strong>Pelos curtos:</strong> Devem ser retirados puxando aos poucos, passando a mão ou na escovação, embrulhar no papel alumínio e identificar. Evite usar fita adesiva para segurar os pelinhos e cabelos</li><li><strong>Cinzas de cremação:</strong> Coloque em um saquinho plástico, daqueles tipo ziplock, bem fechadinho para não vazar</li><li><strong>Cordão umbilical e dente:</strong> Embrulhe em um papel toalha, depois num saquinho bem fechado</li></ul><p>Coloque os embrulhos no envelope e leve aos correios e escolha o envio de sua preferência Pac, sedex ou carta registrada</p>'
    }
];

// ========================================================================
// >>> ALTERE OS VALORES AQUI (VALOR ESTIMADO DAS JOIAS E ADICIONAIS) <<<
// ========================================================================
const DB_PRECOS = {
    basePingente: 150.00,
    baseBibelo: 180.00,
    basePiramide5cm: 200.00,
    baseBusto: 350.00,
    basePlaca5cm: 220.00,
    addCorrenteOuro: 60.00,
    addCorrentePrata: 40.00,
    addMolduraOuro: 45.00,
    addMolduraPrata: 30.00
};
// ========================================================================

const parceiros = [];

/* ========================================================================
   LÓGICA DA APLICAÇÃO
======================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 0. Integração CountAPI (Contador Global de Encomendas)
    const carregarContador = async () => {
        try {
            const resp = await fetch('https://countapi.mileshilliard.com/api/v1/get/cambui_pedidos_v1');
            if (resp.ok) {
                const data = await resp.json();
                const el = document.getElementById('contador-vendas');
                if (el) el.textContent = `${data.value} joias já encomendadas e histórias eternizadas!`;
            }
        } catch (e) {
            console.error("Erro ao carregar contador:", e);
        }
    };
    carregarContador();
    // 1. Cinematic Scroll: Animação via IntersectionObserver
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    }

    // 2. Catálogo: Renderização Dinâmica e Scroll Manual
    const catalogoGrid = document.getElementById('catalogo-grid');
    if (catalogoGrid) {
        catalogo.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = item.imagem;
            img.alt = item.titulo;

            const h3 = document.createElement('h3');
            h3.textContent = item.titulo;

            const p = document.createElement('p');
            p.textContent = item.descricao;

            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(p);

            catalogoGrid.appendChild(card);
        });

        const btnPrev = document.getElementById('cat-prev');
        const btnNext = document.getElementById('cat-next');

        if (btnPrev && btnNext) {
            btnPrev.addEventListener('click', () => {
                if (catalogoGrid.scrollLeft <= 0) {
                    catalogoGrid.scrollLeft = catalogoGrid.scrollWidth;
                } else {
                    catalogoGrid.scrollBy({ left: -320, behavior: 'smooth' });
                }
            });
            btnNext.addEventListener('click', () => {
                if (catalogoGrid.scrollLeft + catalogoGrid.clientWidth >= catalogoGrid.scrollWidth - 10) {
                    catalogoGrid.scrollLeft = 0;
                } else {
                    catalogoGrid.scrollBy({ left: 320, behavior: 'smooth' });
                }
            });
        }
    }

    // 3. Feedbacks: Renderização e Carrossel Automático (3s)
    const track = document.getElementById('feedbacks-track');
    if (track && feedbacks.length > 0) {
        // Renderizar itens
        feedbacks.forEach(fb => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'carousel-item';

            if (fb.tipo === 'imagem') {
                const img = document.createElement('img');
                img.src = fb.src;
                img.alt = 'Feedback de Cliente';
                img.style.width = '100%';
                img.style.maxWidth = '300px';
                img.style.borderRadius = '12px';
                itemDiv.appendChild(img);
            }
            track.appendChild(itemDiv);
        });

        // Lógica do Carrossel Automático
        let currentIndex = 0;
        const totalItems = feedbacks.length;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000);
    }

    // 4. Dúvidas Frequentes: Renderização do Acordeão
    const accordionContainer = document.getElementById('duvidas-container');
    if (accordionContainer) {
        DB_DUVIDAS.forEach((item, index) => {
            const accItem = document.createElement('div');
            accItem.className = 'accordion-item';

            const accHeader = document.createElement('div');
            accHeader.className = 'accordion-header';

            const title = document.createElement('h3');
            title.className = 'accordion-title';
            title.textContent = item.pergunta;

            const icon = document.createElement('div');
            icon.className = 'accordion-icon';
            // Ícone Chevron Down (SVG)
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

            accHeader.appendChild(title);
            accHeader.appendChild(icon);

            const accContent = document.createElement('div');
            accContent.className = 'accordion-content';

            const innerContent = document.createElement('div');
            innerContent.className = 'accordion-content-inner';
            innerContent.innerHTML = item.resposta;

            accContent.appendChild(innerContent);
            accItem.appendChild(accHeader);
            accItem.appendChild(accContent);

            // Lógica de Exclusividade (Abre um, fecha os outros)
            accHeader.addEventListener('click', () => {
                const isActive = accItem.classList.contains('active');

                // Fecha todos
                document.querySelectorAll('.accordion-item').forEach(el => {
                    el.classList.remove('active');
                });

                // Se não estava ativo, abre
                if (!isActive) {
                    accItem.classList.add('active');
                }
            });

            accordionContainer.appendChild(accItem);
        });
    }

    // 5. Máquina de Estados Finitos (FSM) - Formulário Eternize
    // ==========================================================
    // 5. CONFIGURADOR DE PRODUTO MULTI-STEP (WIZARD)
    // ==========================================================

    // Elementos DOM
    const wSteps = document.querySelectorAll('.wizard-step');
    const wProgress = document.getElementById('wizard-progress');
    const wProgressText = document.getElementById('wizard-progress-text');
    const btnVoltar = document.getElementById('btn-voltar');
    const btnAvancar = document.getElementById('btn-avancar');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const precoFinal = document.getElementById('preco-final');

    let currentStep = 1;
    const gridAnimal = document.getElementById('grid-animal');
    const gridMaterial = document.getElementById('grid-material');
    const gridJoia = document.getElementById('grid-joia');
    const gridPersonalizacao = document.getElementById('grid-personalizacao');
    const animalOutroContainer = document.getElementById('outro-animal-container');
    const animalOutroInput = document.getElementById('animal-outro');

    // Aborta se não estiver na página
    if (!document.querySelector('.wizard-container')) return;

    // Estado da Aplicação
    let currentStepIndex = 1;
    const totalSteps = 6;

    let wizardState = {
        sujeito: null, // 'animal' ou 'pessoa'
        animal: null,  // 'cachorro', 'gato', 'outro', etc
        animalOutro: '', // texto customizado
        material: null, // 'pelo', 'cinzas', etc
        joia: null, // 'pingente', 'bibelo', 'busto', 'placa', 'piramide'
        personalizacoes: {} // formato, tamanho, etc
    };

    // DB de Opções 
    const optionsDB = {
        animais: [
            { val: 'cachorro', label: 'Cachorro', emoji: '🐶' },
            { val: 'gato', label: 'Gato', emoji: '🐱' },
            { val: 'porquinho da índia', label: 'porquinho da índia', emoji: '🐹' },
            { val: 'coelho', label: 'Coelho', emoji: '🐰' },
            { val: 'passaro', label: 'Pássaro', emoji: '🐦' },
            { val: 'outro', label: 'Outro', emoji: '🐾' }
        ],
        materiaisAnimal: [
            { val: 'pelo', label: 'Pelinhos', emoji: '✂️' },
            { val: 'cinzas', label: 'Cinzas', emoji: '⚱️' },
            { val: 'dente', label: 'Dentinho', emoji: '🦷' },
            { val: 'pena', label: 'Peninhas', emoji: '🪶' }
        ],
        materiaisPessoa: [
            { val: 'cabelo', label: 'Cabelo', emoji: '💇' },
            { val: 'cinzas', label: 'Cinzas', emoji: '⚱️' },
            { val: 'dente', label: 'Dente', emoji: '🦷' },
            { val: 'cordao', label: 'Cordão Umbilical', emoji: '🧬' }
        ],
        joias: [
            { val: 'pingente', label: 'Pingente', emoji: '📿', basePrice: DB_PRECOS.basePingente },
            { val: 'placa', label: 'Placa Afetiva', emoji: '🖼️', basePrice: DB_PRECOS.basePlaca5cm },
            { val: 'piramide', label: 'Pirâmide', emoji: '🔺', basePrice: DB_PRECOS.basePiramide5cm },
            { val: 'bibelo', label: 'Bibelô', emoji: '🐈', basePrice: DB_PRECOS.baseBibelo },
            { val: 'busto', label: 'Busto', emoji: '🐕', basePrice: DB_PRECOS.baseBusto }
        ]
    };

    // Navegação
    const updateProgress = () => {
        const percent = ((currentStepIndex - 1) / (totalSteps - 1)) * 100;
        wProgress.style.width = `${percent}%`;
        wProgressText.textContent = `Passo ${currentStepIndex} de ${totalSteps}`;
    };

    const navigateTo = (newStep) => {
        // Validação de pulo de etapa (Humano não tem 'Animal')
        if (newStep === 2 && wizardState.sujeito === 'pessoa') {
            newStep = currentStepIndex === 1 ? 3 : 1; // Pula a etapa 2 dependendo da direção
        }

        wSteps.forEach(step => step.classList.remove('active-step'));
        document.getElementById(`step-${newStep}`).classList.add('active-step');

        currentStepIndex = newStep;
        updateProgress();
        renderStepData();
        checkButtonsState();

        // UX: Auto-centralização
        const wizardContainer = document.querySelector('.wizard-container');
        if (wizardContainer) {
            wizardContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    btnAvancar.addEventListener('click', () => {
        if (currentStepIndex < totalSteps) navigateTo(currentStepIndex + 1);
    });

    btnVoltar.addEventListener('click', () => {
        if (currentStepIndex > 1) navigateTo(currentStepIndex - 1);
    });

    const checkButtonsState = () => {
        btnVoltar.style.display = currentStepIndex === 1 ? 'none' : 'block';

        if (currentStepIndex === totalSteps) {
            btnAvancar.style.display = 'none';
            btnWhatsapp.style.display = 'block';
        } else if (currentStepIndex === 5 || (currentStepIndex === 2 && wizardState.animal === 'outro')) {
            btnAvancar.style.display = 'block';
            btnWhatsapp.style.display = 'none';
        } else {
            btnAvancar.style.display = 'none';
            btnWhatsapp.style.display = 'none';
        }

        // Habilita avançar
        let canAdvance = false;
        if (currentStepIndex === 1 && wizardState.sujeito) canAdvance = true;
        if (currentStepIndex === 2 && wizardState.animal) {
            if (wizardState.animal === 'outro' && !animalOutroInput.value.trim()) canAdvance = false;
            else canAdvance = true;
        }
        if (currentStepIndex === 3 && wizardState.material) canAdvance = true;
        if (currentStepIndex === 4 && wizardState.joia) canAdvance = true;
        if (currentStepIndex === 5) canAdvance = true; // Step 5 options are auto-selected on render

        btnAvancar.disabled = !canAdvance;
    };

    // Criador de Cards Genérico
    const createCard = (grupo, obj, isSelected) => {
        const div = document.createElement('div');
        div.className = `option-card ${isSelected ? 'active' : ''}`;
        div.dataset.group = grupo;
        div.dataset.value = obj.val;
        div.innerHTML = `
            <span class="emoji">${obj.emoji}</span>
            <span>${obj.label}</span>
        `;
        div.addEventListener('click', () => handleCardClick(grupo, obj.val));
        return div;
    };

    // Click handler global para cards
    const handleCardClick = (grupo, valor) => {
        wizardState[grupo] = valor;

        // Reset cascata
        if (grupo === 'sujeito') {
            wizardState.animal = null;
            wizardState.material = null;
            wizardState.joia = null;
            wizardState.personalizacoes = {};
        } else if (grupo === 'animal') {
            wizardState.joia = null;
            wizardState.personalizacoes = {};
            if (valor !== 'outro') animalOutroInput.value = '';
        } else if (grupo === 'material') {
            wizardState.joia = null;
            wizardState.personalizacoes = {};
        } else if (grupo === 'joia') {
            wizardState.personalizacoes = {};
        }

        renderStepData(); // Re-renderiza o passo atual para mostrar o `.active`
        checkButtonsState();
        calcularPrecoWizard();

        // UX: Auto-avanço após 400ms se for uma escolha em card e não no input 'outro'
        // Só avança se a etapa estiver concluída
        if (!btnAvancar.disabled && grupo !== 'personalizacoes') {
            // Evitar conflito se o usuário clicar muito rápido
            if (window.wizardTimeout) clearTimeout(window.wizardTimeout);
            window.wizardTimeout = setTimeout(() => {
                if (currentStepIndex < totalSteps) navigateTo(currentStepIndex + 1);
            }, 400);
        }
    };

    // Listener para o input Outro
    if (animalOutroInput) {
        animalOutroInput.addEventListener('input', (e) => {
            wizardState.animalOutro = e.target.value;
            checkButtonsState();
        });
    }

    // Renderização Dinâmica das Etapas
    const renderStepData = () => {
        // Passo 1 (Estático, apenas atualizar CSS ativo)
        if (currentStepIndex === 1) {
            document.querySelectorAll('#grid-sujeito .option-card').forEach(c => {
                c.classList.toggle('active', wizardState.sujeito === c.dataset.value);
            });
        }

        // Passo 2: Animal
        if (currentStepIndex === 2) {
            gridAnimal.innerHTML = '';
            optionsDB.animais.forEach(a => {
                gridAnimal.appendChild(createCard('animal', a, wizardState.animal === a.val));
            });
            animalOutroContainer.classList.toggle('escondida', wizardState.animal !== 'outro');
        }

        // Passo 3: Material
        if (currentStepIndex === 3) {
            gridMaterial.innerHTML = '';
            let lista = wizardState.sujeito === 'pessoa' ? optionsDB.materiaisPessoa : optionsDB.materiaisAnimal;
            
            if (wizardState.sujeito === 'animal') {
                if (wizardState.animal === 'passaro') {
                    lista = lista.filter(m => m.val === 'pena' || m.val === 'cinzas');
                } else {
                    lista = lista.filter(m => m.val !== 'pena');
                }
            }

            lista.forEach(m => {
                gridMaterial.appendChild(createCard('material', m, wizardState.material === m.val));
            });
        }

        // Passo 4: Joia (Com as regras de negócio)
        if (currentStepIndex === 4) {
            gridJoia.innerHTML = '';
            let joiasFiltradas = optionsDB.joias.filter(j => ['pingente', 'placa', 'piramide'].includes(j.val));

            const isCatDog = (wizardState.animal === 'cachorro' || wizardState.animal === 'gato');

            if (wizardState.sujeito === 'animal' && isCatDog) {
                joiasFiltradas.push(optionsDB.joias.find(j => j.val === 'bibelo'));
                if (wizardState.material === 'pelo') {
                    joiasFiltradas.push(optionsDB.joias.find(j => j.val === 'busto'));
                }
            }

            joiasFiltradas.forEach(j => {
                gridJoia.appendChild(createCard('joia', j, wizardState.joia === j.val));
            });
        }

        // Passo 5: Personalização
        if (currentStepIndex === 5) {
            renderPersonalizacao();
        }

        // Passo 6: Resumo Dinâmico
        if (currentStepIndex === 6) {
            const previewContainer = document.getElementById('preview-dinamico');
            if (previewContainer) {
                // Busca a joia selecionada
                const joiaSelecionada = optionsDB.joias.find(j => j.val === wizardState.joia);

                // Mapeia para o objeto no catalogo usando uma heurística (busca substring)
                // Exemplo: 'bibelo' -> 'Bibelô', 'pingente' -> 'Pingente'
                let itemCatalogo = catalogo.find(c => c.titulo.toLowerCase().includes(joiaSelecionada.label.toLowerCase()));

                // Tratamento especial para placa e pirâmide
                if (!itemCatalogo) {
                    if (wizardState.joia === 'piramide') itemCatalogo = catalogo.find(c => c.titulo.toLowerCase().includes('pirâmide'));
                    else if (wizardState.joia === 'placa') itemCatalogo = catalogo.find(c => c.titulo.toLowerCase().includes('placa'));
                }

                const imgSrc = itemCatalogo ? itemCatalogo.imagem : './assets/logo/Screenshot_20260831-145254.Fotos.png';
                const getLabel = (arr, val) => { const o = arr.find(x => x.val === val); return o ? o.label : val; };
                const s = wizardState.sujeito === 'animal' ? `Meu animalzinho (${getLabel(optionsDB.animais, wizardState.animal)}${wizardState.animal === 'outro' ? ' - ' + wizardState.animalOutro : ''})` : 'Pessoa que amo';
                const m = getLabel(wizardState.sujeito === 'pessoa' ? optionsDB.materiaisPessoa : optionsDB.materiaisAnimal, wizardState.material);

                let persDesc = '';
                const p = wizardState.personalizacoes;
                if (wizardState.joia === 'pingente') persDesc = `Formato: ${p.formato} | Tamanho: ${p.tamanho} | Corrente: ${p.corrente} | Moldura: ${p.moldura}`;
                else if (wizardState.joia === 'piramide' || wizardState.joia === 'placa') persDesc = `Tamanho: ${p.tamanho}`;
                else persDesc = 'Sem adicionais.';

                previewContainer.innerHTML = `
                    <img src="${imgSrc}" alt="Preview da Joia">
                    <div class="preview-details">
                        <p><strong>Para quem:</strong> ${s}</p>
                        <p><strong>Material Biológico:</strong> ${m}</p>
                        <p><strong>Sua Joia:</strong> ${joiaSelecionada.label}</p>
                        <p><strong>Detalhes:</strong> ${persDesc}</p>
                    </div>
                `;
            }
        }
    };

    const renderPersonalizacao = () => {
        gridPersonalizacao.innerHTML = '';
        if (!wizardState.joia) return;

        const p = wizardState.joia;

        // Helper para criar "mini" cards de opções (botões toggle)
        const addOptionGroup = (label, propName, options) => {
            const wrap = document.createElement('div');
            wrap.className = 'pers-group';
            wrap.innerHTML = `<h4>${label}</h4>`;
            const grid = document.createElement('div');
            grid.className = 'card-grid';

            options.forEach(opt => {
                // Inicializa com a primeira opção
                if (wizardState.personalizacoes[propName] === undefined && options.indexOf(opt) === 0) {
                    wizardState.personalizacoes[propName] = opt.val;
                }
                const btn = document.createElement('div');
                btn.className = `option-card ${wizardState.personalizacoes[propName] === opt.val ? 'active' : ''}`;
                btn.style.padding = '1rem';
                btn.innerHTML = `<span style="font-weight:bold">${opt.label}</span><span style="font-size:0.85rem;color:#666">${opt.sub || ''}</span>`;
                btn.addEventListener('click', () => {
                    wizardState.personalizacoes[propName] = opt.val;
                    renderPersonalizacao(); // re-render
                    calcularPrecoWizard();
                });
                grid.appendChild(btn);
            });
            wrap.appendChild(grid);
            gridPersonalizacao.appendChild(wrap);
        };

        if (p === 'pingente') {
            addOptionGroup('Formato do Pingente', 'formato', [
                { val: 'Coração', label: 'Coração' }, { val: 'Redondo', label: 'Redondo' }, { val: 'Gota', label: 'Gota' }
            ]);
            addOptionGroup('Tamanho', 'tamanho', [
                { val: 'Padrão', label: 'Padrão (3,5cm)' }, { val: 'Mini', label: 'Mini (2cm)', sub: 'Apenas Gota' }
            ]);
            addOptionGroup('Corrente', 'corrente', [
                { val: 'Nenhuma', label: 'Sem Corrente' },
                { val: 'Prata 925', label: 'Prata 925', sub: '+ R$ 45' },
                { val: 'Ouro', label: 'Banho de Ouro', sub: '+ R$ 55' }
            ]);
            addOptionGroup('Moldura', 'moldura', [
                { val: 'Nenhuma', label: 'Sem Moldura' },
                { val: 'Prata', label: 'Banho de Prata', sub: '+ R$ 35' },
                { val: 'Ouro', label: 'Banho de Ouro', sub: '+ R$ 45' }
            ]);
        } else if (p === 'piramide') {
            addOptionGroup('Tamanho', 'tamanho', [
                { val: '5cm', label: '5 cm' },
                { val: '6cm', label: '6 cm', sub: '+ R$ 50' },
                { val: '7cm', label: '7 cm', sub: '+ R$ 100' }
            ]);
        } else if (p === 'placa') {
            addOptionGroup('Tamanho', 'tamanho', [
                { val: '5cm', label: '5 cm' },
                { val: '7cm', label: '7 cm', sub: '+ R$ 60' }
            ]);
        } else if (p === 'bibelo' || p === 'busto') {
            gridPersonalizacao.innerHTML = '<div class="pers-group"><h4>Nenhuma personalização extra necessária para esta joia.</h4></div>';
        }
        checkButtonsState();
    };

    // Calculadora
    const calcularPrecoWizard = () => {
        let total = 0;
        if (wizardState.joia) {
            const j = optionsDB.joias.find(x => x.val === wizardState.joia);
            if (j) total += j.basePrice;

            const p = wizardState.personalizacoes;
            if (wizardState.joia === 'pingente') {
                if (p.corrente === 'Prata 925') total += DB_PRECOS.addCorrentePrata;
                if (p.corrente === 'Ouro') total += DB_PRECOS.addCorrenteOuro;
                if (p.moldura === 'Prata') total += DB_PRECOS.addMolduraPrata;
                if (p.moldura === 'Ouro') total += DB_PRECOS.addMolduraOuro;
            } else if (wizardState.joia === 'piramide') {
                if (p.tamanho === '6cm') total += 50;
                if (p.tamanho === '7cm') total += 100;
            } else if (wizardState.joia === 'placa') {
                if (p.tamanho === '7cm') total += 60;
            }
        }

        precoFinal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    };

    // Setup dos listeners estáticos
    document.querySelectorAll('#grid-sujeito .option-card').forEach(card => {
        card.addEventListener('click', () => handleCardClick('sujeito', card.dataset.value));
    });

    // Submissão WhatsApp
    btnWhatsapp.addEventListener('click', (e) => {
        e.preventDefault();

        const getLabel = (arr, val) => {
            const o = arr.find(x => x.val === val);
            return o ? o.label : val;
        };

        const s = wizardState.sujeito === 'animal' ? 'Meu animalzinho' : 'Pessoa que amo';
        let a = '';
        if (wizardState.sujeito === 'animal') {
            a = wizardState.animal === 'outro' ? wizardState.animalOutro : getLabel(optionsDB.animais, wizardState.animal);
        }
        const matList = wizardState.sujeito === 'pessoa' ? optionsDB.materiaisPessoa : optionsDB.materiaisAnimal;
        const m = getLabel(matList, wizardState.material);
        const j = getLabel(optionsDB.joias, wizardState.joia);

        let persDesc = '';
        const p = wizardState.personalizacoes;
        if (wizardState.joia === 'pingente') {
            persDesc = `Formato: ${p.formato} | Tamanho: ${p.tamanho} | Corrente: ${p.corrente} | Moldura: ${p.moldura}`;
        } else if (wizardState.joia === 'piramide' || wizardState.joia === 'placa') {
            persDesc = `Tamanho: ${p.tamanho}`;
        }

        let msg = `Ola! Gostaria de fazer uma encomenda. Seguem os dados do meu pedido:\n- Quem desejo eternizar: ${s}\n`;
        if (a) msg += `- Animal: ${a}\n`;
        msg += `- Forma/Material: ${m}\n- Joia: ${j}\n`;
        if (persDesc) msg += `- Personalizacao: ${persDesc}\n`;
        msg += `- Valor estimado: ${precoFinal.textContent}\n\nEstou ciente de que o frete de envio do material e por minha conta. Aguardo contato!`;

        const mensagem_limpa = msg.replace(/[\u1000-\uFFFF]/g, '');
        const encodedMsg = encodeURIComponent(mensagem_limpa);
        const numeroTel = "5511999999999";

        fetch('https://countapi.mileshilliard.com/api/v1/hit/cambui_pedidos_v1').catch(e => console.log('Erro ao computar venda global:', e));
        window.open(`https://wa.me/${numeroTel}?text=${encodedMsg}`, '_blank');
    });

    // Iniciar
    updateProgress();
    checkButtonsState();

    console.log("Cambuí Artes inicializado com sucesso.");
});
