import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionModel } from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionModel;
  @Input() currentQuestionIndex: number;
  @Input() questionIndex: number;
  
  userAnswer: string;
  @Output() nextClicked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    const wasCorrect = this.userAnswer === this.question.correctAnswer;
    this.nextClicked.emit(wasCorrect);
  }

}
