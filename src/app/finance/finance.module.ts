import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './issue-list/issue-list.component';
import { UnissueListComponent } from './unissue-list/unissue-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IssueListComponent, UnissueListComponent]
})
export class FinanceModule { }
