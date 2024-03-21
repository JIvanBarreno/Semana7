import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-imgselector',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './imgselector.component.html',
  styleUrl: './imgselector.component.scss'
})
export class ImgselectorComponent {
  constructor (private share: ShareDataService) {  }
  public sourceImages = [
                          {value: 1, name : "Garfield", source: "../../../assets/img/garfield.png"},
                          {value: 2, name : "Jon", source: "../../../assets/img/jon.png"},
                          {value: 3, name : "Liz", source: "../../../assets/img/liz.png"},
                          {value: 4, name : "Nermal", source: "../../../assets/img/Nermal.png"},
                          {value: 5, name : "Odie", source: "../../../assets/img/odie.jpeg"},
                          {value: 6, name : "Vito", source: "../../../assets/img/vito.png"}
                        ];
  public imgSelected = new FormControl;

  selectImage() {
    var index = this.imgSelected.value - 1;
    var selectedSource = this.sourceImages[index]['source'];
    //console.log(selectedSource);
    this.share.updateSourcePath(selectedSource);
  }
}
