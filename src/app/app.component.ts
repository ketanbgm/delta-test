import { Component, OnInit } from '@angular/core';
import { MousetrapService } from 'app/services/mousetrap';
import { CustomEventsService } from 'app/services/custom-events';
import { Router, NavigationStart } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

declare var $: any;
declare var _: any;
declare var Storages: any;
declare var fakeLoader: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MousetrapService, CustomEventsService]
})

export class AppComponent {

  public layout: string = 'default-sidebar-1';
  public background: string = 'light';
  public navbar: string = 'light';
  public sidebar: string = 'dark';
  public topNavigation: string = 'light';
  public logo: string = 'light';
  public collapsed: boolean = false;
  public controller: string;
  public view: string;

  constructor(private router: Router, private mousetrapService: MousetrapService, private customEventsService: CustomEventsService) {

    let config = {
      layout: this.layout,
      background: this.background,
      navbar: this.navbar,
      sidebar: this.sidebar,
      topNavigation: this.topNavigation,
      collapsed: this.collapsed,
      logo: this.logo
    };

    let storage = Storages.localStorage;
    let collapsed = config.collapsed;

    //reset localStorage on page load for demo purposes only. this can be removed in production
    storage.removeAll();

    if (storage.isEmpty('config') || !(storage.get('config'))) {
      storage.removeAll();
      storage.set('config', config);
    }
    config = storage.get('config');
    //console.log(config)
    //set attributes before page is loaded. this can be removed in production
    $('body').attr('data-background', config.background);
    $('body').attr('data-navbar', config.navbar);
    $('body').attr('data-sidebar', config.sidebar);
    $('body').attr('data-top-navigation', config.topNavigation);
    $('body').attr('data-collapsed', config.collapsed);
    $('body').attr('data-logo', config.logo);

    if ($('html').hasClass('loading')) {
      const loaderTime = 2000;
      $('#fakeloader').fakeLoader({
        timeToHide: loaderTime,
        zIndex: '99999',
        spinner: 'spinner7',
        bgColor: '#263238'
      });
      setTimeout(function() {
        $('html').removeClass('loading');
      }, loaderTime);
    }

    //alternative layouts for some urls
    const demoRedirects = [
      '/demos/default-sidebar',
      '/demos/collapsed-sidebar',
      '/demos/off-canvas',
      '/demos/top-navigation-1',
      '/demos/top-navigation-2',
      '/demos/dark-background',
    ];

    const emptyView1 = [
      '/pages/error-page',
      '/pages/coming-soon',
      '/pages/contact-us',
      '/pages/create-account',
      '/', //login page route
      '/pages/reset-password',
      '/pages/subscribe',
      '/pages/under-maintenance',
      '/pages/unlock-account',
    ];

    const self = this;

    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
       const copy = Object.assign({}, val);
       var url = copy.url;
       console.log(url)
        if (_.includes(emptyView1, url)) {
          self['layout'] = 'empty-view-1';
          $('body').attr('data-background', 'light');
          $('body').attr('data-layout', self['layout']);
         // this.router.navigate(['/']);
        } else {
          self['layout'] = config.layout;
          $('body').attr('data-layout', self['layout']);
        }

        //set data-controller and data-view attributes
        const data = url.split('/').filter(url => url.length > 0);
        let currentController = $('body').attr('data-controller');
        let currentView = $('body').attr('data-view');

        if (_.includes(demoRedirects, url)) {
          console.log('demo redirect', url, data);
          //modify urls to match layouts
          if (data[1] == 'default-sidebar') {
            self['layout'] = 'default-sidebar-1';
            config = Object.assign({}, config, {
              layout: 'default-sidebar-1'
            });
          } else if (data[1] == 'collapsed-sidebar') {
            self['layout'] = 'collapsed-sidebar-1';
            config = Object.assign({}, config, {
              layout: 'collapsed-sidebar-1'
            });
          } else if (data[1] == 'top-navigation-1') {
            self['layout'] = 'top-navigation-1';
            config = Object.assign({}, config, {
              layout: 'top-navigation-1'
            });
            $('body').attr('data-background', 'light');
            $('body').attr('data-navbar', 'dark');
            $('body').attr('data-top-navigation', 'dark');
          } else if (data[1] == 'top-navigation-2') {
            self['layout'] = 'top-navigation-2';
            config = Object.assign({}, config, {
              layout: 'top-navigation-2'
            });
            $('body').attr('data-background', 'light');
            $('body').attr('data-navbar', 'indigo');
            $('body').attr('data-top-navigation', 'indigo');
          } else if (data[1] == 'off-canvas') {
            self['layout'] = 'off-canvas-1';
            config = Object.assign({}, config, {
              layout: 'off-canvas-1'
            });
          } else if (data[1] == 'dark-background') {
            self['layout'] = 'default-sidebar-1';
            $('body').attr('data-background', 'dark');
            $('body').attr('data-navbar', 'dark');
            $('body').attr('data-top-navigation', 'dark');
            config = Object.assign({}, config, {
              layout: 'default-sidebar-1'
            });
          } else {
            self['layout'] = 'default-sidebar-1';
            config = Object.assign({}, config, {
              layout: 'default-sidebar-1'
            });
          }
          self['controller'] = 'dashboards';
          self['view'] = 'dashboard';
          $('body').attr('data-controller', 'dashboards');
          $('body').attr('data-view', 'dashboard');
          storage.set('config', config);
          let newUrl = `/dashboards/dashboard`;
          router.navigateByUrl(newUrl);

        } else {

          if (data.length == 1) {
            self['layout'] = data[0];
            $('body').attr('data-layout', data[0]);
            $('body').attr('data-collapsed', false);
            config = Object.assign({}, config, {
              layout: data[0],
              collapsed: false
            });
            storage.set('config', config);
            let newUrl = `/${currentController}/${currentView}`;
            router.navigateByUrl(newUrl);

            //set colors for top navigation layouts. this can be removed in production
            if (data[0] == 'top-navigation-1') {
              $('body').attr('data-background', 'light');
              $('body').attr('data-navbar', 'dark');
              $('body').attr('data-top-navigation', 'dark');
            }
            if (data[0] == 'top-navigation-2') {
              $('body').attr('data-background', 'light');
              $('body').attr('data-navbar', 'indigo');
              $('body').attr('data-top-navigation', 'indigo');
            }
          } else if (data.length == 2) {
            $('body').attr('data-controller', data[0]);
            $('body').attr('data-view', data[1]);
            self['controller'] = data[0];
            self['view'] = data[1];
          } else {
            self['controller'] = 'dashboards';
            self['view'] = 'dashboard';
            $('body').attr('data-controller', 'dashboards');
            $('body').attr('data-view', 'dashboard');
          }
        }

      }
    });

    //mousetrap helpers to control layout settings with the keyboard. this can be removed in production
    mousetrapService.helpers();

    //custom events used to update demo views. this can be removed in production
    customEventsService.helpers();
  }

}

