import { Politico } from "./Politico";
import { Presidente } from "./Presidente";
import { Governador } from "./Governador";
import { DeputadoFederal } from "./DeputadoFederal";
import { DeputadoEstadual } from "./DeputadoEstadual";
import { Senador } from "./Senador";

const REMUNERACAO_PARLAMENTAR = 46366.19;
const REMUNERACAO_ESTADUAL = 34000.00;

const politicos: Politico[] = [];

// Presidente atual
politicos.push(new Presidente(
  "Luiz Inácio Lula da Silva", "PT", 38,
  "Palácio do Planalto",
  "Praça dos Três Poderes, Brasília - DF",
  46366.19,
  ["Novo PAC", "Plano Plurianual Nacional"]
));

// Governadores: Pernambuco + Bahia
politicos.push(new Governador(
  "Raquel Lyra", "PSD", "Pernambuco", 28,
  "Palácio do Campo das Princesas",
  "Praça da República, Recife - PE",
  41000,
  ["PE na Estrada", "Juntos pela Segurança"]
));

politicos.push(new Governador(
  "Jerônimo Rodrigues", "PT", "Bahia", 27,
  "Centro Administrativo da Bahia",
  "3ª Avenida, CAB, Salvador - BA",
  41000,
  ["Novo PAC Bahia", "Bahia pela Educação"]
));

// 3 deputados federais de Pernambuco
politicos.push(
  new DeputadoFederal("Pedro Campos", "PSB", "Bancada do PSB",
    "Câmara dos Deputados", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de inclusão digital"]),
  new DeputadoFederal("Maria Arraes", "SOLIDARIEDADE", "Bancada do SOLIDARIEDADE",
    "Câmara dos Deputados", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de proteção à infância"]),
  new DeputadoFederal("Eduardo da Fonte", "PP", "Bancada do PP",
    "Câmara dos Deputados", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de desenvolvimento regional"])
);

// 2 deputados federais da Bahia
politicos.push(
  new DeputadoFederal("Jorge Solla", "PT", "Bancada do PT",
    "Câmara dos Deputados", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de saúde pública"]),
  new DeputadoFederal("Arthur Maia", "UNIÃO", "Bancada do UNIÃO",
    "Câmara dos Deputados", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de desenvolvimento regional"])
);

// 3 deputados estaduais de Pernambuco
politicos.push(
  new DeputadoEstadual("Aglailson Victor", "PSB", "Pernambuco",
    ["Comissão de Justiça"], "Assembleia Legislativa de Pernambuco",
    "Rua da União, Recife - PE", REMUNERACAO_ESTADUAL, ["Projeto de alimentação escolar"]),
  new DeputadoEstadual("Diogo Moraes", "PSB", "Pernambuco",
    ["Comissão de Desenvolvimento Econômico"], "Assembleia Legislativa de Pernambuco",
    "Rua da União, Recife - PE", REMUNERACAO_ESTADUAL, ["Projeto de desenvolvimento regional"]),
  new DeputadoEstadual("João Paulo", "PT", "Pernambuco",
    ["Comissão de Educação"], "Assembleia Legislativa de Pernambuco",
    "Rua da União, Recife - PE", REMUNERACAO_ESTADUAL, ["Projeto de inclusão social"])
);

// 2 deputados estaduais da Bahia
politicos.push(
  new DeputadoEstadual("Angelo Almeida", "PSB", "Bahia",
    ["Comissão de Constituição e Justiça"], "Assembleia Legislativa da Bahia",
    "Salvador - BA", REMUNERACAO_ESTADUAL, ["Projeto de desenvolvimento econômico"]),
  new DeputadoEstadual("Ivana Bastos", "PSD", "Bahia",
    ["Comissão de Finanças"], "Assembleia Legislativa da Bahia",
    "Salvador - BA", REMUNERACAO_ESTADUAL, ["Projeto de saúde regional"])
);

// 2 senadores de Pernambuco + 1 da Bahia
politicos.push(
  new Senador("Fernando Dueire", "MDB", "Pernambuco", 2022,
    "Senado Federal", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de desenvolvimento regional"]),
  new Senador("Teresa Leitão", "PT", "Pernambuco", 2022,
    "Senado Federal", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de educação"]),
  new Senador("Otto Alencar", "PSD", "Bahia", 2022,
    "Senado Federal", "Brasília - DF", REMUNERACAO_PARLAMENTAR, ["Projeto de saúde pública"])
);

// Demonstração de polimorfismo
console.log("===== SISTEMA DE CADASTRO DE POLÍTICOS =====");

for (const politico of politicos) {
  console.log("\n----------------------------------------");
  console.log(politico.toString());
  politico.mandato();

  console.log("Ações:");
  for (const acao of politico.listarAcoes()) {
    console.log(`- ${acao}`);
  }
}

console.log(`\nTotal de políticos instanciados: ${politicos.length}`);
