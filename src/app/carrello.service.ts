import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private cartItems :Prodotto[] = []

  constructor() {}

  addToCart(product: Prodotto) {
    this.cartItems.push(product);
    alert("Prodotto aggiunto al carrello")
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  getItems() {
    return this.cartItems;
  }
}
