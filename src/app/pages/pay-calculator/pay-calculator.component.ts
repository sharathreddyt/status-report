import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { PayCalculatorService } from './pay-calculator.service';

@Component({
	selector: 'app-pay-calculator',
	templateUrl: './pay-calculator.component.html',
	styleUrls: [ './pay-calculator.component.css' ]
})
export class PayCalculatorComponent implements OnInit {
	constructor(private calculatorService: PayCalculatorService) {}
	calculatorForm = new FormGroup({
		hours: new FormControl(''),
		payRate: new FormControl(''),
		exemptFederal: new FormControl(false),
		exemptFica: new FormControl(true),
		exemptMedicare: new FormControl(true)
	});

	private result: any;
	private error: any;
	ngOnInit() {}

	onSubmit() {
		const {
			hours,
			payRate,
			exemptFederal,
			exemptFica,
			exemptMedicare
		} = this.calculatorForm.controls;
		const grossPay: any = hours.value * payRate.value;
		this.calculatorService
			.calculatePay({
				grossPay,
				exemptFederal: exemptFederal.value,
				exemptFica: exemptFica.value,
				exemptMedicare: exemptMedicare.value
			})
			.subscribe(
				(pay: any) => {
					console.log(pay);
					this.result = pay.content;
				},
				error => {
					this.error = error;
				}
			);
		console.log(this.calculatorForm.controls);
	}
}
