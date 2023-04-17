import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-calculator';

  public calValue: number = 0;
  public funcT: any = 'NoFunction';

  onClickValue(val: string, type: any) {
    console.log(val, type);
  }
}
