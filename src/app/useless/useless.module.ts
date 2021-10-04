import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { highlightDirective } from "./directives/highlight.directive";
import { UselessComponent } from './useless/useless.component';
import { UselessRoutingModule } from "./usless-routing.module";

@NgModule({
  declarations: [
    UselessComponent,
    highlightDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UselessRoutingModule],
  exports: [highlightDirective]
})

export class Useless {};