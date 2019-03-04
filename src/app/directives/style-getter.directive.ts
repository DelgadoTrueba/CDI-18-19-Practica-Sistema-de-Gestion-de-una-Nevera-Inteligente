import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStyleGetter]'
})
export class StyleGetterDirective {

  @Input() height: string;
  @Input() width: string;

  constructor(public el: ElementRef) {}

  ngOnChanges() {
     this.el.nativeElement.style.height = this.height+"px";
     this.el.nativeElement.style.width = this.width+"px";
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.height = this.height+"px";
    this.el.nativeElement.style.width = this.width+"px";
  }

}
