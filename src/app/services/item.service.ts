import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string = "https://api.codebyte-software.com:2323/api/items";

  private itemsList:Array<any> = [];
  private itemSubject = new BehaviorSubject<Array<any>>([]);

  constructor(private httpClient: HttpClient) {
    this.readItems();
  }

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
        this.readItems();
      });
  }

  readItems(){
    this.httpClient.get(this.apiUrl).subscribe((response: any)=> {
      console.log(response);
      console.log(response.data);
     // this.itemsList = response.data;

      // metoda next anunta toti abonatii (cei cu subscribe) ca au aparut modificari
      this.itemSubject.next(response.data);
    });
  }

  deleteItem(id: string){
    //this.apiUrl+"/"+id
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response: any) => {
      console.log(response)
      this.readItems();
    })
  }

  getItemList(){
    // return this.itemsList;

    return this.itemSubject.asObservable(); // asObservable ne va permite sa dam subscribe si sa fim la zi cu toate modificarile
  }

  updateItem(item: any){
    let body = {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl : item.imageUrl

    };
    this.httpClient.put(this.apiUrl, body).subscribe((response: any) => {
      console.log(response)
      this.readItems();
    })
  }
}
