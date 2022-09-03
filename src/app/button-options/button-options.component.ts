import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-options',
  templateUrl: './button-options.component.html',
  styleUrls: ['./button-options.component.css']
})
export class ButtonOptionsComponent implements OnInit {

  @Input() variavel = '';

  constructor() { }

  ngOnInit(): void {
  }

}
