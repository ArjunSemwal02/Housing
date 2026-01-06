import { Component, inject, OnInit, signal } from '@angular/core';
import { House } from '../../model/house';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Housings } from '../../services/housing/housings';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { SearchFilterPipe } from '../../pipes/search-filter-pipe';
import { Card } from '../../reusables/card/card';

@Component({
  selector: 'app-housing',
  imports: [
    CommonModule,
    MatPaginator,
    ɵInternalFormsSharedModule,
    FormsModule,
    SearchFilterPipe,
    Card,
  ],
  templateUrl: './housing.html',
  styleUrl: './housing.scss',
})
export class Housing implements OnInit {
  housingService = inject(Housings);
  housingsLoaded = signal<boolean>(false);

  properties: House[] = [];
  pagedProperties: House[] = [];

  searchProperty: string = '';

  pageSize = 8;
  currentPage = 0;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.housingService.housings$.subscribe({
      next: (value) => {
        setInterval(() => {
          this.housingsLoaded.set(true);
        }, 2000);

        // this.properties = value;
        this.pagedProperties = value;
      },
      error: () => {},
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
