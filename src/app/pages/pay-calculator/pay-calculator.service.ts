import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import payload from './payload';
@Injectable({
	providedIn: 'root'
})
export class PayCalculatorService {
	constructor(private http: HttpClient) {}

	calculatePay(formValues) {
		return this.http.post(
			'https://calculators.symmetry.com/api/calculators/salary',
			{ ...payload, ...formValues },
			{
				headers: {
					'Content-Type': 'application/json',
					'pcc-api-key': 'QTBqNGZaOHEzbHdOSnVHcFJvWE50Zz09'
				}
			}
		);
	}
}
