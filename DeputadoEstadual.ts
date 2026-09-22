import { Politico } from "./Politico";
import { Esfera } from "./Esfera";
import { Poder } from "./Poder";

export class DeputadoEstadual extends Politico {
  private comissoes: string[];

  constructor(
    nome: string,
    partido: string,
    private estado: string,
    comissoes: string[],
    localTrabalho: string,
    enderecoTrabalho: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(nome, partido, Esfera.ESTADUAL, Poder.LEGISLATIVO,
      localTrabalho, enderecoTrabalho, remuneracao, projetos);
    if (!estado.trim()) throw new Error("Estado obrigatório.");
    if (comissoes.length === 0) throw new Error("O deputado deve participar de ao menos uma comissão.");
    this.comissoes = [...comissoes];
  }

  getEstado(): string { return this.estado; }
  getComissoes(): string[] { return [...this.comissoes]; }

  mandato(): void {
    console.log(`Mandato de ${this.getNome()}: legisla sobre assuntos de interesse do Estado e fiscaliza o governador.`);
  }

  votarPPA(): string { return "Votar o PPA do Estado."; }
  votarLOA(): string { return "Votar a LOA do Estado."; }
  votarLDO(): string { return "Votar a LDO do Estado."; }
  proporEmendaConstituicaoEstadual(): string { return "Propor emenda à Constituição Estadual."; }
  criarCPIEstadual(): string { return "Criar CPI estadual."; }

  listarAcoes(): string[] {
    return [
      this.votarPPA(),
      this.votarLOA(),
      this.votarLDO(),
      this.proporEmendaConstituicaoEstadual(),
      this.criarCPIEstadual()
    ];
  }
}
