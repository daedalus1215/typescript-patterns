import { ChecboxSubject } from "../../Components/Elements/Checkboxes/ChecboxSubject";
import { TextElementObserver } from "../../Components/Elements/EditText/TextElementObserver";
import { SubmitButtonObserver } from "../../Components/Elements/Buttons/SubmitButtonObserver";
/// <reference path="../../../jquery.d.ts" />





/**
 * Simple Signup form. 
 * Atomic BEM molecule pattern: https://css-tricks.com/abem-useful-adaptation-bem/  A-B__E -M:
 */
export class SignupForm {


    constructor() {
        var checkboxSubject = new ChecboxSubject("o-signupForm__checkbox");
        var textElementObserver = new TextElementObserver("o-signupForm__textEdit");
        var submitButtonObserver = new SubmitButtonObserver("o-signupForm__submit");

        checkboxSubject.subscribe( textElementObserver );
        checkboxSubject.subscribe( submitButtonObserver );

        $("#o-signupForm__checkbox").click(function() {    
            checkboxSubject.notify(this.checked);
        });
    }
}