import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../types/customer';
import { of } from 'rxjs';
import { CustomerTS } from '../../types/tstypes/Customerts';

@Component({
  selector: 'app-customersample',
  standalone: true,
  imports: [],
  templateUrl: './customersample.component.html',
  styleUrls: ['./customersample.component.css']
})
export class CustomersampleComponent {
  customer: CustomerTS;
  constructor() {
    this.customer = new CustomerTS("Kanturi Bhavitha", "kanturibhavitha@gmail.com", "bhavitha01", "1234567890", "USER", "101");
  }

}

