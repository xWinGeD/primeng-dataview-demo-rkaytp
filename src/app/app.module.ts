import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ProductService } from './productservice';
import {AppRoutingModule} from './app-routing.module';
import {BlueprintItemComponent} from './main/blueprint-item/blueprint-item.component';
import {WidgetsComponent} from './main/widgets/widgets.component';

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {SidebarComponent} from './main/sidebar/sidebar.component';
import {BadgeModule} from 'primeng/badge';
import {TooltipModule} from 'primeng/tooltip';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {StyleClassModule} from 'primeng/styleclass';
import {SlideMenuModule} from 'primeng/slidemenu';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    AppRoutingModule,
    BadgeModule,
    TooltipModule,
    PanelMenuModule,
    MenuModule,
    StyleClassModule,
    SlideMenuModule
  ],
  declarations: [ AppComponent, SidebarComponent, BlueprintItemComponent, WidgetsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})

export class AppModule { }
