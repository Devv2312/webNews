import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  technewsdisplay:any = [];
  
  ngOnInit(): void {
    this._services.technews().subscribe((result) => {
      console.log(result);
      this.technewsdisplay = result.articles;
    });
  }
}
