import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ConvetionData } from '../../models/convertionsdata.model';

@Component({
  selector: 'app-convertions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './convertions.component.html',
  styleUrl: './convertions.component.scss'
})
export class ConvertionsComponent {
  @Output() dataInput = new EventEmitter<ConvetionData>();
  
  public tittle = "Conversion de Grados";
  public gradosVal = new FormControl();
  public typeConvertion = new FormControl();
  
  generateConvertion() {
    var valGrados = parseFloat(this.gradosVal.value);
    var convetion = parseInt(this.typeConvertion.value);
    
    if (convetion == 1) {
      var f = this.celciusToFahrenheit(valGrados);
      var finalData = new ConvetionData(valGrados, f);
      //console.log("You selected celcius");
      //console.log("and the fahrenheit value is : " + f);
      this.dataInput.emit(finalData);
    } else if (convetion == 2) {
      var c = this.fahrenheitToCelcius(valGrados);
      var finalData = new ConvetionData(c, valGrados);
      //console.log("You selected Fahrenheit");
      //console.log("and the celcius value is : " + c);
      this.dataInput.emit(finalData);
    } else if(isNaN(valGrados)) {
      alert("You need to enter a value");
    } else {
      alert("You need to select a type of convertion");
    }
  }

  private celciusToFahrenheit(c : number) {
    return (9/5) * c + 32;
  }

  private fahrenheitToCelcius(f : number) {
    return (5/9)*(f - 32);
  }
}
