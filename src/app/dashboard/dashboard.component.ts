import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../services/short-url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  btnString = 'Shorter';
  url = '';
  urlShort = '';
  constructor(private shortUrlService: ShortUrlService) { }

  ngOnInit(): void {
  }

  shorter() {
    if(this.btnString == 'Shorter'){
      this.shortUrlService.getUrlShort(this.url).subscribe(data => {
        console.log(data);
        this.urlShort = data.link;
      });
      this.btnString = 'Reset';
    }else{
      this.btnString = 'Shorter';
      this.url = '';
      this.urlShort = '';
    }
  }

}
