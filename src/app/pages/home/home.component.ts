import { Component, OnInit } from '@angular/core';
import { dataMock } from '../../data/data-mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;

  ngOnInit(): void {
    this.posts = dataMock;
  }
}
