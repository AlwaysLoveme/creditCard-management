import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersComponent } from '../users/users.component';
import { DataImportComponent } from '../data-import/data-import.component';
import { FinanceComponent } from '../finance/finance.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'userManage',
        pathMatch: 'full'
    },
    {
        path: 'userManage',
        component: UsersComponent
    },
    {
        path: 'dataImport',
        component: DataImportComponent
    },
    {
        path: 'finance',
        loadChildren: '../finance/finance.module#FinanceModule'
    }
];