import { Component } from '@angular/core';
import { ConvertionsComponent } from '../convertions/convertions.component';
import { ConvetionData } from '../../models/convertionsdata.model';

@Component({
  selector: 'app-datalist',
  standalone: true,
  imports: [ConvertionsComponent],
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.scss'
})
export class DatalistComponent {
  public dataValues : ConvetionData[] = [];

  addData(convetionData: ConvetionData) {
    this.dataValues.push(convetionData);

    //console.log(this.dataValues);
  }

  deleteItem(convetionItem: ConvetionData) {
    this.dataValues = this.dataValues.filter(item => item.getCelcius() != convetionItem.getCelcius());
    console.log(convetionItem);
  }
}
