import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductList implements OnInit, OnDestroy{

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: x => {
        this.products = x;
        this.filteredProducts = this.products;
      },
      error: x => this.errorMessage = x
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  sub!: Subscription;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage: string = '';

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter(x => x.productName.toLowerCase().includes(filterBy.toLowerCase()));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
