import { Politico } from "./Politico";
import { Esfera } from "./Esfera";
import { Poder } from "./poder";

export class Presidente extends Politico {
  constructor(
    nome: string,
    partido: string,
    localTrabalho: string,
    enderecoTrabalho: string,
    remuneracao: number,
    projetos: string[] = [],
    private quantidadeMinistros: number
  ) {
    super(nome, partido, Esfera.FEDERAL, Poder.EXECUTIVO,
      localTrabalho, enderecoTrabalho, remuneracao, projetos);
    if (quantidadeMinistros < 0) throw new Error("Quantidade inválida.");
  }

  getQuantidadeMinistros(): number { return this.quantidadeMinistros; }

  mandato(): void {
    console.log(`Mandato de ${this.getNome()}: propõe, sanciona e veta leis e edita medidas provisórias.`);
  }

  nomearMinistro(): string { return "Nomear e exonerar Ministros de Estado."; }
  exonerarMinistro(): string { return "Exonerar Ministros de Estado."; }
  comandarForcasArmadas(): string { return "Comandar as Forças Armadas."; }
  representarPaisEventosInternacionais(): string { return "Representar o país em eventos internacionais."; }
  elaborarEnviarPPA(): string { return "Elaborar e enviar ao Congresso o PPA nacional."; }
  elaborarEnviarLDO(): string { return "Elaborar e enviar ao Congresso a LDO nacional."; }
  elaborarEnviarLOA(): string { return "Elaborar e enviar ao Congresso a proposta da LOA nacional."; }

  listarAcoes(): string[] {
    return [
      this.nomearMinistro(),
      this.exonerarMinistro(),
      this.comandarForcasArmadas(),
      this.representarPaisEventosInternacionais(),
      this.elaborarEnviarPPA(),
      this.elaborarEnviarLDO(),
      this.elaborarEnviarLOA()
    ];
  }
}
