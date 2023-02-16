import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  title = 'cards';
  cards: Card[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllCards().subscribe((response) => {
      this.cards = response;
    });
  }
}
