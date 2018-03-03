import { a_ChecboxSubject } from "../Component/atom/a_ChecboxSubject";
import { a_TextElementObserver } from "../Component/atom/a_TextElementObserver";
import { a_SubmitButtonObserver } from "../Component/atom/a_SubmitButtonObserver";


var checkboxSubject = new a_ChecboxSubject();

var textElementObserver = new a_TextElementObserver("m_signup-form__text-edit");
var submitButtonObserver = new a_SubmitButtonObserver("m_signup-form__submit");

checkboxSubject.subscribe( textElementObserver );
checkboxSubject.subscribe( submitButtonObserver );

$("#m_signup-form__checkbox").click(function() {    
    checkboxSubject.notify(this.checked);
});
