import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  @Input() title;
  @Input() col;
  @Input() tipo = 'default';
  @Input() color;
  constructor() { }

  ngOnInit() {
  }

}
