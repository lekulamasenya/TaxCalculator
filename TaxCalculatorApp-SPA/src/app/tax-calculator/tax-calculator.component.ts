import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent implements OnInit {
  taxCalculatorForm: FormGroup;
  displayMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.InitTaxCalculatorForm();
  }
  InitTaxCalculatorForm(): any {
    this.taxCalculatorForm = this.fb.group({
      annualIncome: ['', Validators.required],
      postalCode: ['', [Validators.required]]
    });
  }

  calculateTax() {

  }

}
