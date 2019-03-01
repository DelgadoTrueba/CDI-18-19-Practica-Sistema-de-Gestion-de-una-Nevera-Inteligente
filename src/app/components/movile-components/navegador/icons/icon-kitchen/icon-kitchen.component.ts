import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-kitchen',
  templateUrl: './icon-kitchen.component.html',
  styleUrls: ['./icon-kitchen.component.css']
})
export class IconKitchenComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'kitchen',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/kitchen.svg')
    );
   }

  ngOnInit() {
  }

}
