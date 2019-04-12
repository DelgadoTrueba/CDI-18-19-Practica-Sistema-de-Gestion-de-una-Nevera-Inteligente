import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { SnackBarNotificationService } from 'src/app/services/snack-bar-notification.service';

@Component({
  selector: 'app-all-settings',
  templateUrl: './all-settings.component.html',
  styleUrls: ['./all-settings.component.css']
})
export class AllSettingsComponent implements OnInit {
  encendida: boolean;

  constructor(
    private router: Router, private r:ActivatedRoute,
    private globalService: GlobalService,
    private snackBar: SnackBarNotificationService
  ) { }

  ngOnInit() {
    this.encendida = this.globalService.encendida;
  }

  irAMisProductos(){
    this.router.navigate(["../misProductos"], { relativeTo: this.r });
  }

  irAIdeas(){
    this.router.navigate(["../ideasParaComer"], { relativeTo: this.r });
  }

  irATecnicp(){
    this.router.navigate(["../servicioTecnico"], { relativeTo: this.r });
  }

  irATemperatura(){
    this.router.navigate(["../temperatura"], { relativeTo: this.r });
  }

  nevera(){
    if(this.encendida === true){
      this.encendida = false;
      this.globalService.encendida = false;
      this.snackBar.notify("Nevera Apagada")
    }
    else{
      this.encendida = true;
      this.globalService.encendida = true;
      this.snackBar.notify("Nevera Encendida")
    }
  }
}
