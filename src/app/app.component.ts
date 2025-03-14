import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  template: `
    <app-header/>
    <main>
    <!-- <app-home/> -->
     <router-outlet/>
    </main>
    
  `,
  styles: [`
    main{
      padding:16px;
    }
    `
  ],
})
export class AppComponent {
  title = 'myApp';
}
