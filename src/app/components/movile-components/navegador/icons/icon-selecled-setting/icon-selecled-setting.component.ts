import { Component, OnInit } from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-icon-selecled-setting',
  templateUrl: './icon-selecled-setting.component.html',
  styleUrls: ['./icon-selecled-setting.component.css']
})
export class IconSelecledSettingComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'selected-settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/selected-settings.svg')
    );
   }

  ngOnInit() {
  }

}
