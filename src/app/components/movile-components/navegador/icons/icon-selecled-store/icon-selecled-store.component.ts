import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-selecled-store',
  templateUrl: './icon-selecled-store.component.html',
  styleUrls: ['./icon-selecled-store.component.css']
})
export class IconSelecledStoreComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'selected-store',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/selected-store_mall_directory.svg')
    );
   }

  ngOnInit() {
  }

}
