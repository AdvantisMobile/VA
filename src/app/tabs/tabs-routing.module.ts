import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>import('../menu/menu.module').then (m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () =>import('../order/order.module').then (m => m.OrderPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>import('../home/home.module').then (m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>import('../profile/profile.module').then (m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () =>import('../more/more.module').then (m => m.MorePageModule)
          }
        ]
      },
      {
        path: 'details',
        children: [
          {
            path: '',
            loadChildren: () =>import('../details/details.module').then (m => m.DetailsPageModule)
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () =>import('../notification/notification.module').then (m => m.NotificationPageModule)
          }
        ]
      },
      {
        path: 'aboutus',
        children: [
          {
            path: '',
            loadChildren: () =>import('../aboutus/aboutus.module').then (m => m.AboutusPageModule)
          }
        ]
      },
      {
        path: 'inbox',
        children: [
          {
            path: '',
            loadChildren: () =>import('../inbox/inbox.module').then (m => m.InboxPageModule)
          }
        ]
      },
      {
        path: 'my-orders',
        children: [
          {
            path: '',
            loadChildren: () =>import('../my-orders/my-orders.module').then (m => m.MyOrdersPageModule)
          }
        ]
      },
      {
        path: 'checkout',
        children: [
          {
            path: '',
            loadChildren: () =>import('../checkout/checkout.module').then (m => m.CheckoutPageModule)
          }
        ]
      },
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: () =>import('../payment/payment.module').then (m => m.PaymentPageModule)
          }
        ]
      },
       
      {
        path: '',
        redirectTo:'/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
