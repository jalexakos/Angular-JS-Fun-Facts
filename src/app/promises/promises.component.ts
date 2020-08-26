import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  // Data for promises list
  promise_states = [
    "pending - state at initialization; not yet fulfilled or rejected",
    "fulfilled - successful completion of the operation",
    "rejected - failure to complete the operation"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
