import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-one',
  templateUrl: './exam-one.component.html',
  styleUrls: ['./exam-one.component.css']
})
export class ExamOneComponent implements OnInit {

    textInput = ''

  constructor() { }

  ngOnInit() {
  }

addColor(){
    if(this.textInput === 'red'){
        return 'red'
    }
    else if(this.textInput === 'green'){
        return 'green'
    }
    else {
        return '#000'
    }
}

}
