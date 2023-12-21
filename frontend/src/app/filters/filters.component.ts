import { Component, EventEmitter, Output } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();

  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getProduct()
      .subscribe((response) =>
        // this.categories = response;
        this.categories = [...this.extractUniqueCategories(response)]
        // (categories) => {
        //   this.categories = ['All', ...categories];
        // }
        // (error) => {
        //   console.error('Error loading categories', error);
        // }
      );
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

  private extractUniqueCategories(products: Product[]): string[] {
    // Extract unique categories from the products
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    return uniqueCategories;
  }
}
