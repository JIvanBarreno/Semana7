import { Component } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {
  constructor (private share: ShareDataService) {

  }

  selectImage(nameImg: string) {
    this.share.updateSourcePath(nameImg);
  }
}
