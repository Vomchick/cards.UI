import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';
import { auth_api_url, cards_api_url } from './app-ijection-tokens';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { access_token_key } from './service/auth.service';

export function tokenGetter() {
  return localStorage.getItem(access_token_key);
}

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzFormModule,
    FormsModule,
    NzModalModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:7133'],
      },
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: auth_api_url, useValue: environment.authApi },
    { provide: cards_api_url, useValue: environment.cardsApi },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
