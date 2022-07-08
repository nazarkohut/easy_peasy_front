import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EasyPeasyFront';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIcon(
      'forgot-password-sad-smile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/logos/svg/ForgotPasswordSadSmile.svg')
    );
  }
}
