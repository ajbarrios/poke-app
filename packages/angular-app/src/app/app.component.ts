import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { notiBloc, NotiBlocState } from '../../../core-lib/src/blocs/notifications/noti.bloc';
import '../../../core-ui/src/my-element.js'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {

  title = 'angular-app';

  async ngOnInit() {
    notiBloc.subscribe((state: NotiBlocState) => {
      console.log(JSON.stringify(state));
    });

    notiBloc.showInfo("Se mostrará?");
  }
  
}
