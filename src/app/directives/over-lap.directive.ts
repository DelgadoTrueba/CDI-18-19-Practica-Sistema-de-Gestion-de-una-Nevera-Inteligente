import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOverLap]'
})
export class OverLapDirective {

  @Input() top: string;
  @Input() left: string;

  constructor(public el: ElementRef) {}

  ngOnChanges() {
     this.el.nativeElement.style.top = this.top+"px";
     this.el.nativeElement.style.left = this.left+"px";
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.top = this.top+"px";
    this.el.nativeElement.style.left = this.left+"px";
  }

}
