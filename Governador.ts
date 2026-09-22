import { Politico } from "./Politico";
import { Esfera } from "./Esfera";
import { Poder } from "./Poder";

export class Governador extends Politico {
  constructor(
    nome: string,
    partido: string,
    private estado: string,
    private quantidadeSecretarios: number,
    localTrabalho: string,
    enderecoTrabalho: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(nome, partido, Esfera.ESTADUAL, Poder.EXECUTIVO,
      localTrabalho, enderecoTrabalho, remuneracao, projetos);
    if (!estado.trim()) throw new Error("Estado obrigatório.");
    if (quantidadeSecretarios < 0) throw new Error("Quantidade inválida.");
  }

  getEstado(): string { return this.estado; }
  getQuantidadeSecretarios(): number { return this.quantidadeSecretarios; }

  mandato(): void {
    console.log(`Mandato de ${this.getNome()}: sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.`);
  }

  sancionarLeisEstaduais(): string { return "Sancionar leis estaduais."; }
  vetarLeisEstaduais(): string { return "Vetar leis estaduais."; }
  decretarEstadoCalamidade(): string { return "Decretar estado de calamidade."; }
  enviarPEC(): string { return "Enviar PEC à Assembleia Legislativa."; }
  gerirPoliciaMilitar(): string { return "Gerir a Polícia Militar."; }
  administrarRodoviasEstaduais(): string { return "Administrar rodovias estaduais."; }
  coordenarEducacao(): string { return "Coordenar a educação do Estado."; }
  coordenarSaude(): string { return "Coordenar a saúde do Estado."; }
  elaborarEnviarPPA(): string { return "Elaborar e enviar o PPA estadual à Assembleia Legislativa."; }
  elaborarEnviarLDO(): string { return "Elaborar e enviar a LDO estadual à Assembleia Legislativa."; }
  elaborarEnviarLOA(): string { return "Elaborar e enviar a proposta da LOA estadual à Assembleia Legislativa."; }

  listarAcoes(): string[] {
    return [
      this.sancionarLeisEstaduais(),
      this.vetarLeisEstaduais(),
      this.decretarEstadoCalamidade(),
      this.enviarPEC(),
      this.gerirPoliciaMilitar(),
      this.administrarRodoviasEstaduais(),
      this.coordenarEducacao(),
      this.coordenarSaude(),
      this.elaborarEnviarPPA(),
      this.elaborarEnviarLDO(),
      this.elaborarEnviarLOA()
    ];
  }
}
