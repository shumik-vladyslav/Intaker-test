import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('adElement') adElement: ElementRef;

  advIsFixed: boolean;

  menuItems = [
    {
      name: "Speakers",
      path: '/speakers'
    },
    {
      name: "Video",
      path: '/video'
    },
  ];

  adList = [
    {
      imgUrl: 'https://www.semtek.com.vn/wp-content/uploads/2020/09/15-1.jpg'
    },
    {
      imgUrl: 'https://landerapp.com/blog/wp-content/uploads/2018/08/low-cost-advertising-for-startups.png'
    },
    {
      imgUrl: 'https://www.entrepreneurshipinabox.com/wp-content/uploads/Trendy-Ways-to-Advertise-Your-Company-1024x682.jpg'
    },
    {
      imgUrl: 'https://sagemailer.com/blog/wp-content/uploads/2020/06/Amazon-Advertising-Guide-AAP-AMG-and-Advertising-Console.jpg'
    },
    {
      imgUrl: 'https://st2.depositphotos.com/7865540/12334/i/600/depositphotos_123344792-stock-photo-advertising-concept-on-a-screen.jpg'
    },
    {
      imgUrl: 'https://www.semtek.com.vn/wp-content/uploads/2020/09/15-1.jpg'
    },
    {
      imgUrl: 'https://landerapp.com/blog/wp-content/uploads/2018/08/low-cost-advertising-for-startups.png'
    },
    {
      imgUrl: 'https://www.entrepreneurshipinabox.com/wp-content/uploads/Trendy-Ways-to-Advertise-Your-Company-1024x682.jpg'
    },
    {
      imgUrl: 'https://sagemailer.com/blog/wp-content/uploads/2020/06/Amazon-Advertising-Guide-AAP-AMG-and-Advertising-Console.jpg'
    },
    {
      imgUrl: 'https://st2.depositphotos.com/7865540/12334/i/600/depositphotos_123344792-stock-photo-advertising-concept-on-a-screen.jpg'
    },
  ]

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    if (!this.adElement) return;
    this.advIsFixed = (this.adElement.nativeElement.offsetHeight - ($event as any).target['scrollingElement'].offsetHeight) <= ($event as any).target['scrollingElement'].scrollTop - 50;
  }
}
