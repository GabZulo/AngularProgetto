import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  
  cartItems = this.cartService.getItems()

  constructor(private cartService: CarrelloService) { }

  ngOnInit(): void {
  }

  clearCart(){
    this.cartItems = this.cartService.clearCart();
  }

}
