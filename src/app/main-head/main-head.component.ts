import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-head',
  templateUrl: './main-head.component.html',
  styleUrls: ['./main-head.component.css'],

})
export class MainHeadComponent {
  title: string='';
  subtitle: string='';
  constructor(private route: ActivatedRoute){

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.subtitle = params['subtitle'];
    });
  }

}
