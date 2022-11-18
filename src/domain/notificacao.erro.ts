import { Erro } from "./erro";

export class NotificacaoErro{
  private _erros: Erro[]

  constructor(){
    this._erros = []
  }

  get erros(): Erro[]{
    return [...this._erros]
  }

  temErros(): boolean {
    return this.erros.length > 0
  }

  adicionaErro(erro: Erro): void {

    const erroJaAdicionado = this._erros.filter(e => e.campo === erro.campo)[0]
    if(erroJaAdicionado){
      this._erros = this._erros.map(e => {
        if(e.campo === erro.campo){
          e.mensagens = [...e.mensagens, ...erro.mensagens]
          return e
        } 
        return  e
      })
    }else {
      this._erros.push(erro)
    }
  }
}