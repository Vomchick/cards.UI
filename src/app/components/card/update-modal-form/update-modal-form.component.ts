import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-update-modal-form',
  templateUrl: './update-modal-form.component.html',
  styleUrls: ['./update-modal-form.component.css'],
})
export class UpdateModalFormComponent implements OnInit {
  @Input() card!: Card;

  isVisibleMiddle = false;
  updateForm!: UntypedFormGroup;

  constructor(
    private cardsService: CardsService,
    private ufb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.updateForm = this.ufb.group({
      cardholderName: [this.card.cardholderName, [Validators.required]],
      cardNumber: [
        this.card.cardNumber,
        [Validators.required, Validators.pattern(/^\d{16}$/)],
      ],
      cvc: [
        this.card.cvc,
        [Validators.required, Validators.pattern(/^\d{3}$/)],
      ],
      expiryMonth: [
        this.card.expiryMonth,
        [Validators.required, Validators.pattern(/^(0?[1-9]|1[012])$/)],
      ],
      expiryYear: [this.card.expiryYear, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.cardsService
        .updateCard(this.updateForm.value, this.card.id)
        .subscribe((res) => {});
      this.handleCancelMiddle();
    } else {
      Object.values(this.updateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
    this.updateForm.patchValue({
      cardholderName: this.card.cardholderName,
      cardNumber: this.card.cardNumber,
      cvc: this.card.cvc,
      expiryMonth: this.card.expiryMonth,
      expiryYear: this.card.expiryYear,
    });
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
    this.updateForm.reset();
  }
}
