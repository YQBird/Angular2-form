import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'complex-form',
	templateUrl: './app.complexform.html'
})

export class ComplexFormComponent{
	complexForm: FormGroup;

	constructor(fb: FormBuilder){
		this.complexForm = fb.group({
			'firstName' : '',
			'lastName' : '',
			'gender' : 'Female',
			'hiking' : false, 
			'swimming' : false, 
			'running' : false
		})
	}

	submitForm(value: any): void{
		console.log("Reactive Form Data: ");
		console.log(value);
	}
	
}