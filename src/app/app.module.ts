import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResponsivenavComponent } from './responsivenav/responsivenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootsNavComponent } from './boots-nav/boots-nav.component';
import { RamComponent } from './ram/ram.component';
import { EmailformComponent } from './emailform/emailform.component';
import { ContactService } from './contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlideComponent } from './slide/slide.component';
import { MaterialsComponent } from './materials/materials.component';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ResponsivenavComponent,
    BootsNavComponent,
    RamComponent,
    EmailformComponent,
    SlideComponent,
    MaterialsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
