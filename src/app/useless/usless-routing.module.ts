import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UselessComponent } from "./useless/useless.component";

const routes: Routes = [
    {
        path: 'useless',
        component: UselessComponent

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UselessRoutingModule {} ;