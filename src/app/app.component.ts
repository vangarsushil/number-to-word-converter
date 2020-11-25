import { Component } from '@angular/core';
import { ToWords } from 'to-words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
    }
  });

  words = this.toWords.convert(452.2);
  secondwords= this.toWords.convert(546235);
  thirdword= this.toWords.convert(956874133);
}


