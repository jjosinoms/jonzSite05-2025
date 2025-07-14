// Dados do portfólio
const experienciaData = [
    {
        empresa: "Maxxi Automação",
        cargo: "Auxiliar de Informática",
        periodo: "04/2025 - Atual",
        descricao: [
            "Instalação e configuração de balanças comerciais (Prix 5 Plus, Prix 4 Duo, Prix 4 Uno, Prix 3, Thunder)",
            "Suporte técnico e configuração de rede para integração com software",
            "Diagnóstico e resolução de problemas técnicos"
        ]
    },
    {
        empresa: "Datamétrica",
        cargo: "Operador de Telemarketing",
        periodo: "03/2025 - 04/2025",
        descricao: [
            "Atendimento receptivo a clientes do setor bancário",
            "Suporte e esclarecimento de dúvidas sobre serviços financeiros",
            "Resolução de demandas e encaminhamento para setores responsáveis"
        ]
    },
    {
        empresa: "Andreia Seguros",
        cargo: "Desenvolvedor Freelancer",
        periodo: "12/2024 - 01/2025",
        descricao: [
            "Desenvolvimento de landing pages otimizadas com Node.js e Angular",
            "Implementação de SEO avançado, aumentando o tráfego em 25%",
            "Integração de APIs para automação de processos"
        ]
    },
    {
        empresa: "Valeria Psi",
        cargo: "Desenvolvedor Freelancer",
        periodo: "11/2024 - 12/2024",
        descricao: [
            "Criação de landing page responsiva e otimizada para velocidade",
            "Melhorias na experiência do usuário e maior retenção no site"
        ]
    },
    {
        empresa: "BZ Fisio Pélvica",
        cargo: "Desenvolvedor Freelancer",
        periodo: "01/2021 - 02/2021",
        descricao: [
            "Desenvolvimento e manutenção de sistemas utilizando Next.js e SQL",
            "Implementação de soluções web para aprimoramento da experiência do usuário"
        ]
    },
    {
        empresa: "Impacto Inteligência Artificial",
        cargo: "Estagiário",
        periodo: "09/2020 - 01/2021",
        descricao: [
            "Automação de processos, reduzindo custos operacionais em 15%",
            "Desenvolvimento de sistemas para melhoria da eficiência operacional"
        ]
    },
    {
        empresa: "Construmet Soluções Metálicas de Engenharia",
        cargo: "Desenvolvedor Freelancer",
        periodo: "01/2020 - 06/2020",
        descricao: [
            "Desenvolvimento de site profissional para a empresa",
            "Implementação de sistema de login com OAuth2 e Django All-Auth",
            "Autenticação via Google, Facebook e servidor próprio"
        ]
    },
    {
        empresa: "Radix Engenharia e Software",
        cargo: "Estagiário",
        periodo: "08/2018 - 12/2019",
        descricao: [
            "Participação na elaboração de projetos para grandes empresas",
            "Utilização de .NET Framework, .NET Core, Angular, PHP, Azure"
        ]
    },
    {
        empresa: "WJ Informática",
        cargo: "Estagiário",
        periodo: "11/2017 - 05/2018",
        descricao: [
            "Auxílio no suporte técnico e desenvolvimento de sistemas",
            "Conhecimento adquirido em Python, Django, Groovy e Grails"
        ]
    }
];

const projetosData = [
    {
        nome: "SegurMais",
        descricao: "Sistema em desenvolvimento para gestão de corretores",
        tecnologias: ["Node.js", "Angular", "MongoDB"],
        imagem: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", // escritório/negócios
        link: "https://github.com/jjosinoms/SegurMais"
    },
    {
        nome: "Gestão Fornecedores",
        descricao: "Sistema para gerenciamento de projetos com fornecedores",
        tecnologias: ["Next.js", "TypeScript", "PostgreSQL"],
        imagem: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // projetos/planejamento
        link: "https://github.com/jjosinoms/FGV"
    },
    {
        nome: "Controle Financeiro",
        descricao: "Sistema de gerenciamento de finanças pessoais",
        tecnologias: ["React", "Node.js", "MongoDB"],
        imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80", // finanças
        link: "https://github.com/jjosinoms/ControleFinanceiro"
    },
    {
        nome: "Agendamento",
        descricao: "Aplicação para agendamento de compromissos e eventos, com interface intuitiva e integração com calendário.",
        tecnologias: ["Angular", "Node.js", "MongoDB"],
        imagem: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // calendário
        link: "https://github.com/jjosinoms/Agendamento"
    },
    {
        nome: "VTAngular",
        descricao: "Projeto de gestão de vendas e tarefas, desenvolvido com Angular para o front-end e Node.js no back-end.",
        tecnologias: ["Angular", "Node.js", "Express"],
        imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // vendas/tarefas
        link: "https://github.com/jjosinoms/VTAngular"
    },
    {
        nome: "Diario de Bordo",
        descricao: "Aplicação para registro e acompanhamento de atividades diárias, facilitando o controle de tarefas e produtividade.",
        tecnologias: ["React", "Node.js", "MongoDB"],
        imagem: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // diário/anotações
        link: "https://github.com/jjosinoms/DiarioDeBordo"
    }
];

