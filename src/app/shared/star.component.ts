import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})

export class StarComponent implements OnChanges {

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  @Input() rating: number = 1;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  cropWidth = 75;

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
