import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlassPolishingComponent} from "./glass-polishing/glass-polishing.component";
import {ChangeGlassesComponent} from "./change-glasses/change-glasses.component";
import {GlassWeldingComponent} from "./glass-welding/glass-welding.component";
import {StainRemoverComponent} from "./stain-remover/stain-remover.component";
import {IntroComponent} from "./intro/intro.component";

const routes: Routes = [
  {
    path: '', component: GlassWeldingComponent,
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
  {
    path: 'stainRemover', component: StainRemoverComponent,
  },
  {
    path: 'intro', component: IntroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
