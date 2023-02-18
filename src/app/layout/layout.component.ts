import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <app-header (menuToggled)="toggle()"></app-header>

      <mat-drawer-container>
        <mat-drawer mode="side" [opened]="opened">
          <app-menu-item [menu]="menu"></app-menu-item>
        </mat-drawer>

        <mat-drawer-content [class.margin-left]="opened">
          <router-outlet></router-outlet>
        </mat-drawer-content>
      </mat-drawer-container>
    </div>
  `,
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Settings',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Parking',
          icon: 'money',
          // link: '/sales',
          color: '#ff7f0e',
          subMenu: [
            {
              title: 'invoice',
              icon: 'money',
              link: '/invoice',
              color: '#ff7f0e',
            },
            {
              title: 'Person',
              icon: 'money',
              link: '/Person',
              color: '#ff7f0e',
            },
            {
              title: 'Car',
              icon: 'money',
              link: '/Car',
              color: '#ff7f0e',
            },
            {
              title: 'Sales',
              icon: 'money',
              link: '/sales',
              color: '#ff7f0e',
            },
          ],
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Parking',
          icon: 'money',
          // link: '/sales',
          color: '#ff7f0e',
          subMenu: [
            {
              title: 'invoice',
              icon: 'money',
              link: '/invoice',
              color: '#ff7f0e',
            },
            {
              title: 'Person',
              icon: 'money',
              link: '/Person',
              color: '#ff7f0e',
            },
            {
              title: 'Car',
              icon: 'money',
              link: '/Car',
              color: '#ff7f0e',
            },
            {
              title: 'Sales',
              icon: 'money',
              link: '/sales',
              color: '#ff7f0e',
            },
          ],
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Parking',
          icon: 'money',
          // link: '/sales',
          color: '#ff7f0e',
          subMenu: [
            {
              title: 'invoice',
              icon: 'money',
              link: '/invoice',
              color: '#ff7f0e',
            },
            {
              title: 'Person',
              icon: 'money',
              link: '/Person',
              color: '#ff7f0e',
            },
            {
              title: 'Car',
              icon: 'money',
              link: '/Car',
              color: '#ff7f0e',
            },
            {
              title: 'Sales',
              icon: 'money',
              link: '/sales',
              color: '#ff7f0e',
            },
          ],
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Parking',
          icon: 'money',
          // link: '/sales',
          color: '#ff7f0e',
          subMenu: [
            {
              title: 'invoice',
              icon: 'money',
              link: '/invoice',
              color: '#ff7f0e',
            },
            {
              title: 'Person',
              icon: 'money',
              link: '/Person',
              color: '#ff7f0e',
            },
            {
              title: 'Car',
              icon: 'money',
              link: '/Car',
              color: '#ff7f0e',
            },
            {
              title: 'Sales',
              icon: 'money',
              link: '/sales',
              color: '#ff7f0e',
            },
          ],
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Parking',
          icon: 'money',
          // link: '/sales',
          color: '#ff7f0e',
          subMenu: [
            {
              title: 'invoice',
              icon: 'money',
              link: '/invoice',
              color: '#ff7f0e',
            },
            {
              title: 'Person',
              icon: 'money',
              link: '/Person',
              color: '#ff7f0e',
            },
            {
              title: 'Car',
              icon: 'money',
              link: '/Car',
              color: '#ff7f0e',
            },
            {
              title: 'Sales',
              icon: 'money',
              link: '/sales',
              color: '#ff7f0e',
            },
          ],
        },
      ],
    },
  ];
}
