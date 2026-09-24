import { Politico } from "./Politico";
import { Esfera } from "./Esfera";
import { Poder } from "./poder";

export class DeputadoFederal extends Politico {
  constructor(
    nome: string,
    partido: string,
    private bancada: string,
    localTrabalho: string,
    enderecoTrabalho: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(nome, partido, Esfera.FEDERAL, Poder.LEGISLATIVO,
      localTrabalho, enderecoTrabalho, remuneracao, projetos);
    if (!bancada.trim()) throw new Error("Bancada obrigatória.");
  }

  getBancada(): string { return this.bancada; }

  mandato(): void {
    console.log(`Mandato de ${this.getNome()}: legisla sobre o código penal, código tributário e leis trabalhistas e fiscaliza o Presidente da República.`);
  }

  votarPEC(): string { return "Votar PECs federais."; }
  criarCPINacional(): string { return "Criar CPI nacional."; }
  votarPPA(): string { return "Votar o PPA nacional."; }
  votarLDO(): string { return "Votar a LDO nacional."; }
  votarLOA(): string { return "Votar a LOA nacional."; }
  proporLeiComplementar(): string { return "Propor leis complementares."; }

  listarAcoes(): string[] {
    return [
      this.votarPEC(),
      this.criarCPINacional(),
      this.votarPPA(),
      this.votarLDO(),
      this.votarLOA(),
      this.proporLeiComplementar()
    ];
  }
}
