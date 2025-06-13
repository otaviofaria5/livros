import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule,
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }

  expanded: boolean = true;

  ngOnInit() {

  }

  toggleSidebar() {
    this.expanded = !this.expanded;
  }

  logout() : void {
      this.router.navigate(['/']);

  }

}
