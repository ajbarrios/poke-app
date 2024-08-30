import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cardBloc } from '../../../core-lib/src/blocs/cards/card.bloc';
import { CardType } from '../../../core-lib/src/blocs/cards/card.model';
import {
  notiBloc,
  NotiBlocState,
} from '../../../core-lib/src/blocs/notifications/noti.bloc';
import '../../../core-ui/src/components/cards-list.element.js';
import '../../../core-ui/src/my-element.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  cards: CardType[] = [];

  async ngOnInit() {
    this.cards = await cardBloc.getAllCards();

    notiBloc.subscribe((state: NotiBlocState) => {
      console.log(JSON.stringify(state));
    });

    notiBloc.showInfo('Se mostrará?');
  }
}
