import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string = "https://api.codebyte-software.com:2323/api/items";

  constructor(private httpClient: HttpClient) { }

  // displayInfo():void {
  //   console.log("Acesta este un mesaj!")
  // }

  createItem(item: any) {
    let body = {
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl : item.imageUrl

    };
      this.httpClient.post(this.apiUrl, body).subscribe((response: any) => {
        console.log(response)
      });
  }

  readItems(){
    this.httpClient.get(this.apiUrl).subscribe((response: any)=> {
      console.log(response);
    });
  }

  deleteItem(id: string){
    //this.apiUrl+"/"+id
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response: any) => {
      console.log(response)
    })
  }
}
