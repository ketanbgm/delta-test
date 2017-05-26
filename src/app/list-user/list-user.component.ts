import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor() { }

   ngOnInit() {
  
    $('#datatable-example-2').DataTable();
  }

}
