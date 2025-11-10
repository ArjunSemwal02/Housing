import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { SidebarService } from '../../shared/global/sidebarService/sidebar-service';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutside {
  @Output() clickOutside = new EventEmitter<Event>();
  @Input() ignoreRefs: HTMLElement[] = [];

  sidebarService = inject(SidebarService);

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = this._elementRef.nativeElement.contains(event.target);

    const target = event.target as HTMLElement;
    // const clickedIgnored = this.ignoreRefs?.some((ref) => ref.contains(target));

    const clickedIgnored = this.sidebarService
      .getIgnoreElements()
      .some((ref) => ref.contains(target));

    if (!clickedInside && !clickedIgnored) {
      this.clickOutside.emit(event);
    }
  }
}
