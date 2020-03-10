import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFormComponent } from './components/main-form/main-form.component';
import { PayCalculatorComponent } from './pages/pay-calculator/pay-calculator.component';

const routes: Routes = [
	{ path: 'home', component: MainFormComponent },
	{ path: 'calculator', component: PayCalculatorComponent },
	{ path: '**', component: MainFormComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
