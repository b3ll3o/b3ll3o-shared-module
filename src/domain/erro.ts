import { Objeto } from "./objeto"

export class Erro extends Objeto<Erro> {
  campo: string
  mensagens: string[]

  constructor(campo: string, mensagens: string[]){
    super({
      campo, mensagens
    })

    if(!campo || !mensagens){
      throw new Error('Campo erro ou mensagens devem ter valor')
    }

    this.campo = campo
    this.mensagens = mensagens
  }
}