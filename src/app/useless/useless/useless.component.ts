import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useless',
  templateUrl: './useless.component.html',
  styleUrls: ['./useless.component.scss']
})
export class UselessComponent implements OnInit {

  public words = ['AAA', 'BBB', 'CCC']

  constructor() { }

  ngOnInit(): void {
  }

}
