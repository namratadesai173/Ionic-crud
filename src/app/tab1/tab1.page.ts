import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  productList: any;
  searchText : any;
  page_number = 1;
  page_limit = 5;
  totalProducts : any;
  list : any = [];
  rowData : any = [];

  
  constructor(private productService: ProductService,
    private modelController : ModalController,
    private route : Router,
    private loadingController : LoadingController) {}

    columnDefs = [
      {headerName: 'Name', field: 'name', sortable: true},
      {headerName: 'Price', field: 'price', sortable: true}
    ]


  ngOnInit() {
    this.getLoader();
    this.getAllProduct(true, event);
    this.list = [];
  }

  async getLoader() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1000
    });
    loading.present();
  }

  async getAllProduct(firstLoad, event) {

    let request = {
      "pageNumber":this.page_number,
      "pageSize":this.page_limit,
      "sortBy":'name',
      "sortDirection":'ASC',
      "parameters": null
    }
    console.log("pageNumber =="+this.page_number);
    console.log("pageSize =="+this.page_limit);
    console.log("list = "+this.list.length);

    this.productService.getAllProduct(request).subscribe((res : any) => {
      this.productList = res.body.data;
      for(var i = 0; i < this.productList.length; i++) {
        this.list.push(this.productList[i]);
        this.rowData.push(this.productList[i])
      }
      this.totalProducts = res.body.totalCount;

      
    //  console.log("list afetr= "+this.list.length);
      
    });
    // for( var i = 0; i < this.list.length; i++) {
    //   console.log("After call list = "+JSON.stringify(this.list[i]));
    // }
   // console.log("list afetr= "+this.list.length);
         
    // if(this.list.length == this.totalProducts) {
    //   console.log("event complete");
    //   event.target.complete();
    // }
  }

  doInfinite(event : any){
    console.log("in do infinite");
        this.page_number++;
        this.getAllProduct(true, event);
      //  console.log("this.list.length = "+this.list[0].length +" this.totalProducts = "+this.totalProducts);
        // if(this.list.length == this.totalProducts) {
        //     console.log("event complete");
        //     event.target.complete();
        //   }
  }


  updateProduct(product: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        product: product,
        edit: true
      }
    };
    this.route.navigate(['/product-add', product], navigationExtras);
  }

  deleteProduct(id : any) {
    this.productService.deleteProduct(id).subscribe(res => {
    this.getAllProduct(true, event);
    })
  }

 

  
  // search() {
  //   console.log("searchText ="+JSON.stringify(this.searchText));
  //   const data = this.productList.fil

  // }

  // searchInData(): void {
  //   /** filter data **/

  //   const filterFunc = item => (this.search ? item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 : true) 
  //   || (this.search ? item.type.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 : true) 
  //   ||  (this.search ? item.country.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 : true)
  //   || this.filterState(item);
    
  //   const data = this.RegionList.filter(item => filterFunc(item));
  //   /** sort data **/
  //   if (this.sortName) {
  //     this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
  //   } else {
  //     this.displayData = data;
  //   }
  // }



}
