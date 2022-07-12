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

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // latter I will have to create loop through array of objects
    matIconRegistry.addSvgIcon(
      'forgot-password-sad-smile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/logos/svg/forgot-password-sad-smile.svg')
    );
    matIconRegistry.addSvgIcon(
      'email-sent-success-happy-smile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/logos/svg/email-sent-success-happy-smile.svg')
    );
    matIconRegistry.addSvgIcon(
      'email-sent-success-happy-reverse-smile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/logos/svg/email-sent-success-happy-reverse-smile.svg')
    )

  }
}
