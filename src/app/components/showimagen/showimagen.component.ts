import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-showimagen',
  standalone: true,
  imports: [],
  templateUrl: './showimagen.component.html',
  styleUrl: './showimagen.component.scss'
})
export class ShowimagenComponent implements OnInit {
  public nextPath = "";

  constructor(private share: ShareDataService) {}
  ngOnInit(): void {
      this.share.currentImagePath.subscribe(x => this.nextPath = x);
  }
}
