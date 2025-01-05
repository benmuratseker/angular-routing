import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent {
  readonly cartService = inject(CartService);
  featuredProducts = this.cartService.featuredPiesPlusQuantity;
}
