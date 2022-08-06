import { Formik } from "formik";

class FormValidator {
    constructor(form) {
        this.form = form;
        this.formArray = Array.from(this.form);
    }
    consoleArray() {
        console.log(this.formArray);
    }
}

export default FormValidator;
