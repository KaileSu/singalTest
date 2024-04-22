import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { signal, computed } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {

  // Create a signal for the array of products
 products = signal([
  { name: 'Product A', price: 10 },
  { name: 'Product B', price: 15 },
  { name: 'Product C', price: 20 },
 ]);
 // Create a computed signal for total value based on products
  totalValue = computed(() =>
  this.products().reduce((sum:number, product: any) => sum + product.price, 0)
 );
 //reading the signal
 
  constructor() {

    console.log("computed2",this.totalValue());  Output: 45
  }

  addContact(){
    let n = prompt("Name");
    let p = Number(prompt("Price"));
    this.products.update((val:any)=>[...val, { name: n, price: p }])

    


    
  }
}
