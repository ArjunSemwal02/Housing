import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../reusables/card/card';
import { House } from '../../model/house';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Housings } from '../../services/housing/housings';

@Component({
  selector: 'app-housing',
  imports: [Card, CommonModule, MatPaginator],
  templateUrl: './housing.html',
  styleUrl: './housing.scss',
})
export class Housing implements OnInit {
  housingService = inject(Housings);

  properties: House[] = [];
  pagedProperties: House[] = [];

  pageSize = 8;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.housingService.housings$.subscribe({
      next: (value) => {
        // this.properties = value;
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
