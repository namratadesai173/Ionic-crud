import { Component } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private productService : ProductService) {}

  todayDate = new Date();
  productList : any;

  searchByDate() {
  let filterFields = null;
  filterFields = {"createdDate": this.todayDate}

   let request = {
    "pageNumber":null,
    "pageSize":null,
    "sortBy":'name',
    "sortDirection":'ASC',
    "parameters": filterFields
  }

   this.productService.findProductByDate(request).subscribe(res => {
    this.productList = res.body;
   });
 }

}
