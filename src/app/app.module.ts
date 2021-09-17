import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { MainContentComponent } from './modules/main-content/main-content.component';
import { AsideContentComponent } from './modules/aside-content/aside-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CreatePostComponent } from './modules/main-content/create-post/create-post.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { ProductItemComponent } from './modules/product-list/product-item/product-item.component';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AsideContentComponent,
    CarouselComponent,
    CreatePostComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
