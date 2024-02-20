import { Component } from '@angular/core';

export type MenuItem = {
  title: string;
  route: string; 
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './sideMenu.component.html',
  styles: ``,
})
export class SideMenuComponent { 

  public reactiveMenu: MenuItem[] = [
    { title: "Basicos", route: './reactive/basic'},
    { title: "Dinámicos", route: './reactive/dynamic'},
    { title: "Switches", route: './reactive/switches'},
  ]

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth' },
  ]

}
