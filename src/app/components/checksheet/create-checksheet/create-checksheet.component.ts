import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChecksheetService } from '../../../services/checksheet.service';
import { AngularFirestore } from "@angular/fire/compat/firestore";

interface names {
  value: string,
  viewValue: string;
}

@Component({
  selector: 'app-create-checksheet',
  templateUrl: './create-checksheet.component.html',
  styleUrls: ['./create-checksheet.component.css']
})
export class CreateChecksheetComponent implements OnInit {
  createForm: FormGroup;
  testersAssigned = []
  testerIcons = []
  testerUids = []
  names: names[] = [
    {value: 'Gregory Strydom', viewValue: 'Gregory Strydom'},
    {value: 'Carmen Gregor', viewValue: 'Carmen Gregor'},
    {value: 'Heather Courage', viewValue: 'Heather Courage'}
  ];

  constructor(private fb: FormBuilder, private checksheetService: ChecksheetService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      'name': ['', [
        Validators.required,
      ]
      ],
      'testersAssigned': ['', [
        Validators.required
      ]
      ],
      'connectVersion': ['', [
        Validators.required
      ]
      ],
      'immerseVersion': ['', [
        Validators.required
      ]
      ],
      'eventLink': ['', [
        Validators.required
      ]
      ],
      'bugDoc': ['', [
        Validators.required
      ]
      ],
    });
  }

  addToAssigned(option) {
    if (!this.testersAssigned.includes(option.value)) {
      this.testersAssigned.push(option.value)
    }
  }

  createChecksheet() {
    if (this.checksheetService.checkIfChecksheetExists(this.createForm.value.name)) {
      return false
    } else {
      this.testersAssigned.forEach((tester) => {
        const firstName = tester.substring(0, tester.indexOf(' '))
        const lastName = tester.substring(tester.indexOf(' ') +1)
        let userImg = new Image();
        userImg.src = `https://ui-avatars.com/api/?background=random&rounded=true&name=${firstName}+${lastName}`
        this.testerIcons.push(userImg);
      })
      this.testerUids = ['wwwwwwwwwwwwwwwwwwwwwwww', 'wwwwwwwwwwwwwwwwwwwwwwwww']
      this.checksheetService.addChecksheet(this.createForm, this.testerIcons, this.testerUids);
      return true
    }
  }
}
