import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import { ReviewComponent } from "./review.component";
import {ReviewRoutingModule} from "./review-routing.module";

@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    ReviewRoutingModule
  ]
})
export class ReviewModule { }
