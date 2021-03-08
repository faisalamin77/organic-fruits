import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AgGridModule.withComponents([])
    ],
    declarations: [GridComponent],
    exports: [GridComponent]
})
export default class SharedModule {}
