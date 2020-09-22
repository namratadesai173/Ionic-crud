import { FormGroup, FormControl, Validators } from '@angular/forms';

export class product {
    name:string;
    price:string;
    id:string;
}

export class productModelFormBuilder {

    productModel: product = {
      name: null,
      price: null,
      id: null
    };
  
    productForm: FormGroup = new FormGroup({
      name: new FormControl(this.productModel.name, [Validators.required]),
      price: new FormControl(this.productModel.price, [Validators.required]),
      id: new FormControl(this.productModel.id)
    });
  
    constructor() {
      this.productForm.valueChanges.subscribe(val => {
        this.productModel.name = val.name;
        this.productModel.price = val.price;
        this.productModel.id = val.id;
      });
    }
  
    setModelVals(res: any) {
      this.productForm.controls.name.setValue(res.name);
      this.productForm.controls.price.setValue(res.price);
      this.productForm.controls.id.setValue(res.id);
    }
}
    