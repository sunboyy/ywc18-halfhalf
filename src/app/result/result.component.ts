import { Component, OnInit } from '@angular/core';
import { DataModel, DataService } from '../data.service';
import { Filter } from '../filter/filter.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  filter: Filter = {
    category: 'ร้านอาหารและเครื่องดื่ม',
    province: 'nearby',
    priceRange: '',
    subcategory: 'all',
  };
  data: DataModel = {
    categories: [],
    provinces: [],
    priceRange: [],
    merchants: [],
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
