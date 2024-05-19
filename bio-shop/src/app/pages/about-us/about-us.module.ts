import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AboutUsComponent,DateFormatPipe],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AboutUsModule { }
