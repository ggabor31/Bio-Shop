import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { SignupComponent } from './pages/signup/signup.component';
import { PipesComponent } from './shared/pipes/pipes.component';
import { ProductsComponent } from './pages/products/products.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { CartService } from './shared/services/cart.service';
import { CommonModule } from '@angular/common';
import { MainModule } from './pages/main/main.module';
import { MatBadgeModule } from '@angular/material/badge';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';

import { User } from './shared/models/users';
import { DbService } from './shared/services/db.service';
import {ReviewModule} from "./pages/review/review.module";

@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    MainModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    AngularFireModule.initializeApp(environment.firebase),
    

    
  ],
  providers: [CartService,provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"bio-shop2024","appId":"1:573140359476:web:f14c42f82594bb26dc2d61","storageBucket":"bio-shop2024.appspot.com","apiKey":"AIzaSyAwneBNJlJ48M07h-XuHmMHnEoUJHsNT8w","authDomain":"bio-shop2024.firebaseapp.com","messagingSenderId":"573140359476"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"webkert2024-bio-shop","appId":"1:247426460957:web:7e78450b4e572392ae05f4","storageBucket":"webkert2024-bio-shop.appspot.com","apiKey":"AIzaSyDQKvjd74yscOK6QIIIA32ehnr2GqahRHg","authDomain":"webkert2024-bio-shop.firebaseapp.com","messagingSenderId":"247426460957","measurementId":"G-XSNW0449SW"}))],
  bootstrap: [AppComponent]
})
export class AppModule { }
