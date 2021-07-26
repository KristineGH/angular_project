import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProducts() {
    this.router.navigate(['products']);
  }

  onSignIn() {
    this.router.navigate(['/signin']);
  }

  onSavedProducts() {
    this.router.navigate(['products/saved']);
  }
}
