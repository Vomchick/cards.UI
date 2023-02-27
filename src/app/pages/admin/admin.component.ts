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
  updatableCard = {
    update: false,
    cardId: '',
  };

  constructor(
    private cardsService: CardsService,
    private ufb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.adminForm = this.ufb.group({
      cardholderName: [null, [Validators.required]],
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

  clearAdminForm() {
    this.adminForm.patchValue({
      cardholderName: null,
      cardNumber: null,
      cvc: null,
      expiryMonth: null,
      expiryYear: null,
    });
    this.updatableCard.update = false;
    this.updatableCard.cardId = '';
  }

  deleteCard(id: string) {
    this.cardsService.deleteCard(id).subscribe((response) => {
      this.getAllCards();
    });
  }
}
