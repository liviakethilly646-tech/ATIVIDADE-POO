import { Esfera } from "./Esfera";
import { Poder } from "./poder";

export abstract class Politico {
  private projetos: string[];

  constructor(
    private nome: string,
    private partido: string,
    private esfera: Esfera,
    private poder: Poder,
    private localTrabalho: string,
    private enderecoTrabalho: string,
    private remuneracao: number,
    projetos: string[] = []
  ) {
    if (!nome.trim()) throw new Error("Nome obrigatório.");
    if (!partido.trim()) throw new Error("Partido obrigatório.");
    if (!localTrabalho.trim()) throw new Error("Local de trabalho obrigatório.");
    if (!enderecoTrabalho.trim()) throw new Error("Endereço obrigatório.");
    if (remuneracao < 0) throw new Error("Remuneração inválida.");
    this.projetos = [...projetos];
  }

  getNome(): string { return this.nome; }
  setNome(nome: string): void {
    if (!nome.trim()) throw new Error("Nome obrigatório.");
    this.nome = nome;
  }

  getPartido(): string { return this.partido; }
  setPartido(partido: string): void {
    if (!partido.trim()) throw new Error("Partido obrigatório.");
    this.partido = partido;
  }

  getEsfera(): Esfera { return this.esfera; }
  getPoder(): Poder { return this.poder; }
  getLocalTrabalho(): string { return this.localTrabalho; }
  getEnderecoTrabalho(): string { return this.enderecoTrabalho; }
  getRemuneracao(): number { return this.remuneracao; }

  setRemuneracao(remuneracao: number): void {
    if (remuneracao < 0) throw new Error("Remuneração inválida.");
    this.remuneracao = remuneracao;
  }

  adicionarProjeto(titulo: string): void {
    if (!titulo.trim()) throw new Error("Título do projeto obrigatório.");
    this.projetos.push(titulo);
  }

  getProjetos(): string[] {
    return [...this.projetos];
  }

  abstract mandato(): void;
  abstract listarAcoes(): string[];

  toString(): string {
    return [
      `Nome: ${this.nome}`,
      `Partido: ${this.partido}`,
      `Esfera: ${this.esfera}`,
      `Poder: ${this.poder}`,
      `Local de trabalho: ${this.localTrabalho}`,
      `Endereço: ${this.enderecoTrabalho}`,
      `Remuneração: R$ ${this.remuneracao.toFixed(2)}`,
      `Projetos: ${this.projetos.join(", ")}`
    ].join(" | ");
  }
}
