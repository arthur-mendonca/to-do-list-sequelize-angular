import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MaterialModule } from "../material.module";

@Component({
  selector: "app-confirmation-dialog",
  standalone: true,
  imports: [MaterialModule],
  templateUrl: "./confirmation-dialog.component.html",
  styleUrl: "./confirmation-dialog.component.css",
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
