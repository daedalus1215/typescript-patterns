/// <reference path="../../../jquery.d.ts" />
import { ObserverBooleanInterface } from "../../Patterns/ObserverSubscriber/ObserverBooleanInterface";





export class a_SubmitButtonObserver implements ObserverBooleanInterface {
    name:string;
    id:string;
    elementReference:any;

    constructor(elementID:string) {
        this.name = elementID;
        this.id = elementID;
        this.elementReference = $( "#"+elementID );
    }


    notify(checked:boolean): void {
        if (checked == true) {
            this.elementReference.prop("disabled", false);
        } else {
            this.elementReference.prop("disabled", "disabled");
        }
    }
}