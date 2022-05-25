import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Product,Category, Customer,Sale, Cart, Address, CustomerInfo} from "../../DataInterfaces";
import { url, httpOptions } from '../ServiceUtils';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  addCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(url.apiUrlCategories, category, httpOptions)
  }

  addCustomer(customers:Customer):Observable<Customer>{
    return this.http.post<Customer>(url.apiUrlCustomers, customers, httpOptions)
  }

  addSales(sale:Sale):Observable<Sale>{
    return this.http.post<Sale>(url.apiUrlSales, sale, httpOptions)
  }

  addProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(url.apiUrlProducts, product, httpOptions)
  }

  addCustomerAddress(address:Address):Observable<Address>{
    return this.http.post<Address>(url.apiUrlShipping, address, httpOptions)
  }

  addCustomerInfo(customerInfo:CustomerInfo):Observable<CustomerInfo>{
    return this.http.post<CustomerInfo>(url.apiUrlCustomers, customerInfo,httpOptions)
  }

  addLocation(data: Location):Observable<Location>{

    return this.http.post<Location>(url.apiUrlLocation, data, httpOptions)
  }


  addCart(data: Cart[]):Observable<Cart[]>{

    return this.http.post<Cart[]>(url.apiUrlCarts, data, httpOptions)
  }

}
