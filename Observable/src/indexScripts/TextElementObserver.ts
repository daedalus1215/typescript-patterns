import { ObserverNumberInterface } from '../Patterns/ObserverNumberInterface';
/// <reference path="../../jquery.d.ts" />


export class TextElementObserver implements ObserverNumberInterface {
    name:string;
    id:string;
    elementReference:any;

    constructor(elementID:string) {
        this.name = elementID;
        this.id = elementID;
        this.elementReference = $( "#"+this.id);
    }


    notify(checked:boolean) {
        if (checked === true) {
            this.elementReference.prop("readonly", false);
        } else {
            this.elementReference.prop("readonly", true);
        }
    }
}