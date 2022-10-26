import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti :Prodotto[] = [
    {codice:"001",nome:"prodotto 1", prezzo:100,descrizione:"",foto:"../assets/jordan-4-retro-travis-scott-cactus-jack.webp"},
    {codice:"002",nome:"prodotto 2", prezzo:200,descrizione:"",foto:"../assets/yeezy-700-wave-runner.jpg"},
    {codice:"003",nome:"prodotto 3", prezzo:300,descrizione:"",foto:"../assets/yeezy-350-v2-black-red.webp"},
    {codice:"004",nome:"prodotto 4", prezzo:400,descrizione:"",foto:"../assets/yeezy-350-white-cream.jpg"},
    {codice:"005",nome:"prodotto 5", prezzo:500,descrizione:"",foto:"../assets/nike-dunk-low-usc.webp"},
    {codice:"006",nome:"prodotto 6", prezzo:250,descrizione:"",foto:"../assets/nike-off-white-dunk -low-chronicles.jpg"},
  ]

  constructor() { }

  get prodotti() {
    return [...this._prodotti]
  }
}