import {Component, EventEmitter, Output} from '@angular/core';
import {ItemService} from "../services/item.service";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-items', // modul in care apelam componenta
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  itemsList: Array<any> = [];

  // EventEmitter ne ajuta sa trimitem obiecte / evenimente in exteriorul componentei curente
  // De aici avem si @Output
  // pentru a emite un eveniment folosim metoda emit()
  @Output() onEditEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor(private itemService: ItemService) {
      // this.itemsList.push("Item1");
      // this.itemsList.push("Item2");
      // this.itemsList.push("Item3");
      // this.itemsList.push("Item4");
      // this.itemsList.push("Item5");

    // setTimeout(() => {
    //   this.itemsList = this.itemService.getItemList();
    //   console.log("ceva",this.itemsList);
    // }, 2000)

    //  folosind subscribe ne abonam sa primim toate modificarile listei atunci cand vin de la server
    this.itemService.getItemList().subscribe((items: Array<any>) => {
      this.itemsList = items
    })
  }

  onDeleteItem(id: string){
    this.itemService.deleteItem(id);
  }

  onEditItem(item: any){
    console.log("ListItems - onEditItem() ", item);
    this.onEditEvent.emit(item)
  }
}
