import { Routes } from '@angular/router';
import { FournisseurListComponent } from './components/fournisseur-list/fournisseur-list.component';
import { FournisseurFormComponent } from './components/fournisseur-form/fournisseur-form.component';
import { FournisseurEditComponent } from './components/fournisseur-edit/fournisseur-edit.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { ProduitFormComponent } from './components/produit-form/produit-form.component';
import { ProduitEditComponent } from './components/produit-edit/produit-edit.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { MachineFormComponent } from './components/machine-form/machine-form.component';
import { MachineEditComponent } from './components/machine-edit/machine-edit.component';
import { OrdreFabricationListComponent } from './components/ordre-fabrication-list/ordre-fabrication-list.component';
import { OrdreFabricationFormComponent } from './components/ordre-fabrication-form/ordre-fabrication-form.component';
import { OrdreFabricationEditComponent } from './components/ordre-fabrication-edit/ordre-fabrication-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TechnicienEditComponent } from './components/technicien-edit/technicien-edit.component';
import { TechnicienFormComponent } from './components/technicien-form/technicien-form.component';
import { TechnicienListComponent } from './components/technicien-list/technicien-list.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { MaintenanceFormComponent } from './components/maintenance-form/maintenance-form.component';
import { MaintenanceEditComponent } from './components/maintenance-edit/maintenance-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'fournisseurs', component: FournisseurListComponent }, 
  { path: 'fournisseurs/add', component: FournisseurFormComponent } ,
  { path: 'fournisseurs/edit/:id', component: FournisseurEditComponent },
  { path: 'produits', component: ProduitListComponent }, 
  { path: 'produits/add', component: ProduitFormComponent }, 
  { path: 'produits/edit/:id', component: ProduitEditComponent },
  { path: 'machines', component: MachineListComponent},
  { path: 'machines/add', component: MachineFormComponent},
  { path: 'machines/edit/:id', component: MachineEditComponent},
  { path: 'ordres', component: OrdreFabricationListComponent},
  { path: 'ordres/add', component: OrdreFabricationFormComponent},
  { path: 'ordres/edit/:id', component: OrdreFabricationEditComponent},
  { path: 'techniciens', component: TechnicienListComponent},
  { path: 'techniciens/add', component: TechnicienFormComponent},
  { path: 'techniciens/edit/:id', component: TechnicienEditComponent},
  { path: 'maintenances', component: MaintenanceListComponent},
  { path: 'maintenances/add', component: MaintenanceFormComponent},
  { path: 'maintenances/edit/:id', component: MaintenanceEditComponent},

  { path: 'header', component: HeaderComponent}



];