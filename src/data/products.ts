export interface Product {
  id: string;
  name: string;
  problem: string;
  description: string;
  code: string;
  codeLabel: string;
  stars: string;
  forks?: string;
  statsNote?: string;
  role: string;
  credit?: string;
  creditUrl?: string;
  github: string;
  nuget?: string;
}

export const products: Product[] = [
  {
    id: 'ncalc',
    name: 'NCalc',
    problem: 'Evaluate a user-typed expression without compiling C# at runtime.',
    description:
      'A fast .NET expression evaluator: literals, operators, parameters, built-in and custom functions.',
    code: `var result = new Expression("2 + 20 * 2").Evaluate<int>(); // 42`,
    codeLabel: 'Evaluate.cs',
    stars: '1.2k',
    forks: '126',
    role: 'contributor',
    github: 'https://github.com/ncalc/ncalc',
    nuget: 'https://www.nuget.org/packages/NCalc',
  },
  {
    id: 'jjmasterdata',
    name: 'JJMasterData',
    problem:
      'Every table needs a CRUD screen, and you have written the same one forty times.',
    description:
      'Generates forms and CRUD from your database metadata: events, validation, extensible.',
    code: `builder.Services.AddJJMasterDataWeb()`,
    codeLabel: 'Program.cs',
    stars: '209',
    forks: '25',
    role: 'maintainer',
    credit: 'Created by JJConsulting',
    creditUrl: 'https://jjconsulting.com.br',
    github: 'https://github.com/JJConsulting/JJMasterData',
  },
  {
    id: 'fluentstorage-git',
    name: 'FluentStorage.Git',
    problem:
      'A blob store backed by a Git repo: commits as versions, push as persistence.',
    description:
      'A Git provider for FluentStorage: read and write files in a repo working tree; versions map to commit history.',
    code: `IStore git = GitStorage.FromToken(
    "https://github.com/org/data.git",
    token: "ghp_****",
    rootPath: "snapshots");

await git.SetObject("2026-08-21.json", stream);`,
    codeLabel: 'GitStore.cs',
    stars: '455',
    forks: '73',
    statsNote: 'in the FluentStorage repo',
    role: 'maintains the Git provider',
    credit: 'FluentStorage by Robin Rodricks',
    creditUrl: 'https://github.com/robinrodricks/FluentStorage',
    github:
      'https://github.com/robinrodricks/FluentStorage/wiki/Git-Repository-Storage',
    nuget: 'https://www.nuget.org/packages/FluentStorage.Git',
  },
  {
    id: 'embeddedsass',
    name: 'EmbeddedSass.Net',
    problem: 'Compile Sass inside .NET, not via a Node child process.',
    description:
      'A .NET implementation of the Embedded Sass Protocol with a native API.',
    code: `await using var compiler = new SassCompiler(options);

var result = await compiler.CompileStringAsync(
    "$color: red; a { color: $color; }");`,
    codeLabel: 'SassCompiler.cs',
    stars: '3',
    role: 'author',
    github: 'https://github.com/gumbarros/EmbeddedSass.Net',
    nuget: 'https://www.nuget.org/packages/EmbeddedSass.Net',
  },
];
