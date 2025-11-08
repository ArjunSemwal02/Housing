import { Component, inject, ViewChild } from '@angular/core';
import { House } from '../../model/house';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Card } from '../../reusables/card/card';
import { RegisteredService } from '../../services/registered/registered';

@Component({
  selector: 'app-registered',
  imports: [Card, MatPaginator],
  templateUrl: './registered.html',
  styleUrl: './registered.scss',
})
export class Registered {
  registeredpropsService = inject(RegisteredService);

  properties: House[] = [];
  pagedProperties: House[] = [];

  pageSize = 8;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.registeredpropsService.getAllProps().subscribe({
      next: (value) => {
        this.properties = value;
        this.pagedProperties = value;
      },
      error: (err) => {},
    });

    this.loadPage();
  }

  ngAfterViewInit() {
    setTimeout(() => this.loadPage());
  }

  loadPage() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.properties = this.pagedProperties.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPage();
  }
}
