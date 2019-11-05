import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { IMAGE_BASE_64 } from 'app/constants';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
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
  ngOnInit() {
    console.log(pdfMake);
  }

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
    this[key].push(new FormControl(''));
  }
  removeFromList(key, index) {
    this[key].removeAt(index);
  }
  formatDate(date, delimiter = '/') {
    if (!date) return;
    return this.appendZero([
      date.getMonth() + 1,
      date.getDate(),
      date.getFullYear()
    ]).join(delimiter);
  }
  appendZero(list) {
    return list.map(each => (each < 10 ? '0' + each : each));
  }
  getList(header, list) {
    const sectionHeader = {
      margin: [0, 15, 0, 0],
      table: {
        widths: ['*'],
        body: [
          [
            {
              fontSize: 10,
              fillColor: 'lightgrey',
              alignment: 'left',
              columns: [
                {
                  text: header,
                  style: 'subheader'
                }
              ]
            }
          ]
        ]
      }
    };
    const content = {
      ol: list.map(each => ({
        lineHeight: 1,
        margin: [2, 5, 0, 0],
        text: each
      }))
    };
    return [{ ...sectionHeader }, { ...content }];
  }

  onSubmit() {
    const {
      firstName,
      lastName,
      startDate,
      endDate,
      client,
      project,
      completed,
      inProgress,
      starting,
      issues
    } = this.statusForm.controls;

    pdfMake
      .createPdf({
        pageMargins: 72,
        header: function(currentPage, pageCount) {
          return {
            columns: [
              {
                image: IMAGE_BASE_64,
                alignment: 'left',
                fit: [100, 100],
                margin: [0, 30]
              }
            ]
          };
        },
        footer: function(currentPage, pageCount) {
          return {
            columns: [
              {
                text: currentPage.toString() + ' of ' + pageCount,
                alignment: 'center',
                margin: [0, 20, 0, 30]
              }
            ]
          };
        },
        content: [
          {
            style: 'header',
            text: 'weekly status report',
            alignment: 'center'
          },
          {
            style: 'tableExample',
            table: {
              heights: 20,
              widths: [100, 325],
              body: [
                ['Employee', firstName.value + ' ' + lastName.value],
                ['Start Date', this.formatDate(startDate.value) || ''],
                ['End Date', this.formatDate(endDate.value) || ''],
                ['client', client.value],
                ['project', project.value]
              ]
            }
          },
          this.getList('Tasks completed this week', completed.value),
          this.getList('Tasks in progress this week', inProgress.value),
          this.getList('Tasks starting next week', starting.value),
          this.getList('Issues for Immediate attention', issues.value)
        ],
        styles: {
          header: {
            fontSize: 28,
            bold: true,
            margin: [0, 20]
          },
          subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
            backgroundColor: 'red'
          },
          tableExample: {
            margin: [0, 5, 0, 15],
            height: 80
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
          }
        },
        defaultStyle: {
          alignment: 'justify'
        }
      })
      .download(
        [
          firstName.value,
          lastName.value,
          this.formatDate(startDate.value, ''),
          this.formatDate(endDate.value, '')
        ].join('_')
      );
  }
}
