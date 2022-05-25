// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bottomTab: [
    {
      label: 'Menu',
      url: 'menu',
      src: 'assets/imgs/menu.png',
      srcActivated: 'assets/imgs/menu-select.png',
      class: ''
    },
    {
      label: 'Offers',
      url: 'order',
      src: 'assets/imgs/order.png',
      srcActivated: 'assets/imgs/order-select.png',
      class: ''
    },
    {
      label: '',
      url: 'home',
      src: 'assets/imgs/home.png',
      srcActivated: 'assets/imgs/home-select.png',
      class: ''
    },
    {
      label: 'Profile',
      url: 'profile',
      src: 'assets/imgs/profile.png',
      srcActivated: 'assets/imgs/profile-select.png',
      class: ''
    },
    {
      label: 'More',
      url: 'more',
      src: 'assets/imgs/more.png',
      srcActivated: 'assets/imgs/more-select.png',
      class: ''
    },
   
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
