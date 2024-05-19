import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router,private messageService: MessageService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  
  }
  clearCart(): void {
    this.cartService.clearCart();
    alert('A kosár sikeresen ki lett ürítve.');
  }
  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }
  goBack(): void {
    this.router.navigate(['/products']);
  }
  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }
  
}
