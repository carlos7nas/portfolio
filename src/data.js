// Todo o conteúdo do portfólio fica aqui. Para mudar um texto, edite este arquivo.

export const NAV = [
  ['sobre', 'Sobre'],
  ['formacao', 'Formação'],
  ['experiencia', 'Experiência'],
  ['projetos', 'Projetos'],
  ['certificacoes', 'Certificações'],
  ['competencias', 'Competências'],
  ['contato', 'Contato'],
];

export const HERO_CHIPS = [
  ['book', 'FATEC Mauá'],
  ['code', 'Desenvolvimento de sistemas'],
  ['brief', 'Experiência profissional'],
  ['link', 'Tecnologia e negócios'],
];

export const ABOUT = [
  'Atualmente curso Informática para Negócios na FATEC Mauá, buscando conectar tecnologia e gestão para melhorar processos e resultados.',
  'Tenho perfil proativo, organizado e orientado a resultados, com foco em apoiar equipes comerciais e de e-commerce, contribuir para a eficiência corporativa e oferecer uma boa experiência ao cliente.',
  'Minha formação acadêmica e minhas experiências profissionais me proporcionam uma visão que une conhecimentos tecnológicos e administrativos. Tenho interesse em desenvolver sistemas, trabalhar com análise de dados, automatizar processos e criar soluções que atendam às necessidades reais das empresas.',
  'Busco constantemente ampliar meus conhecimentos e aplicar o que aprendo em projetos práticos, desenvolvendo minha capacidade técnica e profissional.',
];

export const AREAS = [
  ['code', 'Desenvolvimento de sistemas'],
  ['chart', 'Análise de dados'],
  ['zap', 'Automação de processos'],
  ['link', 'Integração entre tecnologia e gestão'],
];

export const EDU_FACTS = [
  ['Curso', 'Informática para Negócios'],
  ['Instituição', 'Centro Paula Souza'],
  ['Início', 'Agosto de 2024'],
  ['Previsão de conclusão', 'Junho de 2027'],
];

export const EDU_TEXT = [
  'A graduação integra tecnologia e gestão por meio de projetos de TI, seminários e trabalhos em grupo. Minha formação proporciona uma visão que conecta o desenvolvimento técnico à gestão de processos e à estratégia dos negócios.',
  'Tenho maior experiência prática com C#, por meio do desenvolvimento de sistemas, e Microsoft SQL Server, utilizado para manipulação e gerenciamento de dados.',
];

export const EXPERIENCES = [
  {
    icon: 'cpu',
    empresa: 'Colleman The World School',
    cargo: 'Suporte de TI',
    texto: 'Parte da minha atuação profissional em tecnologia da informação.',
    atual: true,
  },
  {
    icon: 'book',
    empresa: 'Nexus Soluções Financeiras',
    cargo: 'Assistente Administrativo',
    texto: 'Experiência profissional na área administrativa e no ambiente de serviços financeiros.',
  },
  {
    icon: 'tag',
    empresa: 'StampMetal-GB Telas Perfuradas LTDA',
    cargo: 'Auxiliar de Vendas',
    texto: 'Experiência relacionada à área comercial.',
  },
  {
    icon: 'cart',
    empresa: 'Overglow Company',
    cargo: 'Auxiliar de E-commerce',
    texto: 'Experiência no ambiente de comércio eletrônico.',
  },
  {
    icon: 'box',
    empresa: 'Dia Brasil Sociedade Limitada',
    cargo: 'Armazenista',
    texto: 'Experiência profissional na área operacional.',
  },
];

