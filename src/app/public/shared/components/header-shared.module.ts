import { NgModule } from "@angular/core";
import { PublicHeaderComponent } from "../../public-header/public-header.component";

@NgModule({
    declarations: [PublicHeaderComponent],
    exports: [PublicHeaderComponent]
})
export class HeaderSharedModule {}