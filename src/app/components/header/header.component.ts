import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AppRoles } from '../../../app.roles';
import { IsInRoleDirective } from '../../dir/is.in.role.dir';
import { AppAuthService } from '../../services/app.auth.service';
import { NotesService } from '../../services/notes.service';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    IsInRoleDirective,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private dialog: MatDialog,
    public authService: AppAuthService,
    private notesService: NotesService,
    private router: Router
  ) {}
  readonly AppRoles = AppRoles;

  openDialog() {
    const dialogRef = this.dialog.open(NoteDialogComponent);

    dialogRef.afterClosed().subscribe((newNote) => {
      if (newNote) {
        this.notesService.addNote(newNote);
      }
    });
  }

  login(): void {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
