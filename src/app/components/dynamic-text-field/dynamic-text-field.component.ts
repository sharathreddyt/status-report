import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-text-field',
  templateUrl: './dynamic-text-field.component.html',
  styleUrls: ['./dynamic-text-field.component.css']
})
export class DynamicTextFieldComponent implements OnInit {
  @Input() title;
  @Input() fArray;
  @Input() fGroup: FormGroup;
  public sectionTitle: string;

  formArray = new FormArray([]);
  constructor() {}

  get formArrayList() {
    return this.fGroup.get(this.fArray) as FormArray;
  }
  addToList() {
    this.formArrayList.push(new FormControl(''));
  }
  removeFromList(index) {
    console.log(index);

    this.formArrayList.removeAt(index);
  }

  ngOnInit() {
    this.sectionTitle = this.title;
    console.log(this.fGroup, this.fArray, this.title);
  }
}
