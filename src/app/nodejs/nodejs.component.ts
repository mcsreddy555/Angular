import { Component } from "@angular/core";
import { NodeJSService } from './nodejs.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector:"nodejs",
    templateUrl:"./nodejs.component.html"
})
export class NodeJSComponent{
    private result:any;
    constructor(private service:NodeJSService){}
    ngOnInit(){
        this.service.getNodeJSTopics()
            .subscribe((posRes)=>{
                this.result = posRes;
            },(errRes:HttpErrorResponse)=>{
                if(errRes.error instanceof Error)
                    console.log("client side error");
                else
                    console.log("server side error");
            });
    };
};