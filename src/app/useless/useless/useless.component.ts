import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-useless',
  templateUrl: './useless.component.html',
  styleUrls: ['./useless.component.scss']
})
export class UselessComponent implements OnInit {

  public createForm;
  public findText;
  public words = ['AAA', 'BBB', 'CCC'];
  public text = ['Text', 'Test', 'Item', 'Button', 'Module'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      input: ['']
    })
  }

  onSubmit() {
    this.findText = this.createForm.value.input
  }

}
