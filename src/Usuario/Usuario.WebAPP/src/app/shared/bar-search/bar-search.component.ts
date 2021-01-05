import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.scss']
})
export class BarSearchComponent implements OnInit {

  @Input() placeholder = 'Pesquise...';
  @Output() onSearch: EventEmitter<String> = new EventEmitter();
  public nome;
  constructor() { }

  ngOnInit() {
  }

  submitSearch(){
    this.onSearch.emit(this.nome);
  }

}
