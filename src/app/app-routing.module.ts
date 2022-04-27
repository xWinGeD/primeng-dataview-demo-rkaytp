import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlueprintItemComponent } from "./main/blueprint-item/blueprint-item.component";
import { WidgetsComponent } from "./main/widgets/widgets.component";

const routes: Routes = [
    {path: '', component: BlueprintItemComponent},
    {path: 'blueprint', component: BlueprintItemComponent},
    {path: 'widgets', component: WidgetsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
