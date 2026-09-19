import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular'

export interface Product {
    id:number,
    name:string,
    category:number,
    unitPrice:number,
    quantity:number
}

const PRODUCT_KEY = 'products'
@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private storageReady: Promise<Storage>;
    constructor(private storage:Storage) {
        this.storageReady = this.storage.create();
    }

    ready() {
        return this.storageReady;
    }

    async createProduct(product:Product) {
        await this.ready();
        const products:Product[] = await this.storage.get(PRODUCT_KEY) || [];
        product.id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push(product);
        await this.storage.set(PRODUCT_KEY,products);
    }
}
