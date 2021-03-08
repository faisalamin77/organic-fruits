import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents([])
    ],
    declarations: [GridComponent],
    exports: [GridComponent]
})
export default class SharedModule {}
