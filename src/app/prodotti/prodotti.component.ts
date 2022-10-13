import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../prodotto.model';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodotti:Prodotto[] = []


  constructor(private prodottoS:ProdottoService) {
    this.prodotti=this.prodottoS.prodotti
   }

  ngOnInit(): void {
  }

}
