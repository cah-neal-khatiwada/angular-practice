import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'http://dummyimage.com/133x100.png/cc0000/ffffff'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}