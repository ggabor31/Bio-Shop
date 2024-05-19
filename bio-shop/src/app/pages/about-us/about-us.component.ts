import { AfterViewInit, Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit,AfterViewInit,OnDestroy {
  currentDateTime: string = new Date().toLocaleDateString();
  currentDate = new Date();
  welcomeMessage: string = '';
  private timer: any;
  isAbout: boolean = true;

  constructor() { }


  
  ngAfterViewInit(): void {
    this.timer = setTimeout(() => {
      this.welcomeMessage = 'Üdvözlünk a Bioshop oldalán!';
    }, 5000); // 2 másodperc késleltetés
  }

  ngOnInit(): void {
    console.log('AboutUsComponent initialized.');
    
  }
  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    console.log('AboutUsComponent destroyed.');
  }

  
}
