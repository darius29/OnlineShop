import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-add-edit-item', // il folosim pentru a apela componenta de angular: <app-add-edit-item/>
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent implements OnChanges{
  // value:string = '';
  title:string = '';
  description:string = '';
  price:number = 0;
  imageUrl:string = '';

  @Input() item: any; // creaza un atribut pentru tag-ul de HTML, exemplu: class, style, name, etc


  constructor(private itemService: ItemService) {

  }

  showValue () {
      console.log(this.title);
      console.log(this.description);
      console.log(this.price);
      console.log(this.imageUrl);

      let item = {
        title : this.title,
        description: this.description,
        price: this.price,
        imageUrl: this.imageUrl
      };

      this.itemService.createItem(item);
      // this.itemService.displayInfo();
  }

  submitForm(){
    let body = {
      id: this.item != null ? this.item.id : "",
      title : this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };

    if(body.id == ""){
      this.itemService.createItem(body);
    }else{
      this.itemService.updateItem(body);
    }


  }

  ngOnChanges(changes: SimpleChanges) {
    // Aceasta metoda se apeleaza atunci cand elementele de la @Input() se schimba
    console.log("Am primit o valoare noua pentru item, dupa ce am apasat Edit");
    console.log("ngOnchanges()");
    console.log(this.item);
    if(this.item != null){
      this.title =  this.item.title;
      this.description = this.item.description;
      this.price = this.item.price;
      this.imageUrl = this.item.imageUrl;
    }
  }

}

