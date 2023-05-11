import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml',
  standalone:true
})
export class SafehtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}
  transform(value:any) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }

}
