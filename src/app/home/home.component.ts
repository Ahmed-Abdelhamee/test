import { CommonModule } from '@angular/common';
import { Component, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  arr: any = [
    {title: "", img: "" },
    {title: "", img: "" },
    {title: "", img: "" },
    {title: "", img: "" },
    {title: "", img: "" },
    {title: "", img: "" },
  ]

}
