import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
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

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllCards().subscribe((response) => {
      this.cards = response;
    });
  }

  clearCard() {
    this.card = {
      id: '',
      cardholderName: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvc: '',
    };
  }

  onSubmit() {
    if (this.card.id === '') {
      this.cardsService.addCard(this.card).subscribe((response) => {
        this.getAllCards();
        this.clearCard();
      });
    } else {
      this.updateCard(this.card);
    }
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
