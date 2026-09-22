import { Politico } from "./Politico";
import { Esfera } from "./Esfera";
import { Poder } from "./Poder";

export class Senador extends Politico {
  constructor(
    nome: string,
    partido: string,
    private estado: string,
    private anoEleicao: number,
    localTrabalho: string,
    enderecoTrabalho: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(nome, partido, Esfera.FEDERAL, Poder.LEGISLATIVO,
      localTrabalho, enderecoTrabalho, remuneracao, projetos);
    if (!estado.trim()) throw new Error("Estado obrigatório.");
    if (anoEleicao < 1900) throw new Error("Ano de eleição inválido.");
  }

  getEstado(): string { return this.estado; }
  getAnoEleicao(): number { return this.anoEleicao; }

  mandato(): void {
    console.log(`Mandato de ${this.getNome()}: sabatina e aprova autoridades indicadas, legisla sobre leis federais e autoriza operações financeiras externas.`);
  }

  aprovarAutoridadesAltoEscalao(): string { return "Aprovar autoridades de alto escalão."; }
  julgarCrimesResponsabilidade(): string { return "Julgar crimes de responsabilidade."; }
  representarInteressesEstado(): string { return "Representar os interesses de seu Estado."; }

  listarAcoes(): string[] {
    return [
      this.aprovarAutoridadesAltoEscalao(),
      this.julgarCrimesResponsabilidade(),
      this.representarInteressesEstado()
    ];
  }
}
