import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckProxyService } from '../chuck-proxy.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  publicQuote$: Observable<string>;

  constructor(private proxy: ChuckProxyService) { }

  ngOnInit(): void {}

  updateQuote() {
    this.publicQuote$ = this.proxy.getPublicQuote();
  }

}
