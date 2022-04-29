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
                  {label: 'Additional item', icon: 'pi pi-fw pi-check-square'},
                  {label: 'Additional item', icon: 'pi pi-fw pi-bars'},
                  {label: 'Additional item', icon: 'pi pi-fw pi-cloud-upload'},
                  {label: 'Additional item', icon: 'pi pi-fw pi-database'},
              ]
          },
          {
              label: 'Widgets',
              icon: 'pi pi-fw pi-th-large',
              styleClass: 'sidebar__widgets-wrapper',
              items: [
                  {label: 'Widgets items', icon: 'pi pi-fw pi-table', routerLink: ['/widgets']},
                  {label: 'Additional item', icon: 'pi pi-fw pi-tags'},
                  {label: 'Additional item', icon: 'pi pi-fw pi-sliders-h'},
                  {label: 'Additional item', icon: 'pi pi-fw pi-sitemap'},
                  {label: 'Additional item', icon: 'pi pi-fw pi-info-circle'},
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
