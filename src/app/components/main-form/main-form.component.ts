import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  constructor() {}

  statusForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    client: new FormControl(''),
    project: new FormControl(''),
    completed: new FormArray([new FormControl('')]),
    inProgress: new FormArray([new FormControl('')]),
    starting: new FormArray([new FormControl('')]),
    issues: new FormArray([new FormControl('')])
  });
  ngOnInit() {}

  get completedList() {
    return this.statusForm.get('completed') as FormArray;
  }
  get inProgressList() {
    return this.statusForm.get('inProgress') as FormArray;
  }
  get startingList() {
    return this.statusForm.get('starting') as FormArray;
  }
  get issuesList() {
    return this.statusForm.get('issues') as FormArray;
  }
  addToList(key) {
    console.log(key);
    this[key].push(new FormControl(''));
  }
  removeFromList(key, index) {
    console.log(key, index);

    this[key].removeAt(index);
  }

  onSubmit() {
    console.log(this.statusForm);
  }
}
