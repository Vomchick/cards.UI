import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-add-modal-form',
  templateUrl: './add-modal-form.component.html',
  styleUrls: ['./add-modal-form.component.css'],
})
export class AddModalFormComponent implements OnInit {
  isVisibleMiddle = false;

  addForm!: UntypedFormGroup;

  constructor(
    private cardsService: CardsService,
    private ufb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.addForm = this.ufb.group({
      cardholderName: [null, [Validators.required]],
      cardNumber: [null, [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cvc: [null, [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expiryMonth: [
        null,
        [Validators.required, Validators.pattern(/^(0?[1-9]|1[012])$/)],
      ],
      expiryYear: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.cardsService.addCard(this.addForm.value).subscribe((res) => {});
      this.handleCancelMiddle();
    } else {
      Object.values(this.addForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
    this.addForm.reset();
  }
}
