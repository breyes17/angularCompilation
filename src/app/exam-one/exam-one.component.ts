import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-one',
  templateUrl: './exam-one.component.html',
  styleUrls: ['./exam-one.component.css']
})
export class ExamOneComponent implements OnInit {

    textInput = ''
    // ret = false;

  constructor() { }

  ngOnInit() {
  }

addColor(){
    let txt = this.textInput.trim().toLowerCase();
    if(txt === 'red'){
        return 'red'
    }
    else if(txt === 'green'){
        return 'green'
    }
    else {
        return '#000'
    }
}

// classColor(){
//     if(this.textInput === 'green'){
//         console.log(this.ret m)
//         return this.ret = true;
//     }
// }

}
