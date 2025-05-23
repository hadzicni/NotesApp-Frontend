import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NoteFullscreenComponent } from './note-fullscreen.component';

describe('NoteFullscreenComponent', () => {
  let component: NoteFullscreenComponent;
  let fixture: ComponentFixture<NoteFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteFullscreenComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: new Map() } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
