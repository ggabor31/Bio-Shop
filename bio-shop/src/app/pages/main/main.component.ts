import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showShoppingButton: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showShoppingButton = true;
    }, 5000);
  }

}
