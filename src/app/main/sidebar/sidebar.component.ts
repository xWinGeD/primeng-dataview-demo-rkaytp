import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
      this.items = [
          {
              label: 'New Blueprint',
              icon: 'pi pi-pw pi-cloud',
              styleClass: 'sidebar__blueprint-wrapper',
              items: [
                  {label: 'Blueprint items', icon: 'pi pi-fw pi-table', routerLink: ['/blueprint']},
              ]
          },
          {
              label: 'Widgets',
              icon: 'pi pi-fw pi-th-large',
              styleClass: 'sidebar__widgets-wrapper',
              items: [
                  {label: 'Widgets items', icon: 'pi pi-fw pi-table', routerLink: ['/widgets']},
              ]
          },
      ];
  }
  
  goToBlueprint() {
    this.router.navigate(['/blueprint'])
  }

  goToWidgets() {
    this.router.navigate(['/widgets'])
  }
}
