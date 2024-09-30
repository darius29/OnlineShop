import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import { MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

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
export class AddEditItemComponent {
  // value:string = '';
  title:string = '';
  description:string = '';
  price:number = 0;
  imgUrl:string = '';



  showValue () {
      console.log(this.title);
      console.log(this.description);
      console.log(this.price);
      console.log(this.imgUrl);
  }

}

