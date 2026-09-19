import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:folder',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./pages/add-product/add-product.page').then(
        (m) => m.AddProductPage
      ),
  },
];
