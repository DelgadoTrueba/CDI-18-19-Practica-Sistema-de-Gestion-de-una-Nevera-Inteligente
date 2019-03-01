import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-setting',
  templateUrl: './icon-setting.component.html',
  styleUrls: ['./icon-setting.component.css']
})
export class IconSettingComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg')
    );
   }

  ngOnInit() {
  }

}
