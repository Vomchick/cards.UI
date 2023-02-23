import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cards_api_url } from '../app-ijection-tokens';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cardsApi = this.apiUrl + 'api/cards';

  constructor(
    private http: HttpClient,
    @Inject(cards_api_url) private apiUrl: string
  ) {}

  // Get all cards
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsApi);
  }

  addCard(cardInfo: {
    id: string;
    holderName: string;
    cardNumber: string;
    cvc: string;
    expiryMonth: string;
    expiryYear: string;
  }): Observable<Card> {
    cardInfo.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Card>(this.cardsApi, cardInfo);
  }

  deleteCard(id: string): Observable<Card> {
    return this.http.delete<Card>(this.cardsApi + '/' + id);
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(this.cardsApi + '/' + card.id, card);
  }
}
