import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-store',
  templateUrl: './icon-store.component.html',
  styleUrls: ['./icon-store.component.css']
})
export class IconStoreComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'store',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/store_mall_directory.svg')
    );
   }

  ngOnInit() {
  }

}
