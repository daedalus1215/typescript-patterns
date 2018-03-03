/// <reference path="../../../../jquery.d.ts" />
import { ObserverBooleanInterface } from "../../../Patterns/ObserverSubscriber/ObserverBooleanInterface";








/**
 * Simple submit button observer. 
 * By default it starts off disabled.
 * Only enables when passed true, via notify().
 * 
 */
export class SubmitButtonObserver implements ObserverBooleanInterface {
    name:string;
    id:string;
    elementReference:any;

    constructor(elementID:string) {
        this.name = elementID;
        this.id = elementID;
        this.elementReference = $( "#"+elementID );
        this.elementReference.prop("disabled", "disabled");
    }


    notify(checked:boolean): void {
        if (checked == true) {
            this.elementReference.prop("disabled", false);
        } else {
            this.elementReference.prop("disabled", "disabled");
        }
    }
}