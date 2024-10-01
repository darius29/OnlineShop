import { Component } from '@angular/core';
import {ItemService} from "../item.service";
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

  constructor(private itemService: ItemService) {
      this.itemsList.push("Item1");
      this.itemsList.push("Item2");
      this.itemsList.push("Item3");
      this.itemsList.push("Item4");
      this.itemsList.push("Item5");

      console.log(this.itemsList);
  }



}
