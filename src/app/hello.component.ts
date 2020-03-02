import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<ngx-extended-pdf-viewer [src]="'pdf-sample.pdf'" [height]="'90vh'" [useBrowserLocale]="true"> </ngx-extended-pdf-viewer>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
