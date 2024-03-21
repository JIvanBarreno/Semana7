import { Component } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { ImgData } from '../../models/imgdata.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ShowimagenComponent } from '../showimagen/showimagen.component';
import { ImgselectorComponent } from '../imgselector/imgselector.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [ReactiveFormsModule, ShowimagenComponent, ImgselectorComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {
  
}
