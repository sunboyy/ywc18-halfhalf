import { Component } from '@angular/core';
import { Filter } from './filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter: Filter = {
    category: 'ร้านอาหารและเครื่องดื่ม',
    province: 'nearby',
    priceRange: '',
    subcategory: 'all',
  };
}