const habilidadesData = {
    tecnicas: [
        { nome: "Front-end", nivel: 90 },
        { nome: "Back-end", nivel: 85 },
        { nome: "Banco de Dados", nivel: 80 },
        { nome: "DevOps", nivel: 75 }
    ],
    soft: [
        {
            nome: "Comunicação Eficaz",
            descricao: "Experiência em atendimento ao cliente e suporte técnico, com habilidade para transmitir informações técnicas de forma clara e objetiva."
        },
        {
            nome: "Trabalho em Equipe",
            descricao: "Colaboração efetiva em projetos multidisciplinares, contribuindo com ideias e auxiliando colegas para alcançar objetivos comuns."
        },
        {
            nome: "Resolução de Problemas",
            descricao: "Capacidade analítica para identificar e resolver problemas técnicos, com foco em soluções práticas e eficientes."
        },
        {
            nome: "Gestão de Tempo",
            descricao: "Organização eficiente de tarefas e prioridades, garantindo entregas dentro dos prazos estabelecidos."
        },
        {
            nome: "Adaptabilidade",
            descricao: "Flexibilidade para trabalhar com diferentes tecnologias e metodologias, adaptando-se rapidamente a novos ambientes e desafios."
        },
        {
            nome: "Proatividade",
            descricao: "Iniciativa para identificar oportunidades de melhoria e implementar soluções inovadoras, sempre buscando agregar valor aos projetos."
        }
    ]
};

// Remover criação dinâmica de experiência e projetos, pois já estão no HTML
// Função para criar elementos de experiência com Material Design
// function criarExperiencia() {
//     const container = document.querySelector('#experiencia .space-y-8');
//     experienciaData.forEach((exp, index) => {
//         const expElement = document.createElement('div');
//         expElement.className = 'mat-card bg-gray-800 p-6 rounded-lg reveal';
//         expElement.style.animationDelay = `${index * 0.1}s`;
//         expElement.innerHTML = `
//             <h3 class="text-2xl font-bold text-blue-400">${exp.empresa}</h3>
//             <p class="text-lg text-gray-300">${exp.cargo}</p>
//             <p class="text-sm text-gray-400 mb-4">${exp.periodo}</p>
//             <ul class="list-disc list-inside text-gray-300">
//                 ${exp.descricao.map(item => `<li>${item}</li>`).join('')}
//             </ul>
//         `;
//         container.appendChild(expElement);
//     });
// }

// Função para criar cards de projetos com Material Design
// function criarProjetos() {
//     const container = document.querySelector('#projetos .grid');
//     projetosData.forEach((projeto, index) => {
//         const projetoElement = document.createElement('div');
//         projetoElement.className = 'project-card mat-card bg-gray-800 p-6 rounded-lg reveal';
//         projetoElement.style.animationDelay = `${index * 0.1}s`;
//         projetoElement.innerHTML = `
//             <img src="${projeto.imagem}" alt="${projeto.nome}" class="w-full h-48 object-cover rounded-lg mb-4">
//             <h3 class="text-xl font-bold text-blue-400 mb-2">${projeto.nome}</h3>
//             <p class="text-gray-300 mb-4">${projeto.descricao}</p>
//             <div class="flex flex-wrap gap-2 mb-4">
//                 ${projeto.tecnologias.map(tech => `
//                     <span class="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm">
//                         ${tech}
//                     </span>
//                 `).join('')}
//             </div>
//             <a href="${projeto.link}" target="_blank" class="mat-button inline-flex items-center text-blue-400 hover:text-blue-300 transition">
//                 <i class="material-icons mr-2">code</i>
//                 Ver no GitHub
//             </a>
//         `;
//         container.appendChild(projetoElement);
//     });
// }

// Função para criar barras de habilidades com Material Design
// function criarHabilidades() {
//     const containerTecnicas = document.querySelector('#habilidades-tecnicas');
//     const containerSoft = document.querySelector('#habilidades-soft');
//
//     if (!containerTecnicas || !containerSoft) {
//         console.error('Containers de habilidades não encontrados');
//         return;
//     }
//
//     habilidadesData.tecnicas.forEach((habilidade, index) => {
//         const skillElement = document.createElement('div');
//         skillElement.className = 'reveal';
//         skillElement.style.animationDelay = `${index * 0.1}s`;
//         skillElement.innerHTML = `
//             <div class="flex justify-between mb-2">
//                 <span class="text-gray-300">${habilidade.nome}</span>
//                 <span class="text-blue-400">${habilidade.nivel}%</span>
//             </div>
//             <div class="skill-bar">
//                 <div class="skill-progress" style="width: ${habilidade.nivel}%"></div>
//             </div>
//         `;
//         containerTecnicas.appendChild(skillElement);
//     });
//
//     habilidadesData.soft.forEach((skill, index) => {
//         const skillElement = document.createElement('div');
//         skillElement.className = 'soft-skill-card mat-card bg-gray-800 p-6 rounded-lg reveal';
//         skillElement.style.animationDelay = `${index * 0.1}s`;
//         skillElement.innerHTML = `
//             <h4 class="soft-skill-title text-xl font-bold text-blue-400 mb-2">${skill.nome}</h4>
//             <p class="text-gray-300">${skill.descricao}</p>
//         `;
//         containerSoft.appendChild(skillElement);
//     });
// }

// Função para animar elementos no scroll com Material Design
function animarNoScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Inicialização com Material Design
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', animarNoScroll);
    animarNoScroll(); // Animar elementos visíveis na carga inicial

    // Adicionar efeito de ripple aos botões
    document.querySelectorAll('.mat-button, .mat-raised-button, .mat-stroked-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            this.appendChild(ripple);

            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;

            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            ripple.classList.add('active');
            setTimeout(() => ripple.remove(), 600);
        });
    });
});