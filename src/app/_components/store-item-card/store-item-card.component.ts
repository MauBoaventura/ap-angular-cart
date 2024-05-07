import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../types/Product';
import { IItem } from '../../types/Item';

@Component({
  selector: 'app-store-item-card',
  templateUrl: './store-item-card.component.html',
  styleUrl: './store-item-card.component.css',
})
export class StoreItemCardComponent {
  @Input() product: IProduct | undefined;

  @Output() handleAddToCart = new EventEmitter<any>();

  handleAddToCartClick() {
    this.handleAddToCart.emit(this.product);
  }

  constructor() {}
}
