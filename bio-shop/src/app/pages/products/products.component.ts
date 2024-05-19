import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    
  products: any[] = [
    { 
      id: 1, 
      name: 'Bio repa', 
      price: 100, 
      imageUrl: 'assets/products/repa.jpg' ,// Kép elérési útja
      count: 1 
    },
    { 
      id: 2, 
      name: 'Bio Alma', 
      price: 200, 
      imageUrl: 'assets/products/alma.jpg', // Kép elérési útja
      count: 1 
    },
    {
      id: 3, 
      name: 'Bio Körte', 
      price: 200, 
      imageUrl: 'assets/products/korte.jpg', // Kép elérési útja
      count: 1 
    },
    {
      id: 4, 
      name: 'Bio Keksz', 
      price: 500, 
      imageUrl: 'assets/products/keksz.jpg', // Kép elérési útja
      count: 1 
    }
  ];

  constructor(private cartService: CartService,private router: Router,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  increment(product: any): void {
    product.count++;
  }

  decrement(product: any): void {
    if (product.count > 1) {
      product.count--;
    }
  }

  addToCart(product: any): void {
    for (let i = 0; i < product.count; i++) {
      this.cartService.addToCart(product);
    }
    console.log(`${product.name} added to cart ${product.count} times`);
    this.messageService.changeMessage(product.name);
    alert(`A termék sikeresen hozzá lett adva a kosárhoz: ${product.name}`);
    product.count = 0; // Számláló visszaállítása 0-ra
  }
  goToCart(): void {
    this.router.navigate(['/cart']);
  }
  

}
