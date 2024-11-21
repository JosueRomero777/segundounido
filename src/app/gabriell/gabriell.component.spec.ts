import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GabriellComponent } from './gabriell.component';

describe('GabriellComponent', () => {
  let component: GabriellComponent;
  let fixture: ComponentFixture<GabriellComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GabriellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GabriellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
