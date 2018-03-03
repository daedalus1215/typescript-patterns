import { ObserverNumberInterface } from "./ObserverNumberInterface";

export interface SubscriberNumberInterface {
    subscribe( observer:ObserverNumberInterface ):void;
    unsubscribe( observer:ObserverNumberInterface );
    notifyAll();
}