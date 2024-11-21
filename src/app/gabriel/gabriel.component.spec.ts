import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GabrielComponent } from './gabriel.component';

describe('GabrielComponent', () => {
  let component: GabrielComponent;
  let fixture: ComponentFixture<GabrielComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GabrielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GabrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
