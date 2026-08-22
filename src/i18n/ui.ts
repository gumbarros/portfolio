import type { Solution } from '../data/solutions';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'pt-br', 'es'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  'pt-br': 'Português (Brasil)',
  es: 'Español',
};

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  'pt-br': 'PT',
  es: 'ES',
};

/* ------------------------------ UI strings ------------------------------ */
export const ui = {
  en: {
    nav: {
      solutions: '--solutions',
      about: '--about',
      contact: '--contact',
      github: '--github',
      language: 'language',
    },
    hero: {
      cmd: 'whoami',
      title: 'Gustavo Mauricio de&nbsp;Barros',
      lede: 'Software architect working the .NET ecosystem. I build the libraries developers reach for when a problem has a name: each one below is the problem, then the one-liner that removes it.',
      viewSolutions: 'view solutions',
      contact: 'contact',
    },
    solutions: {
      headline: 'Every .NET pain, next to the line that removes it.',
      prompt: 'problem',
      entries: (n: number) => `${n} entries`,
      viewMore: 'view more',
    },
    about: {
      cmd: 'whoami --verbose',
      headline: 'An architect, not just a library author.',
      body: "I'm Gustavo Mauricio de Barros, a software architect and core developer at <a href=\"https://www.jjconsulting.com.br\">JJConsulting</a>'s internal framework team. I turn recurring engineering problems into reliable tools, reusable libraries, and architecture that can grow with the business.",
      status: 'running',
      events: [
        { year: '2019', text: 'booting IFSP · Systems Analysis and Development' },
        { year: '2019', text: 'joined JJConsulting as an intern' },
        { year: '2020', text: 'developer · embraced remote work during the pandemic' },
        { year: '2022', text: 'graduated from IFSP · Systems Analysis and Development' },
        { year: '2025', text: 'Tech Lead · raising the bar for teams, standards, and delivery' },
        { year: '2026', text: 'Software Architect · designing systems built to evolve' },
      ],
    },
    contact: {
      cmd: 'contact',
      headline: 'Need a .NET architect or to use a tool? Both start the same way.',
      linkedin: 'linkedin /in/gumbarros',
      github: 'github /gumbarros',
      photo: 'me.png',
    },
    footer: {
      brand: 'Gustavo Mauricio de Barros',
      line1: 'Built from 🇧🇷',
      line2: 'Not vibe-coded, but thought by a human and written by a machine.',
      mit: 'MIT libraries',
    },
    meta: {
      title: 'Gustavo Mauricio de Barros · .NET Software Architect',
      description: 'Software architect building .NET tools that turn named problems into one-liners.',
    },
  },
  'pt-br': {
    nav: {
      solutions: '--soluções',
      about: '--sobre',
      contact: '--contato',
      github: '--github',
      language: 'idioma',
    },
    hero: {
      cmd: 'whoami',
      title: 'Gustavo Mauricio de&nbsp;Barros',
      lede: 'Arquiteto de software atuando no ecossistema .NET. Construo as bibliotecas que os desenvolvedores procuram quando um problema tem nome. Cada uma abaixo é um problema, depois a linha que o soluciona.',
      viewSolutions: 'ver soluções',
      contact: 'contato',
    },
    solutions: {
      headline: 'Cada dor do .NET, ao lado da linha que a remove.',
      prompt: 'problema',
      entries: (n: number) => `${n} entradas`,
      viewMore: 'ver mais',
    },
    about: {
      cmd: 'whoami --verbose',
      headline: 'Um arquiteto, não apenas um autor de bibliotecas.',
      body: 'Sou Gustavo Mauricio de Barros, arquiteto de software e desenvolvedor core no time de frameworks internos da <a href="https://www.jjconsulting.com.br">JJConsulting</a>. Transformo problemas recorrentes de engenharia em ferramentas confiáveis, bibliotecas reutilizáveis e arquiteturas que crescem junto com o negócio.',
      status: 'rodando',
      events: [
        { year: '2019', text: 'iniciando IFSP · Análise e Desenvolvimento de Sistemas' },
        { year: '2019', text: 'entrei na JJConsulting como estagiário' },
        { year: '2020', text: 'desenvolvedor · abracei o trabalho remoto durante a pandemia' },
        { year: '2022', text: 'formado pelo IFSP · Análise e Desenvolvimento de Sistemas' },
        { year: '2025', text: 'Tech Lead · elevando o nível dos times, padrões e entregas' },
        { year: '2026', text: 'Arquiteto de Software · projetando sistemas feitos para evoluir' },
      ],
    },
    contact: {
      cmd: 'contato',
      headline: 'Precisa de um arquiteto .NET ou de usar uma ferramenta? Ambos começam do mesmo jeito.',
      linkedin: 'linkedin /in/gumbarros',
      github: 'github /gumbarros',
      photo: 'me.png',
    },
    footer: {
      brand: 'Gustavo Mauricio de Barros',
      line1: 'Feito no 🇧🇷',
      line2: 'Este site não foi vibe codado, mas pensado por um humano e escrito por uma máquina.',
      mit: 'bibliotecas MIT',
    },
    meta: {
      title: 'Gustavo Mauricio de Barros · Arquiteto de Software .NET',
      description: 'Arquiteto de software que constrói ferramentas .NET que transformam problemas com nome em uma linha.',
    },
  },
  es: {
    nav: {
      solutions: '--soluciones',
      about: '--sobre',
      contact: '--contacto',
      github: '--github',
      language: 'idioma',
    },
    hero: {
      cmd: 'whoami',
      title: 'Gustavo Mauricio de&nbsp;Barros',
      lede: 'Arquitecto de software trabajando en el ecosistema .NET. Construyo las bibliotecas que los desarrolladores buscan cuando un problema tiene nombre: cada una abajo es el problema, luego la línea que lo elimina.',
      viewSolutions: 'ver soluciones',
      contact: 'contacto',
    },
    solutions: {
      headline: 'Cada dolor de .NET, junto a la línea que lo elimina.',
      prompt: 'problema',
      entries: (n: number) => `${n} entradas`,
      viewMore: 'ver más',
    },
    about: {
      cmd: 'whoami --verbose',
      headline: 'Un arquitecto, no solo un autor de bibliotecas.',
      body: 'Soy Gustavo Mauricio de Barros, arquitecto de software y desarrollador core en el equipo de frameworks internos de <a href="https://www.jjconsulting.com.br">JJConsulting</a>. Convierto problemas recurrentes de ingeniería en herramientas confiables, bibliotecas reutilizables y arquitecturas que crecen con el negocio.',
      status: 'ejecutando',
      events: [
        { year: '2019', text: 'iniciando IFSP · Análisis y Desarrollo de Sistemas' },
        { year: '2019', text: 'entré en JJConsulting como pasante' },
        { year: '2020', text: 'desarrollador · adopté el trabajo remoto durante la pandemia' },
        { year: '2022', text: 'me gradué en IFSP · Análisis y Desarrollo de Sistemas' },
        { year: '2025', text: 'Tech Lead · elevando el nivel de equipos, estándares y entregas' },
        { year: '2026', text: 'Arquitecto de Software · diseñando sistemas hechos para evolucionar' },
      ],
    },
    contact: {
      cmd: 'contacto',
      headline: '¿Necesita un arquitecto .NET o usar una herramienta? Ambos comienzan de la misma manera.',
      linkedin: 'linkedin /in/gumbarros',
      github: 'github /gumbarros',
      photo: 'yo.png',
    },
    footer: {
      brand: 'Gustavo Mauricio de Barros',
      line1: 'Hecho en 🇧🇷',
      line2: 'No es vibe-coded, sino pensado por un humano y escrito por una máquina.',
      mit: 'bibliotecas MIT',
    },
    meta: {
      title: 'Gustavo Mauricio de Barros · Arquitecto de Software .NET',
      description: 'Arquitecto de software que construye herramientas .NET que convierten problemas con nombre en una línea.',
    },
  },
} as const;

