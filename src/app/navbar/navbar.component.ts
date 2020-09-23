import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  searchText;
  @Output('search') search = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  searching() {
    this.search.emit(this.searchText);
  }

}
