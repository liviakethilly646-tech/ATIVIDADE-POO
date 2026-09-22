# Atividade POO - Sistema de Cadastro de Políticos

Implementação em **TypeScript**, baseada no enunciado da atividade.

## Princípios de POO
- Encapsulamento: atributos `private`, getters/setters e validações.
- Herança: as classes de tipos de político herdam de `Politico`.
- Polimorfismo: cada subclasse sobrescreve `mandato()` e `listarAcoes()`.
- Abstração: `Politico` é uma classe `abstract`.

## Executar

Instale as dependências:
```bash
npm install
```

Executar diretamente:
```bash
npm start
```

Compilar:
```bash
npm run build
```

Executar a versão compilada:
```bash
npm run run
```

O projeto contém:
- Presidente atual
- 2 governadores
- 5 deputados federais
- 5 deputados estaduais
- 3 senadores
- Diagrama de classes em `UML.md`
