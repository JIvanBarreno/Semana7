import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private imagenPath = new BehaviorSubject<string>("");
  currentImagePath = this.imagenPath.asObservable();

  constructor() { }
  
  updateSourcePath(path: string) {
    this.imagenPath.next(path);
  };
}
