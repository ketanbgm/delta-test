import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'navbar-1',
  templateUrl: '../elements/navbar-1.html'
})

export class Navbar1Component {

  constructor() {
  }

  toggleLayout(): void {
    const body = $('body');
    const collapsed = body.attr('data-collapsed') === 'true' ? true : false;
    body.attr('data-collapsed', !collapsed);
  }

  toggleRightSidebar(): void {
    $('.right-sidebar-outer').toggleClass('show-from-right');
    if ($('.right-sidebar-outer').hasClass('show-from-right')) {
      $('.right-sidebar-backdrop').toggleClass('fade in');
    } else {
      $('.right-sidebar-backdrop')
        .removeClass('fade')
        .removeClass('in');
    }
  }

  toggleFullscreen(): void {
    const body = $('body');
    const value = body.attr('data-fullscreen') === 'true' ? true : false;
    body.attr('data-fullscreen', !value);
  }

}