export const PROJECTS = [
  {
    id: 'mdc',
    titulo: 'Projeto MDC',
    stack: 'Catálogo interativo Marvel e DC · C# e Windows Forms',
    github: 'https://github.com/carlos7nas/Projeto-MDC',
    paragrafos: [
      'Catálogo interativo simples em que o usuário escolhe um universo (Marvel ou DC) e, em seguida, um personagem desse universo para ver a imagem e uma breve descrição. O catálogo traz alguns heróis e anti-heróis.',
    ],
    blocos: [
      {
        titulo: 'Funcionalidades',
        tipo: 'lista',
        itens: [
          'Seleção do universo em um ComboBox; ao escolher novamente, as opções e os dados anteriores são limpos.',
          'Filtragem dos personagens pelo universo escolhido.',
          'Carregamento dinâmico das imagens a partir de uma pasta, usando o nome do arquivo para encontrar o personagem.',
          'Exibição da imagem em um PictureBox e da descrição em um Label.',
        ],
      },
      {
        titulo: 'Tecnologias',
        tipo: 'chips',
        itens: ['C#', '.NET', 'Windows Forms', 'Visual Studio 2022', 'Git e GitHub'],
      },
      {
        titulo: 'Conhecimentos aplicados',
        tipo: 'chips',
        itens: [
          'Lógica de programação',
          'Programação orientada a eventos',
          'Desenvolvimento de interfaces',
          'Interatividade',
          'Experiência do usuário',
        ],
      },
    ],
    capturas: [
      {
        src: 'img/shot-mdc-1.webp',
        w: 585,
        h: 382,
        alt: 'Captura do Projeto MDC com o universo Marvel e o personagem Blade selecionados, com imagem e descrição',
      },
      {
        src: 'img/shot-mdc-2.webp',
        w: 584,
        h: 381,
        alt: 'Captura do Projeto MDC com o universo DC e o personagem Spawn selecionados, com imagem e descrição',
      },
    ],
  },
  {
    id: 'senha',
    titulo: 'Validador de Segurança de Senhas',
    stack: 'Python',
    github: 'https://github.com/carlos7nas/Validador-de-Senha#-funcionalidades',
    paragrafos: [
      'Desenvolvi uma aplicação em Python com a finalidade de validar a segurança de senhas informadas pelo usuário.',
      'Projeto prático desenvolvido para consolidar fundamentos de lógica de programação em Python, com foco em validação de dados e em novos aprendizados com a linguagem. Pelos critérios do programa, a senha precisa ter no mínimo 12 caracteres e ao menos 2 caracteres especiais.',
    ],
    blocos: [
      {
        titulo: 'Funcionalidades',
        tipo: 'lista',
        itens: [
          'Validação de comprimento: verifica se a senha tem o mínimo de 12 caracteres usando len().',
          'Análise de caracteres especiais: rastreia o uso de @, ! e * com .count().',
          'Relatório dinâmico: a análise só exibe os símbolos que foram efetivamente usados na senha.',
          'Feedback em tempo real: calcula quantos caracteres faltam para atingir os requisitos, usando f-strings.',
        ],
      },
      { titulo: 'Tecnologias', tipo: 'chips', itens: ['Python'] },
      {
        titulo: 'Comandos Python praticados',
        tipo: 'lista',
        itens: [
          'print(f"..."): formatação de strings para relatórios limpos.',
          'type(): monitoramento da tipagem dos dados durante a execução.',
          'if/and/else: estruturas de decisão para validação complexa.',
          '.count(): contagem precisa de ocorrências de caracteres específicos.',
        ],
      },
      {
        titulo: 'Conhecimentos aplicados',
        tipo: 'chips',
        itens: [
          'Lógica de programação',
          'Validação de dados',
          'Desenvolvimento de aplicações',
          'Fundamentos de segurança da informação',
        ],
      },
    ],
    capturas: [
      {
        src: 'img/shot-senha-1.webp',
        w: 1400,
        h: 788,
        alt: 'Captura do código Python e da execução no PyCharm: a senha @carlosv**2621 é classificada como extremamente segura',
      },
      {
        src: 'img/shot-senha-2.webp',
        w: 1400,
        h: 788,
        alt: 'Captura do código Python e da execução no PyCharm: a senha @carlos!! é inválida e faltam 3 caracteres',
      },
      {
        src: 'img/shot-senha-3.webp',
        w: 1400,
        h: 788,
        alt: 'Captura do código Python e da execução no PyCharm: a senha @carlosv2621 é inválida e falta 1 caractere especial',
      },
    ],
  },
];

export const CERTS = [
  {
    titulo: 'Fundamentos da Tecnologia da Informação',
    inst: 'IBM SkillsBuild',
    src: 'img/cert-ibm.webp',
    w: 600,
    h: 600,
    alt: 'Selo digital IBM SkillsBuild: Information Technology Fundamentals',
    lista: [
      'Hardware e software',
      'Computação em nuvem',
      'Redes de computadores',
      'Segurança cibernética',
      'Fundamentos da Tecnologia da Informação',
    ],
  },
  {
    titulo: 'Crie um Site Simples Usando HTML, CSS e JavaScript',
    inst: 'Fundação Bradesco',
    src: 'img/cert-html-css-js.webp',
    w: 1320,
    h: 1020,
    alt: 'Certificado de conclusão da Fundação Bradesco: Crie um Site Simples Usando HTML, CSS e JavaScript',
    lista: [
      'Fundamentos de HTML',
      'Fundamentos de CSS',
      'Fundamentos de JavaScript',
      'Estruturação de páginas web',
      'Etapas iniciais para desenvolvimento de sites',
    ],
  },
  {
    titulo: 'Desenvolvimento Python',
    inst: 'FIAP Nano Course',
    src: 'img/cert-python.webp',
    w: 1262,
    h: 892,
    alt: 'Certificado FIAP Nano Course: Python Development',
    lista: [
      'Fundamentos de Python',
      'Introdução à programação',
      'Lógica de programação',
      'Desenvolvimento de aplicações desde os conceitos iniciais',
    ],
  },
  {
    titulo: 'Introdução à Análise de Dados — Microsoft Power BI',
    inst: 'Fundação Bradesco',
    src: 'img/cert-power-bi.webp',
    w: 1320,
    h: 1020,
    alt: 'Certificado de conclusão da Fundação Bradesco: Introdução à Análise de Dados, Microsoft Power BI',
    lista: [
      'Introdução à análise de dados',
      'Fundamentos do Microsoft Power BI',
      'Visualização e interpretação de informações',
      'Desenvolvimento de conhecimentos em análise de dados',
    ],
  },
];

