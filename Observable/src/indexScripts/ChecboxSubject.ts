
import { SubscriberNumberInterface } from '../Patterns/SubscriberNumberInterface';
import { ObserverNumberInterface } from '../Patterns/ObserverNumberInterface';


export class ChecboxSubject implements SubscriberNumberInterface {
    observers:ObserverNumberInterface[];
    checked:boolean;


    constructor() {
        this.observers = [];
    }

    notify(checked:boolean) {
        this.checked = checked;
        this.notifyAll();
    }

    subscribe( observer:ObserverNumberInterface ) {
        this.observers.push( observer );
    }

    unsubscribe( observer:ObserverNumberInterface ) {
        let index = this.observers.indexOf( observer );
        if (index > -1) {
            this.observers.slice(index, 1);
        }
    }

    notifyAll() {
        for( let o of this.observers ) {
            o.notify(this.checked);
            console.log(o.name + " has been notified");
        }
    }
}