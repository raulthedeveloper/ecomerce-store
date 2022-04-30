import {HttpHeaders} from '@angular/common/http'



export const url = {
 apiUrlProducts: "https://localhost:7029/api/Products",
 apiUrlProductsByCat:"https://localhost:7029/Products/ProductByCateogry?id=",
 apiUrlCategories : "https://localhost:7029/api/Categories",
 apiUrlCustomers : "https://localhost:7029/api/Customers",
 apiUrlSales : "https://localhost:7029/api/Sales",
 apiUrlLocation:"https://localhost:7029/api/Location",
 apiUrlUnitedStates:"https://localhost:7029/api/UnitedStates",
 apiUrlCarts:"https://localhost:7029/api/Carts"

}

export const httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
