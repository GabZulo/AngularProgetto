import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti :Prodotto[] = [
    {codice:"001",nome:"air jordan 4 cactus jack", prezzo:100,descrizione:"",foto:"../assets/jordan-4-retro-travis-scott-cactus-jack.webp"},
    {codice:"002",nome:"yeezy 700 wave runner", prezzo:200,descrizione:"",foto:"../assets/yeezy-700-wave-runner.jpg"},
    {codice:"003",nome:"yeezy 350 v2 black red", prezzo:300,descrizione:"",foto:"../assets/yeezy-350-v2-black-red.webp"},
    {codice:"004",nome:"yeezy 350 white cream", prezzo:400,descrizione:"",foto:"../assets/yeezy-350-white-cream.jpg"},
    {codice:"005",nome:"air jordan dunk low usc", prezzo:500,descrizione:"",foto:"../assets/nike-dunk-low-usc.webp"},
    {codice:"006",nome:"air jordan dunk low chronicles x off-white ", prezzo:250,descrizione:"",foto:"../assets/nike-off-white-dunk -low-chronicles.jpg"},
  ]

  constructor() { }

  get prodotti() {
    return [...this._prodotti]
  }
}