import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSelectModule }    from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//Para el paginator
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getSpanishPaginatorIntl } from './shared/spanish-paginator-intl';

import { NavbarComponent } from './partials/navbar/navbar.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { PageHeaderComponent } from './partials/page-header/page-header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LoadingSpinnerComponent } from './partials/loading-spinner/loading-spinner.component';
import { PersonajesScreenComponent } from './screens/personajes-screen/personajes-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    NavbarComponent,
    SidenavComponent,
    PageHeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    PersonajesScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
