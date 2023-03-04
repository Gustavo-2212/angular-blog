import { Component, Input, OnInit } from '@angular/core';
import { dataMock } from '../../data/data-mock';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  @Input() id: string = '0';
  photo: string = '';
  category: string = '';
  title: string = '';

  ngOnInit(): void {
    this.setContentToComponent(this.id);
  }

  setContentToComponent(id: string) {
    const result = dataMock.filter( value => value.id === this.id )[0];

    this.photo = result.photo;
    this.category = result.category;
    this.title = result.title;
  }

}
