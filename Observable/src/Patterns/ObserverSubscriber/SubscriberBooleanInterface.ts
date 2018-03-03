import { ObserverBooleanInterface } from "./ObserverBooleanInterface";

export interface SubscriberBooleanInterface {
    subscribe( observer:ObserverBooleanInterface ):void;
    unsubscribe( observer:ObserverBooleanInterface );
    notifyAll();
}