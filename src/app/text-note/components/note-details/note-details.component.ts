import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  @Input() note: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe(data => {
      debugger;
    })
  }

}
