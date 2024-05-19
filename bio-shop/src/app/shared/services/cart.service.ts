import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  removeCartItem(item: any) {
    throw new Error('Method not implemented.');
  }
  updateCartItem(item: any) {
    throw new Error('Method not implemented.');
  }
  private cartItemsSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  constructor() { }

  addToCart(product: any): void {
    const currentItems = this.cartItemsSource.value;
    this.cartItemsSource.next([...currentItems, product]);
  }

  clearCart(): void {
    this.cartItemsSource.next([]);
  }

  removeFromCart(index: number): void {
    const currentItems = this.cartItemsSource.value;
    currentItems.splice(index, 1);
    this.cartItemsSource.next([...currentItems]);
  }
}
