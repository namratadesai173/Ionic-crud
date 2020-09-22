import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private loadingController : LoadingController,
    private productService : ProductService) {}
    
  ngOnInit(): void {
    this.getAllProduct();
  }

    productList : any;
    page_number = 1;
    page_limit = 10;

  async getAllProduct() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1000
    });
    loading.present();
  
    let request = {
      "pageNumber":this.page_number,
      "pageSize":this.page_limit,
      "sortBy":'name',
      "sortDirection":'ASC',
      "parameters": null
    }
    
    this.productService.getAllProduct(request).subscribe((res :any) => {
     // loading.remove();
     console.log("lll =="+JSON.stringify(res));
      this.productList = res.body.data;
    });
  }

}
