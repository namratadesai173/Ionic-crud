import { Component, OnInit } from '@angular/core';
import { product, productModelFormBuilder } from '../shared/models/product-model';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {


  product: productModelFormBuilder = new productModelFormBuilder();
  productModel : product = this.product.productModel;
  productList: any;
  page_number = 1;
  page_limit = 5;

  constructor(private productService: ProductService,
    private route : Router,
    private router : ActivatedRoute,
    private alertController : AlertController) { }

  ngOnInit() {

    this.router.queryParams.subscribe(params => {
         if(this.route.getCurrentNavigation() && this.route.getCurrentNavigation().extras.state && this.route.getCurrentNavigation().extras.state.edit == true) {
              this.productModel = this.route.getCurrentNavigation().extras.state.product;
         } else {
          this.productModel;
        }
    });

    // this.route.params.subscribe(params =>{
    //   this.productModel = params["product"];
     
    // });
    // if(this.productModel.name != null) {
    //   this.productModel
    // } else {
    //   this.productModel;
    // }
   
  }

  addProduct() {
    if (this.productModel.id != null) {
        this.productService.updateProduct(this.productModel).subscribe((res) =>{
          this.getAlert('Upadated');
        });
        
    } else {
      this.productService.saveProduct(this.productModel).subscribe((res) => {
        this.getAlert('Added');
      });
    }
    this.getAllProduct();
    
    this.route.navigate(['']);
  }

  getAllProduct() {
    let request = {
      "pageNumber":this.page_number,
      "pageSize":this.page_limit
    }
    this.productService.getAllProduct(request).subscribe(res => {
      this.productList = res;
    });
  }
  
  async getAlert(status: String) {
    let productName = this.productModel.name; 
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: productName +' '+status,
      buttons: ['OK']
    });
    await alert.present();
  }
}
