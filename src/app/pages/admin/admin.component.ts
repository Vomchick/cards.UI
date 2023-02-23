import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  adminForm!: UntypedFormGroup;

  title = 'cards';
  cards: Card[] = [];
  card: Card = {
    id: '',
    cardholderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
  };

  constructor(
    private cardsService: CardsService,
    private ufb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.adminForm = this.ufb.group({
      holderName: [null, [Validators.required]],
      cardNumber: [null, [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cvc: [null, [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expiryMonth: [
        null,
        [Validators.required, Validators.pattern(/^(0?[1-9]|1[012])$/)],
      ],
      expiryYear: [null, [Validators.required]],
    });
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllCards().subscribe((response) => {
      this.cards = response;
    });
  }

  onSubmit() {
    if (this.adminForm.valid) {
      this.cardsService.addCard(this.adminForm.value).subscribe((res) => {
        console.log(res);
        this.getAllCards();
      });
    } else {
      Object.values(this.adminForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    /*if (this.card.id === '') {
      this.cardsService.addCard(this.card).subscribe((response) => {
        this.getAllCards();
        //this.clearCard();
      });
    } else {
      this.updateCard(this.card);
    }*/
  }

  deleteCard(id: string) {
    this.cardsService.deleteCard(id).subscribe((response) => {
      this.getAllCards();
    });
  }

  populateForm(card: Card) {
    this.card = card;
  }

  updateCard(card: Card) {
    this.cardsService.updateCard(card).subscribe((response) => {
      this.getAllCards();
    });
  }
}
