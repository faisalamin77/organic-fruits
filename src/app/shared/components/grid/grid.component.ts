import { Component, Input, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ColumnDefaultDef, PartialColumnDef } from './column-def';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() columnDefs: PartialColumnDef[];
  @Input() data: any[];

  gridOptions = {
    paginationAutoPageSize: true,
    pagination: true,
    rowSelection: 'single',
    rowClass: 'my-green-class',
  } as GridOptions;

  ngOnInit(): void {
    this.extendColsDefaultDefs();
  }

  private extendColsDefaultDefs(): void {
    this.columnDefs =
      this.columnDefs.map(colDef => {
        return {...ColumnDefaultDef, ...colDef};
      });
  }
}
