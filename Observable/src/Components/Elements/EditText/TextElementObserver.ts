/// <reference path="../../../../jquery.d.ts" />
import { ObserverBooleanInterface } from "../../../Patterns/ObserverSubscriber/ObserverBooleanInterface";





/**
 * Simple Text Element Observer. 
 * If notified true, we make sure we can edit the text element field. 
 * Otherwise we make sure that it is uneditable.
 * Starts off making the edit text read only, until notified.
 */
export class TextElementObserver implements ObserverBooleanInterface {
    name:string;
    id:string;
    elementReference:any;

    /**
     * 
     * @param {string} elementID the element's id in a string format.
     */
    constructor(elementID:string) {
        this.name = elementID;
        this.id = elementID;
        this.elementReference = $( "#"+this.id);
        this.elementReference.prop("readonly", true);
    }


    
    notify(checked:boolean) {
        if (checked === true) {
            this.elementReference.prop("readonly", false);
        } else {
            this.elementReference.prop("readonly", true);
        }
    }
}