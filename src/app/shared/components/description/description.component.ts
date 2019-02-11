import { Component, forwardRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_DESCRIPTION_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DescriptionComponent),
  multi: true,
};

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  providers: [CUSTOM_DESCRIPTION_ACCESSOR]
})
export class DescriptionComponent {

  @ViewChild('textarea') textarea;

  onChange(e){}
  onTouched(e) {}

  writeValue( value : any ) : void {
    const div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  constructor( private renderer : Renderer2 ) {
  }

  change( $event ) {
    this.onChange($event.target.textContent);
    this.onTouched($event.target.textContent);
  }


}
