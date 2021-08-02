import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public users = [
    {
      name: 'Ani',
      mail: 'ani@gmail.com',
      id: 12,
      isAdmin: true 
    },
    {
      name: 'Kristine',
      mail: 'kristine.gh@gmail.com',
      id: 13,
      isAdmin: false 
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onDeleteUser() {
    console.log('delete');
  }

  onEditUser(userId) {
    this.router.navigate([`/admin/user/edit/${userId}`])
    console.log('edit');
  }
}
