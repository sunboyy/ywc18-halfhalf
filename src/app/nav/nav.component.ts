import { Component, Input, OnInit } from '@angular/core';
import { DataModel, DataService } from '../data.service';
import { Filter } from '../filter/filter.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input()
  filter: Filter;

  data: DataModel = {
    categories: [],
    provinces: [],
    priceRange: [],
    merchants: [],
  };
  searchLocation = 'nearby';
  searchQuery = '';

  isDrawerVisible = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  openDrawer() {
    this.isDrawerVisible = true;
  }

  closeDrawer() {
    this.isDrawerVisible = false;
  }
}
