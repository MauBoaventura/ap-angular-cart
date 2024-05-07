import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { IProduct } from '../../types/Product';
import { IItem } from '../../types/Item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit, DoCheck {
  @Input() cart: IItem[] | undefined = [];

  productsMock = [
    {
      id: '1',
      name: 'Item 1',
      description: 'Descrição do item 1',
      value: 10.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '2',
      name: 'Item 2',
      description: 'Descrição do item 2',
      value: 20.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '3',
      name: 'Item 3',
      description: 'Descrição do item 3',
      value: 30.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '4',
      name: 'Item 4',
      description: 'Descrição do item 4',
      value: 40.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '5',
      name: 'Item 5',
      description: 'Descrição do item 5',
      value: 50.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '6',
      name: 'Item 6',
      description: 'Descrição do item 6',
      value: 60.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '7',
      name: 'Item 7',
      description: 'Descrição do item 7',
      value: 70.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '8',
      name: 'Item 8',
      description: 'Descrição do item 8',
      value: 80.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '9',
      name: 'Item 9',
      description: 'Descrição do item 9',
      value: 90.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
    {
      id: '10',
      name: 'Item 10',
      description: 'Descrição do item 10',
      value: 100.0,
      isChecked: false,
      image: 'https://picsum.photos/40',
    },
  ] as IProduct[];

  constructor() {}

  handleAddToCart(product: IProduct) {
    if (this.cart?.some((i) => i?.product?.id === product?.id)) {
      this.cart?.map((i) => {
        if (i.product?.id === product.id) {
          i.quant += 1;
        }
      });
    } else {
      this.cart?.push({
        id: product.id,
        product: product,
        quant: 1,
      });
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }

  handleRemoveOneFromCart(product: IProduct) {
    this.cart?.map((i) => {
      if (i.product?.id === product.id) {
        i.quant -= 1;
      }
    });
    this.cart = this.cart?.filter((i) => i.quant > 0);

    localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }

  handleCheckout() {
    localStorage.removeItem('cartItems');
    this.cart = [];
  }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  ngDoCheck(): void {
    console.log(this.cart);
  }
}
