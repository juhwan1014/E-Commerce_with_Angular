import { Component, OnInit } from '@angular/core';
import { Product} from '../special.model';
@Component({
  selector: 'app-special-item',
  templateUrl: './special-item.component.html',
  styleUrls: ['./special-item.component.css']
})
export class SpecialItemComponent implements OnInit {


  products: Product[] = [
    new Product('Special Vases Set', '359.00', './assets/images/flower/111.jpg'),
    new Product('Special Vase A', '180.00', './assets/images/flower/222.jpg'),
    new Product('Special Vase B', '162.00', './assets/images/flower/333.jpg'),
    new Product('Special Vase C', '174.00', './assets/images/flower/444.jpg')
]
  constructor() { }

  ngOnInit(): void {
  }

}