export type UI = (typeof ui)[Locale];

/* -------------------------- Solution content ---------------------------- */
export const solutionContent: Record<
  Locale,
  Record<string, Pick<Solution, 'problem' | 'description' | 'role' | 'statsNote' | 'credit'>>
> = {
  en: {
    ncalc: {
      problem: 'Evaluate a user-typed expression without compiling C# at runtime.',
      description: 'A fast .NET expression evaluator. Literals, operators, parameters, built-in and custom functions.',
      role: 'contributor',
    },
    jjmasterdata: {
      problem: 'Every table needs a CRUD screen, and you have written the same one forty times.',
      description: 'Generates forms and CRUD from your database metadata. With events, validation, extensible.',
      role: 'maintainer',
      credit: 'Created by JJConsulting',
    },
    'fluentstorage-git': {
      problem: 'A blob store backed by a Git repo: commits as versions, push as persistence.',
      description: 'A Git provider for FluentStorage: read and write files in a repo working tree; versions map to commit history.',
      role: 'maintains the Git provider',
      statsNote: 'in the FluentStorage repo',
      credit: 'FluentStorage by Robin Rodricks',
    },
    embeddedsass: {
      problem: 'Compile Sass inside .NET, not via a Node child process.',
      description: 'A .NET implementation of the Embedded Sass Protocol with a native API.',
      role: 'author',
    },
  },
  'pt-br': {
    ncalc: {
      problem: 'Calcule uma expressão digitada pelo usuário sem compilar C# em tempo de execução.',
      description: 'Um evaluator de expressões .NET rápido: literais, operadores, parâmetros, funções internas e personalizadas.',
      role: 'colaborador',
    },
    jjmasterdata: {
      problem: 'Cada tabela precisa de uma tela de CRUD, e você já escreveu a mesma 500mil vezes.',
      description: 'Gera formulários e CRUD a partir dos metadados do seu banco de dados. Com eventos, validação, extensível.',
      role: 'mantenedor',
      credit: 'Criado pela JJConsulting',
    },
    'fluentstorage-git': {
      problem: 'Um armazenamento de blobs apoiado por um repositório Git. Commits como versões, push como persistência.',
      description: 'Um provedor Git para FluentStorage: leia e escreva arquivos na árvore de trabalho do repositório; as versões mapeiam o histórico de commits.',
      role: 'mantém o provedor Git',
      statsNote: 'no repositório FluentStorage',
      credit: 'FluentStorage por Robin Rodricks',
    },
    embeddedsass: {
      problem: 'Compile Sass dentro do .NET, não por um child process do Node.',
      description: 'Uma implementação .NET do protocolo Embedded Sass com uma API nativa.',
      role: 'autor',
    },
  },
  es: {
    ncalc: {
      problem: 'Evalúe una expresión escrita por el usuario sin compilar C# en tiempo de ejecución.',
      description: 'Un evaluador de expresiones .NET rápido: literales, operadores, parámetros, funciones integradas y personalizadas.',
      role: 'colaborador',
    },
    jjmasterdata: {
      problem: 'Cada tabla necesita una pantalla CRUD, y ya has escrito la misma cuarenta veces.',
      description: 'Genera formularios y CRUD a partir de los metadatos de tu base de datos: eventos, validación, extensible.',
      role: 'mantenedor',
      credit: 'Creado por JJConsulting',
    },
    'fluentstorage-git': {
      problem: 'Un almacén de blobs respaldado por un repositorio Git: commits como versiones, push como persistencia.',
      description: 'Un proveedor Git para FluentStorage: lee y escribe archivos en el árbol de trabajo del repositorio; las versiones mapean el historial de commits.',
      role: 'mantiene el proveedor Git',
      statsNote: 'en el repositorio FluentStorage',
      credit: 'FluentStorage por Robin Rodricks',
    },
    embeddedsass: {
      problem: 'Compile Sass dentro de .NET, no mediante un proceso hijo de Node.',
      description: 'Una implementación .NET del protocolo Embedded Sass con una API nativa.',
      role: 'autor',
    },
  },
};
