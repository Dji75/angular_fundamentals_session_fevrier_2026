import { Component, output } from '@angular/core';

@Component({
  selector: 'ngs-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // @Output() readonly filterChanged = new EventEmitter<string | null>();

  readonly filterChanged = output<string | null>();

  protected filter: string | null = null;

  protected clearFilter(): void {
    this.filter = null;
    this.filterChanged.emit(null);
  }

  protected updateFilter(filter: string): void {
    this.filter = filter;
    this.filterChanged.emit(filter);
  }
}
