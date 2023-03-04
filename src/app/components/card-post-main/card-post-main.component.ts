import { Component, Input, OnInit } from '@angular/core';
import { dataMock } from '../../data/data-mock';


@Component({
  selector: 'app-card-post-main',
  templateUrl: './card-post-main.component.html',
  styleUrls: ['./card-post-main.component.css']
})
export class CardPostMainComponent implements OnInit {
  @Input() id: string = '0';
  photo: string = '';
  category: string = '';
  title: string = '';
  description: string = '';

  ngOnInit(): void {
    this.setContentToComponent(this.id);
  }

  setContentToComponent(id: string) {
    const result = dataMock.filter( post => this.id === post.id )[0];

    this.photo = result.photo;
    this.category = result.category;
    this.title = result.title;
    this.description = result.description;
  }

}
