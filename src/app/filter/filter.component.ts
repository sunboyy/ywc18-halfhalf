import { Component, Input } from '@angular/core';
import { DataModel } from '../data.service';

export interface Filter {
  category: string;
  province: string;
  priceRange: string;
  subcategory: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input()
  data: DataModel;

  @Input()
  filter: Filter;

  get subcategories() {
    const category = this.data.categories.find((c) => c.name === this.filter.category);
    if (!category) {
      return;
    }
    return category.subcategories;
  }
}
