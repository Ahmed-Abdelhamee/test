import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() globalEmit: EventEmitter<string> = new EventEmitter()

  click() {
    this.globalEmit.emit("hello")
    console.log("asd")
  }

  arr:any[]=[];

  asd(){
    this.arr.push("asdasd")
  }
}
