import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

export interface Merchant {
  shopNameTH: string;
  categoryName: string;
  subcategoryName: string;
  coverImageId: string;
  facilities: string[];
  priceLevel: number;
  isOpen: string;
  highlightText: string;
  recommendedItems: string[];
  addressProvinceName: string;
  addressDistrictName: string;
}

export interface DataModel {
  categories: {
    name: string;
    subcategories: string[];
  }[];
  provinces: string[];
  priceRange: string[];
  merchants: Merchant[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private isLoading = false;

  // stub because of CORS
  private data = new BehaviorSubject<DataModel>(undefined);

  constructor(private httpClient: HttpClient) {}

  private loadData(): Observable<DataModel> {
    this.isLoading = true;
    return this.httpClient.get<DataModel>('https://panjs.com/ywc18.json').pipe(
      tap({
        error: () => (this.isLoading = false),
        complete: () => (this.isLoading = false),
      })
    );
  }

  getData(): Observable<DataModel> {
    if (!this.data.getValue() && !this.isLoading) {
      this.loadData().subscribe((response) => this.data.next(response));
    }
    return this.data.pipe(filter((data) => data !== undefined));
  }
}
