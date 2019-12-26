import { NgModule } from "@angular/core";
import { NodeJSComponent } from './nodejs.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NodeJSService } from './nodejs.service';
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",component:NodeJSComponent}
];
@NgModule({
    declarations:[NodeJSComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild(appRoutes)],
    providers:[NodeJSService],
    exports:[NodeJSComponent]
})
export class NodeJSModule{}