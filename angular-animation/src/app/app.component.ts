import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState',[
      state('normal', style({
        backgroundColor: 'red',
        transform: "translateX(0)"
      })),
      state('highlight', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlight', [
        animate('1s')
      ]),
      // transition('highlight => normal', [
      //   animate('0.5s')
      // ]),
    ]),
    trigger('wildState',[
      state('normal', style({
        backgroundColor: 'red',
        transform: "translateX(0) scale(1)"
      })),
      state('highlight', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(0.8)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlight', [
        animate('1s')
      ]),
      transition('highlight => normal', [
        animate('0.5s')
      ]),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange'
        }),
        animate('2s',style({
          borderRadius : '50px'
        })),
        animate('0.8s')
      ]),
    ]),
    trigger('list1',[
      state('in', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate('0.8s')
      ]),
      transition('* => void', [
        animate('1s', style({
          transform: 'translateX(100px)',
          opacity: 0
        })),
      ])
    ]),
    trigger('list2',[
      state('in', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      transition('void => *', [
        animate('0.8s', keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offsett: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offsett: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offsett: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offsett: 1
          })

        ]))
      ]),
      transition('* => void', [
        animate('2s', style({
          transform: 'translateX(-100px)',
          opacity: 0,
        })),
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'angular-animation';
  itemList = ['milk', 'Bread', 'Egg'];
  state = 'normal';
  wildState = 'normal';
  
  onAdd(item: string) {
      console.log('onAdd item called here !' + item)
      this.itemList = [...this.itemList, item];
      return false;
  }

  onDelete(item:string) {
    console.log('on delete called here');
    this.itemList.splice(this.itemList.indexOf(item),1);
  }

  onAnimate() {
    this.state = this.state == 'normal' ? 'highlight' :'normal'; 
    this.wildState = this.wildState == 'normal' ? 'highlight' :'normal'; 
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

}
