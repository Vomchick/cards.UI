import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cards_api_url } from '../app-ijection-tokens';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cardsApi = this.apiUrl + 'api/Cards';

  constructor(
    private http: HttpClient,
    @Inject(cards_api_url) private apiUrl: string
  ) {}

  // Get all cards
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsApi, { withCredentials: true });
  }

  addCard(cardInfo: {
    id: string;
    cardHolderName: string;
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

  updateCard(card: Card, cardId: string): Observable<Card> {
    return this.http.put<Card>(this.cardsApi + '/' + cardId, card);
  }
}
