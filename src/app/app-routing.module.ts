import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlassPolishingComponent} from "./glass-polishing/glass-polishing.component";
import {ChangeGlassesComponent} from "./change-glasses/change-glasses.component";
import {GlassWeldingComponent} from "./glass-welding/glass-welding.component";

const routes: Routes = [
  {
    path: '', component: GlassPolishingComponent,
  },
  {
    path: 'glassPolishing', component: GlassPolishingComponent,
  },
  {
    path: 'changeGlasses', component: ChangeGlassesComponent,
  },
  {
    path: 'glassWelding', component: GlassWeldingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
