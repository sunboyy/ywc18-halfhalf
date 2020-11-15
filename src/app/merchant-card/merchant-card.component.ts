import { Component, Input } from '@angular/core';
import { Merchant } from '../data.service';

@Component({
  selector: 'app-merchant-card',
  templateUrl: './merchant-card.component.html',
  styleUrls: ['./merchant-card.component.scss'],
})
export class MerchantCardComponent {
  @Input()
  merchant: Merchant;

  getPriceRangeB(n: number): string {
    return '฿'.repeat(n);
  }

  getRecommendedMenus() {
    return this.merchant.recommendedItems.join(', ');
  }

  getFacilityIcon(facility: string): string {
    return 'https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/' + facility + '.png';
  }
}
