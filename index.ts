import {Politico} from "./Politico";
import {Presidente} from "./Presidente";
import { Governador } from "./Governador";
import {DeputadoEstadual} from "./DeputadoEstadual";
import {DeputadoFederal} from "./DeputadoFederal";
import {Senador} from "./Senador";


const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Palácio do Planalto",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Novo PAC",
        "Bolsa Família",
        "Minha Casa, Minha Vida"
    ],
    39
);

const governadorPE = new Governador(
    "Raquel Teixeira Lyra Lucena",
    "PSD",
    "Pernambuco",
    22,
    "Palácio do Campo das Princesas",
    "Praça da República, s/n - Santo Antônio, Recife/PE",
    22000,
    [
        "Juntos pela Segurança",
        "Morar Bem PE",
        "Cuida PE"
    ],
);

const governadorSP = new Governador(
    "Tarcísio Gomes de Freitas",
    "Republicanos",
    "São Paulo",
    24,
    "Palácio dos Bandeirantes",
    "Av. Morumbi, 4.500 - Morumbi, São Paulo/SP",
    36301.53,
    [
        "Trem Intercidades",
        "Provão Paulista",
        "Desestatização da Sabesp"
    ],
    
);

const deputadoFederalPE1 = new DeputadoFederal(
    "André Ferreira",
    "PL",
    "Bancada do PL",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 1039/2023",
        "PL 1342/2023"
    ],
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Clarissa Tércio Santos Corrêa de Oliveira",
    "PP",
     "Bancada do PP",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 831/2023",
        "PL 1540/2023"
    ],
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Pedro Henrique Campos Arraes de Alencar",
    "PSB",
     "Bancada do PSB",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 12/2023",
        "PL 1085/2023"
    ],
);

const deputadoFederalSP1 = new DeputadoFederal(
    "Guilherme Castro Boulos",
    "PSOL",
    "Federação PSOL-REDE",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 2720/2023",
        "PL 3110/2023"
    ],
);

const deputadoFederalSP2 = new DeputadoFederal(
    "Carla Zambelli Salgado de Oliveira",
    "PL",
    "Bancada do PL",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 1102/2023",
        "PL 2045/2023"
    ],
);

const deputadoEstadualPE1 = new DeputadoEstadual(
    "Manoel Ferreira da Silva Júnior",
    "PP",
    "Pernambuco",
    "Comissão de Constituição, Legislação e Justiça",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 397 - Boa Vista, Recife/PE",
    34774.64,
    [
        "Projetos de interesse do estado"
    ]
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "Alberto Feitosa Alves",
    "PL",
    "Pernambuco",
    "Comissão de Segurança Pública e Defesa Social",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 397 - Boa Vista, Recife/PE",
    34774.64,
    [
        "Projetos relacionados à segurança pública"
    ]
    
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Gleide Ângelo Eufrásio",
    "PSB",
    "Pernambuco",
     "Comissão de Defesa dos Direitos da Mulher",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 397 - Boa Vista, Recife/PE",
    34774.64,
    [
        "Projetos relacionados aos direitos das mulheres"
    ]
);

const deputadoEstadualSP1 = new DeputadoEstadual(
    "Eduardo Matarazzo Suplicy",
    "PT",
    "São Paulo",
    "Comissão de Defesa dos Direitos da Pessoa Humana",
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201 - Ibirapuera, São Paulo/SP",
    34774.64,
    [
        "Projetos relacionados aos direitos humanos"
    ]
);

const deputadoEstadualSP2 = new DeputadoEstadual(
    "Carlos Alberto Giannazi",
    "PSOL",
     "São Paulo",
     "Comissão de Educação e Cultura",
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201 - Ibirapuera, São Paulo/SP",
    34774.64,
    [
        "Projetos relacionados à educação"
    ]
);

const senadorPE1 = new Senador(
    "Maria Teresa Leitão de Melo",
    "PT",
    "Pernambuco",
    2022,
    "Senado Federal",
    "Praça dos Três Poderes, Brasília/DF",
    46366.19,
    [
        "PL 4403/2024",
        "PL 2614/2024"
    ]
);

const senadorPE2 = new Senador(
    "Humberto Sérgio Costa Lima",
    "PT",
    "Pernambuco",
    2018,
    "Senado Federal",
    "Praça dos Três Poderes, Brasília/DF",
    46366.19,
    [
        "PL 14/2024",
        "PL 2338/2023"
    ]
);

const senadorSP = new Senador(
    "Marcos Cesar Pontes",
    "PL",
     "São Paulo",
     2022,
    "Senado Federal",
    "Praça dos Três Poderes, Brasília/DF",
    46366.19,
    [
        "PL 3167/2023",
        "PL 3650/2023",
        "PL 3492/2023"
    ]
);

const politicos: Politico[] = [
    presidente,
    governadorPE,
    governadorSP,
    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,
    deputadoFederalSP1,
    deputadoFederalSP2,
    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,
    deputadoEstadualSP1,
    deputadoEstadualSP2,
    senadorPE1,
    senadorPE2,
    senadorSP
];

for (const politico of politicos) {
    politico.mandato();
}

console.log(presidente.nomearMinistro());
console.log(presidente.comandarForcasArmadas());
console.log(presidente.representarPaisEventosInternacionais());
console.log(presidente.elaborarEnviarPPA());
console.log (presidente.elaborarEnviarLDO());
console.log (presidente.elaborarEnviarLOA());

console.log(governadorPE.gerirPoliciaMilitar());
console.log(governadorPE.administrarRodoviasEstaduais());
console.log(governadorPE.elaborarEnviarPPA());
console.log (governadorPE.elaborarEnviarLDO());
console.log (governadorPE.elaborarEnviarLOA());

console.log(deputadoEstadualPE1.votarPPA());
console.log(deputadoEstadualPE1.votarLDO());
console.log(deputadoEstadualPE1.votarLOA());

console.log(deputadoEstadualPE1.proporEmendaConstituicaoEstadual());
console.log(deputadoEstadualPE1.criarCPIEstadual());

console.log(deputadoFederalPE1.criarCPINacional());
console.log(deputadoFederalPE1.votarPPA());
console.log(deputadoFederalPE1.votarLDO());
console.log(deputadoFederalPE1.votarLOA());

console.log(deputadoFederalPE1.proporLeiComplementar());

console.log(senadorPE1.aprovarAutoridadesAltoEscalao());
console.log(senadorPE1.julgarCrimesResponsabilidade());
console.log(senadorPE1.representarInteressesEstado());
