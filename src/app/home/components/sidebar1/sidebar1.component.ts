import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrls: ['./sidebar1.component.css']
})
export class Sidebar1Component implements OnInit {

  items:MenuItem[]=[];
  constructor() { }
  

  
  ngOnInit(): void {

    this.items = [
      
    //   {
    //   label: 'Users',
    //   icon:'pi pi-fw pi-user',
    //   items: [
    //       {
    //           label: 'New',
    //           icon:'pi pi-fw pi-user-plus',

    //       },
    //       {
    //           label: 'Delete',
    //           icon:'pi pi-fw pi-user-minus',
    //       },
    //       {
    //           label: 'Search',
    //           icon:'pi pi-fw pi-users',
    //           items: [
    //               {
    //               label: 'Filter',
    //               icon:'pi pi-fw pi-filter',
    //               items: [
    //                   {
    //                       label: 'Print',
    //                       icon:'pi pi-fw pi-print'
    //                   }
    //               ]
    //               },
    //               {
    //               icon:'pi pi-fw pi-bars',
    //               label: 'List'
    //               }
    //           ]
    //       }
    //   ]
    //   },
      {
        label: 'Bus Booking',
        icon:'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon:'pi pi-fw pi-user-plus',
                routerLink:'/home/busBooking'
            },
           
        ]
        },
        
           
      {
          label: 'Customer',
          icon:'pi pi-fw pi-user',
          items: [
              {
                  label: 'New',
                  icon:'pi pi-fw pi-user-plus',
                  routerLink:'/home/addCustomer'
              },
              {
                  label: 'View',
                  icon:'pi pi-fw pi-user-plus',
                  routerLink:"/home/customerList"

              },
          ]
          },

          {
            label: 'City Infromation',
            icon:'pi pi-fw pi-user',
            items: [
                {
                    label: 'Add',
                    icon:'pi pi-fw pi-user-plus',
                    routerLink:'/home/addCity'
                },
               
            ]
            },

            {
                label: 'Source Destination',
                icon:'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Add',
                        icon:'pi pi-fw pi-user-plus',
                        routerLink:'/home/sourceDestination'
                    },
                  
                ]
                },

                {
                    label: 'Bus Depo',
                    icon:'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Add',
                            icon:'pi pi-fw pi-user-plus',
                            routerLink:'/home/busDepo'
                        },
                       
                    ]
                    },

                    {
                        label: 'Bus Depo Route',
                        icon:'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Add',
                                icon:'pi pi-fw pi-user-plus',
                                routerLink:'/home/busDepoRoute'
                            },
                          
                        ]
                        },

                        {
                            label: 'Bus Type',
                            icon:'pi pi-fw pi-user',
                            items: [
                                {
                                    label: 'Add',
                                    icon:'pi pi-fw pi-user-plus',
                                    routerLink:'/home/busType'
                                },
                              
                            ]
                            },

                            {
                                label: 'Bus Detail',
                                icon:'pi pi-fw pi-user',
                                items: [
                                    {
                                        label: 'Add',
                                        icon:'pi pi-fw pi-user-plus',
                                        routerLink:'/home/busDetail'
                                    },
                                   
                                ]
                                },
        
                                {
                                    label: 'Bus Route Bus Detail',
                                    icon:'pi pi-fw pi-user',
                                    items: [
                                        {
                                            label: 'Add',
                                            icon:'pi pi-fw pi-user-plus',
                                            routerLink:'/home/busRouteBusDetail'
                                        },
                                       
                                    ]
                                    },

                                    {
                                        label: 'Bus Route Location',
                                        icon:'pi pi-fw pi-user',
                                        items: [
                                            {
                                                label: 'Add',
                                                icon:'pi pi-fw pi-user-plus',
                                                routerLink:'/home/busRouteLocation'
                                            },
                                          
                                        ]
                                        },
        
                                      
                    
            
    
     
  ]

  }
  display=false;
  onclickfunc(){
     this.display=true;
  }

}
