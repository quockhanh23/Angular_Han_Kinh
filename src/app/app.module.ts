import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {ToastrModule} from "ngx-toastr";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomePageComponent} from './home-page/home-page.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {GlassPolishingComponent} from './glass-polishing/glass-polishing.component';
import {ChangeGlassesComponent} from './change-glasses/change-glasses.component';
import {GlassWeldingComponent} from './glass-welding/glass-welding.component';
import { FlatteryComponent } from './flattery/flattery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    GlassPolishingComponent,
    ChangeGlassesComponent,
    GlassWeldingComponent,
    FlatteryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgbModule,
    MatGridListModule,
    FormsModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
