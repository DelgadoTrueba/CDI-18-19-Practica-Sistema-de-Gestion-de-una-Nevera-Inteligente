import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-settings',
  templateUrl: './all-settings.component.html',
  styleUrls: ['./all-settings.component.css']
})
export class AllSettingsComponent implements OnInit {

  constructor(
    private router: Router, private r:ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  irAMisProductos(){
    this.router.navigate(["../misProductos"], { relativeTo: this.r });
  }

  irAIdeas(){
    this.router.navigate(["../ideasParaComer"], { relativeTo: this.r });
  }

}
