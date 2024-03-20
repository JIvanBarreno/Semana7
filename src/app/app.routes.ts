import { Routes } from '@angular/router';
import { ConvertionsComponent } from './components/convertions/convertions.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DatalistComponent } from './components/datalist/datalist.component';

export const routes: Routes = [
    {path: 'convertions', component: ConvertionsComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'datalist', component: DatalistComponent}
];
