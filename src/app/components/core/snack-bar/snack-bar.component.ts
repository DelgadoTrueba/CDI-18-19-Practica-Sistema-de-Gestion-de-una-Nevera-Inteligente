import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SnackBarNotificationService } from 'src/app/services/snack-bar-notification.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  subscriptionNotificationService: Subscription;

  constructor(
    public snackbar: MatSnackBar,
    public notificationService: SnackBarNotificationService
  ) { }

  ngOnInit() {
    this.subscriptionNotificationService = this.notificationService.notification$.subscribe(
      (notification) => {this.openNotification(notification)}
    )
  }

  private openNotification(message: string){
    let config = new MatSnackBarConfig();
    config.duration = 2500;
    //config.verticalPosition = 'top'
    config.horizontalPosition = "right";
    config.panelClass = ['blue-snackbar']


    let dialogRef = this.snackbar.open(message, "X", config);
  }

  ngOnDestroy() {
    this.subscriptionNotificationService.unsubscribe();
  }

}
