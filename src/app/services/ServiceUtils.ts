import {HttpHeaders} from '@angular/common/http'


const rootUrl = "https://localhost:7029/"


export const url = {
 apiUrlProducts: `${rootUrl}api/Products`,
 apiUrlProductsByCat:`${rootUrl}api/Products/ProductByCategory/`,
 apiUrlCategories : `${rootUrl}api/Categories`,
 apiUrlCustomers : `${rootUrl}api/Customer`,
 apiUrlSales : `${rootUrl}api/Sales`,
 apiUrlLocation:`${rootUrl}api/Location`,
 apiUrlUnitedStates:`${rootUrl}api/UnitedStates`,
 apiUrlCarts:`${rootUrl}api/Carts`,
 apiUrlStore:`${rootUrl}api/Store`,
 apiUrlShipping:`${rootUrl}api/shipping`,
 apiUrlGetCustomerId:`${rootUrl}api/Customer/get_customer_id?`

}

export const httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
