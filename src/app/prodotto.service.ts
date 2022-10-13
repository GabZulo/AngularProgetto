import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti :Prodotto[] = [
    {codice:"001",nome:"prodotto 1", prezzo:100,descrizione:"",foto:""},
    {codice:"002",nome:"prodotto 2", prezzo:200,descrizione:"",foto:""},
    {codice:"003",nome:"prodotto 3", prezzo:300,descrizione:"",foto:""},
    {codice:"004",nome:"prodotto 4", prezzo:400,descrizione:"",foto:""},
    {codice:"005",nome:"prodotto 5", prezzo:500,descrizione:"",foto:""},
    {codice:"006",nome:"prodotto 6", prezzo:250,descrizione:"",foto:""},
  ]

  constructor() { }

  get prodotti() {
    return [...this._prodotti]
  }
}