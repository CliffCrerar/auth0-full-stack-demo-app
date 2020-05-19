import { Component, OnInit } from '@angular/core';
import { HttpTransportService} from '../_services/http-transport.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public SectionState: 'List' | 'Edit';
  constructor(private http: HttpTransportService) {
    this.SectionState = 'List';
  }

  set sectionState(newState: string) {
    this.sectionState = newState;
  }

  ngOnInit(): void {
    this.http.retrieveProducts().subscribe((payload) => {
      console.log('payload: ', payload);

    }, (error) => {
      console.log('error: ', error);

    });
  }

}
