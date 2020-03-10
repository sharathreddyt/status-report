import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {
	MatInputModule,
	MatButtonModule,
	MatSelectModule,
	MatIconModule,
	MatFormFieldModule,
	MatToolbarModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatCardModule,
	MatCheckboxModule,
	MatDividerModule,
	MatListModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainFormComponent } from './components/main-form/main-form.component';
import { PayCalculatorComponent } from './pages/pay-calculator/pay-calculator.component';
import { PayCalculatorService } from './pages/pay-calculator/pay-calculator.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainFormComponent,
		PayCalculatorComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatIconModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCardModule,
		DragDropModule,
		MatCheckboxModule,
		MatDividerModule,
		MatListModule
	],
	providers: [ PayCalculatorService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
