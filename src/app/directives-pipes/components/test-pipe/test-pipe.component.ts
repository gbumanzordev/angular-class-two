import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.scss'],
})
export class TestPipeComponent implements OnInit {
  birthDate = new Date('1998-11-13 12:00:00');
  toggle = true;

  // JSON
  person = {
    person: {
      name: 'Roy Lee',
      age: 50,
    },
    person2: {
      name: 'John McKlain',
      age: 65,
    },
  };

  courseCompletion = 0.3;

  name = 'Donald Trump';

  amount = 5000;

  get format() {
    return this.toggle ? 'fullDate' : 'shortDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  constructor() {}

  ngOnInit(): void {}
}
