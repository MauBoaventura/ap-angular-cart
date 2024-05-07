import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IProduct } from '../../types/Product';
import { IItem } from '../../types/Item';

@Component({
  selector: 'app-store-sidebar',
  templateUrl: './store-sidebar.component.html',
  styleUrl: './store-sidebar.component.css',
})
export class StoreSidebarComponent implements  DoCheck {
  @Input() cart: IItem[] | undefined = [];

  @Output() handleRemoveOneFromCart = new EventEmitter<any>();
  @Output() handleAddToCart = new EventEmitter<any>();
  @Output() handleCheckout = new EventEmitter<any>();

  handleRemoveOneFromCartClick(product: IProduct ) {
    console.log(product);
    this.handleRemoveOneFromCart.emit(product);
  }
  handleAddToCartClick(product: any) {
    this.handleAddToCart.emit(product);
  }
  handleCheckoutClick() {
    this.handleCheckout.emit();
  }

  total: number = 0;

  constructor() {}

  ngDoCheck(): void {
    this.total =
      this.cart?.reduce(
        (acc, curr) => acc + curr.product.value * curr.quant,
        0
      ) || 0;
  }
}
