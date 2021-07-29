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
      password: 'ani1144',
      status: 'user',
      token: 'token',
      userId: 11
    },
    {
      name: 'Kristine',
      mail: 'kristine.gh@gmail.com',
      password: '123456',
      status: 'user',
      token: 'token',
      userId: 12
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