export const CONNECTIONS = [
  {
    de: ['FATEC Mauá', 'Graduação em Informática para Negócios'],
    para: [
      'Projeto MDC',
      'A graduação em Informática para Negócios dá base ao desenvolvimento de sistemas em C# e à criação de interfaces gráficas, aplicados no catálogo interativo Marvel e DC.',
    ],
  },
  {
    de: ['FIAP', 'Desenvolvimento Python'],
    para: [
      'Validador de Segurança de Senhas',
      'Os conhecimentos de Python do curso foram aplicados no projeto individual de validação de senhas.',
    ],
  },
  {
    de: ['Fundação Bradesco', 'HTML, CSS e JavaScript'],
    para: [
      'Desenvolvimento web',
      'O aprendizado de HTML, CSS e JavaScript dá a base para compreender a estrutura e o desenvolvimento de páginas web.',
    ],
  },
  {
    de: ['IBM SkillsBuild', 'Fundamentos da Tecnologia da Informação'],
    para: [
      'Tecnologia da Informação',
      'Hardware, software, redes, computação em nuvem e segurança da informação complementam minha formação tecnológica e minha atuação profissional em TI.',
    ],
  },
  {
    de: ['Fundação Bradesco', 'Introdução à Análise de Dados, Power BI'],
    para: [
      'Dados para decisões nas empresas',
      'O curso se conecta ao meu interesse em trabalhar com dados e desenvolver soluções que contribuam para a tomada de decisões.',
    ],
  },
];

export const SKILLS = [
  { icon: 'code', titulo: 'Programação e desenvolvimento', itens: ['C#', 'Python', 'HTML', 'CSS', 'JavaScript'] },
  { icon: 'db', titulo: 'Banco de dados', itens: ['Microsoft SQL Server', 'SQL'] },
  { icon: 'chart', titulo: 'Análise e produtividade', itens: ['Microsoft Power BI', 'Pacote Office'] },
  {
    icon: 'layers',
    titulo: 'Tecnologia e desenvolvimento de sistemas',
    itens: [
      'Windows Forms',
      'Lógica de programação',
      'Desenvolvimento de interfaces',
      'Manipulação de dados',
      'Fundamentos de segurança da informação',
      'Fundamentos de TI',
    ],
  },
];

export const INTERESTS = [
  ['code', 'Desenvolvimento de sistemas'],
  ['chart', 'Análise de dados'],
  ['zap', 'Automação de processos'],
  ['cpu', 'Tecnologia da Informação'],
  ['refresh', 'Melhoria contínua'],
  ['target', 'Eficiência operacional'],
  ['link', 'Integração entre tecnologia e gestão'],
];

export const GOAL = [
  'Busco uma oportunidade de estágio na área de tecnologia, com interesse em desenvolvimento de sistemas, análise de dados, automação de processos e criação de soluções que contribuam para a melhoria contínua e a eficiência operacional.',
  'Quero aplicar meus conhecimentos técnicos e minha visão de negócios em desafios reais, colaborar com equipes e continuar evoluindo profissionalmente.',
];

export const GOAL_FIELDS = [
  ['code', 'Desenvolvimento de sistemas'],
  ['chart', 'Análise de dados'],
  ['zap', 'Automação de processos'],
  ['cpu', 'Tecnologia da Informação'],
];

export const CONTACT = {
  email: 'carlos7nas@gmail.com',
  telefone: '+55 (11) 96351-0262',
  whatsapp: 'https://wa.me/5511963510262?text=Ol%C3%A1%2C%20Carlos!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
  linkedin: 'https://linkedin.com/in/carlosvitordonascimento',
  linkedinTexto: 'linkedin.com/in/carlosvitordonascimento',
  github: 'https://github.com/carlos7nas',
  githubTexto: 'github.com/carlos7nas',
};
