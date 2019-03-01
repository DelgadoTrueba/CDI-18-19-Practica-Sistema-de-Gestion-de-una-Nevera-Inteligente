import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-selecled-kitchen',
  templateUrl: './icon-selecled-kitchen.component.html',
  styleUrls: ['./icon-selecled-kitchen.component.css']
})
export class IconSelecledKitchenComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'selected-kitchen',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/selected-kitchen.svg')
    );
   }

  ngOnInit() {
  }

}
