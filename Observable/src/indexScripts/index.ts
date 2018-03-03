
import { TextElementObserver } from './TextElementObserver';
import { ChecboxSubject } from './ChecboxSubject';


var checkboxSubject = new ChecboxSubject();

var textElementObserver = new TextElementObserver("message");


checkboxSubject.subscribe(textElementObserver);

$("#checkbox").click(function() {    
    checkboxSubject.notify(this.checked);
});
