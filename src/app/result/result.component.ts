import { Component, Input, OnInit } from '@angular/core';
import { DataModel, DataService, Merchant } from '../data.service';
import { Filter } from '../filter/filter.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input()
  filter: Filter;

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

  get subcategory(): string[] {
    if (this.filter.subcategory === 'all') {
      return this.data.categories.find((category) => category.name === this.filter.category).subcategories;
    }
    return [this.filter.subcategory];
  }

  get filteredMerchants(): Merchant[] {
    return this.data.merchants.filter(
      (merchant) =>
        (this.filter.province === 'nearby' || merchant.addressProvinceName === this.filter.province) &&
        (['', 'all'].includes(this.filter.priceRange) ||
          merchant.priceLevel === parseInt(this.filter.priceRange, 10)) &&
        (this.filter.category === 'all' || this.subcategory.includes(merchant.subcategoryName))
    );
  }
}
