import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../../services/order.service';
import { ProductService} from './../../../services/product.service';

@Component({
  selector: 'app-rl-home',
  templateUrl: './rl-home.component.html',
  styleUrls: ['./rl-home.component.css']
})
export class RlHomeComponent implements OnInit {

  products: any[] = [];
  constructor(
    private productService: ProductService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    // tslint:disable-next-line: deprecation
    this.productService.list().subscribe(
      (products) => this.products = products,
      console.error,
    );
  }

  registerOrder(productId: number, quantity: number): void {
    // tslint:disable-next-line: deprecation
    this.orderService.register(productId, quantity).subscribe(
      (order) => alert('se genero la reposicion del producto'),
      console.error
    );
  }

}
