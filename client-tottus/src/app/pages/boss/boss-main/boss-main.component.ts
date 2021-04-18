import { OrderService } from './../../../services/order.service';
import { PersonService } from './../../../services/person.service';
import { ProductService} from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boss-main',
  templateUrl: './boss-main.component.html',
  styleUrls: ['./boss-main.component.css']
})
export class BossMainComponent implements OnInit {
  rls: any[] = [];
  products: any[] = [];
  orders: any[] = [];
  constructor(
    private personService: PersonService,
    private orderService: OrderService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getRls();
    this.getOrders();
  }

  getProducts(): void {
    // tslint:disable-next-line: deprecation
    this.productService.list().subscribe(
      (products) => this.products = products,
      console.error,
    );
  }
  getRls(): void {
    // tslint:disable-next-line: deprecation
    this.personService.listRL().subscribe(
      (rls) => this.rls = rls,
      console.error,
    );
  }
  getOrders(): void {
    // tslint:disable-next-line: deprecation
    this.orderService.list().subscribe(
      (orders) => this.orders = orders,
      console.error,
    );
  }

  productById(id: number): string {
    return this.products.filter(p => p.id == id )[0] || '--';
  }

  rlById(id: number): string {
    return this.rls.filter(p => p.id == id )[0] || '--';
  }


  assign(orderId: number, personId: number): void {
    this.orderService.assign(orderId, personId).subscribe(
      (order) => this.getOrders(),
      console.error,
    );
  }

}
