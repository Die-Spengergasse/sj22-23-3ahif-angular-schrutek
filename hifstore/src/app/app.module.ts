import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { ProductService } from './shared/services/product.service';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    CustomerListComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    NavBarComponent,
    NotFoundComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'productlist', component: ProductListComponent },
      { path: 'customerlist', component: CustomerListComponent },
      { path: 'shoppingcart', component: ShoppingCartComponent },
      { path: '404', component: NotFoundComponent},
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
