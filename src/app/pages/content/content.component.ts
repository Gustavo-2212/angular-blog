import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMock } from '../../data/data-mock'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id: string | null = '0';
  @Input() photo: string = '';
  @Input() category: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get('id') );

    this.setValuesToComponent( this.id );
  }

  setValuesToComponent(id: string | null) {
    const result = dataMock.filter( post => post.id === this.id )[0];

    this.photo = result.photo;
    this.category = result.category;
    this.title = result.title;
    this.description = result.description;
  }

}
