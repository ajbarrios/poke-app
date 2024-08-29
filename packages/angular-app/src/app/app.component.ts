import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { notiBloc, NotiBlocState } from '../../../core-lib/src/blocs/notifications/noti.bloc';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'angular-app';

  async ngOnInit() {
    console.log('Me ejecuto!')
    notiBloc.subscribe((state: NotiBlocState) => {
      console.log(JSON.stringify(state));
    });

    notiBloc.showInfo("Se mostrará?");
  }
  
}
