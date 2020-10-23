import { Component } from '@angular/core';
import { QuestionModel } from './models/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';
  questions: Array<QuestionModel> = [
    {
      title: 'ვინ იყო შოთა რუსთაველი',
      answers: [
        'მწერალი', 'მეფე'
      ],
      correctAnswer: 'მწერალი',
      category: 'ქართული'
    },
    {
      title: 'how much is 3 + 2',
      answers: [
        '2', '5', '4'
      ],
      correctAnswer: '5',
      category: 'მათემატიკა'
    },
    {
      title: 'how much is 3 + 3',
      answers: [
        '2', '5', '6'
      ],
      correctAnswer: '6',
      category: 'მათემატიკა'
    },
  ];
  categoryNotChosen = true;
  category: string;
  points = 0;
  currentQuestionIndex = 0;

  onNextClicked(wasCorrect: boolean) {
    this.currentQuestionIndex++;
    if (wasCorrect) {
      this.points++;
    }
  }

  get questionsToAsk() {
    return this.questions.filter((question) => {
      console.log(this.category);
      return question.category === this.category;
    })
  }
  
  categoryChosen() {
    this.categoryNotChosen = false;
  }
}
