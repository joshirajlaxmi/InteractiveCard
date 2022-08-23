import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interactive-card',
  templateUrl: './interactive-card.component.html',
  styleUrls: ['./interactive-card.component.scss'],
})
export class InteractiveCardComponent implements OnInit, AfterViewInit {
  cardDetailsForm: FormGroup;
  fieldBlankError = "Can't be blank!";
  fieldWrongFormError = 'Wrong Format, must be a number!';
  cardNameSub: Subscription;
  cardNumSub: Subscription;
  cardYearSub: Subscription;
  cardMonthSub: Subscription;

  iCardName = 'Jane Appleseed';
  iCardNumber = '0000 0000 0000 0000';
  iCardMonth = '00';
  iCardYear = '00';

  constructor() {}

  ngOnInit(): void {
    this.cardDetailsForm = new FormGroup({
      cardHolderName: new FormControl(null, Validators.required),
      userData: new FormGroup({
        cardNumber: new FormControl(null, [
          Validators.required,
          Validators.minLength(19),
          this.validateNumber,
        ]),
      }),
      expiryMonth: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(12),
      ]),
      expiryYear: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(22),
        Validators.max(28),
      ]),
      cvcNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  ngAfterViewInit() {
    this.cardNameSub = this.cardDetailsForm
      .get('cardHolderName')
      .valueChanges.subscribe((val) => {
        this.iCardName = val;
      });
    this.cardNumSub = this.cardDetailsForm
      .get('userData.cardNumber')
      .valueChanges.subscribe((val) => {
        this.iCardNumber = this.formatCardNumberFld(val);
        this.cardDetailsForm
          .get('userData.cardNumber')
          .setValue(this.iCardNumber, { emitEvent: false });
      });
    this.cardMonthSub = this.cardDetailsForm
      .get('expiryMonth')
      .valueChanges.subscribe((val) => {
        this.iCardMonth = val;
      });
    this.cardYearSub = this.cardDetailsForm
      .get('expiryYear')
      .valueChanges.subscribe((val) => {
        this.iCardYear = val;
      });
  }

  formatCardNumberFld(val: any) {
    var newval = '';
    // write regex to remove any space
    val = val.replace(/\s/g, '');
    // iterate through each numver
    for (var i = 0; i < val.length; i++) {
      // add space if modulus of 4 is 0
      if (i % 4 == 0 && i > 0) newval = newval.concat(' ');
      // concatenate the new value
      newval = newval.concat(val[i]);
    }
    console.log('newVal', newval);
    // update the final value in the html input
    return newval;
  }

  validateNumber(control: FormControl): { [s: string]: boolean } {
    const cardNumber = control.value;
    //console.log(cardNumber);
    let cardNum;
    if (cardNumber) {
      cardNum = cardNumber.replace(/\s/g, '');
    }
    const isNum = /^[0-9]+$/.test(cardNum);
    if (!isNum) {
      return { notNumber: true };
    }

    return null;
  }

  submitForm() {
    this.cardDetailsForm.reset();
  }
}
