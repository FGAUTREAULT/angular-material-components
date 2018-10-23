import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-components';

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

}
