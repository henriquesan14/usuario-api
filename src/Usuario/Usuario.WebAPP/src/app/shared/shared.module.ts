import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { BarSearchComponent } from './bar-search/bar-search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PainelComponent, PageTitleComponent, BarSearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PainelComponent, PageTitleComponent, BarSearchComponent]
})
export class SharedModule { }
