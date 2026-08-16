import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './shared/component/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductCardComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
