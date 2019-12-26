import { Routes } from "@angular/router";
import { NodeJSModule } from "./nodejs/nodejs.module";
export const appRoutes:Routes = [
    
    
    {path:"nodejs",loadChildren:"./nodejs/nodejs.module#NodeJSModule"},
];