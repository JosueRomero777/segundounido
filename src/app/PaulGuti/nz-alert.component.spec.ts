import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NzAlertComponent } from './nz-alert.component';

describe('NzAlertComponent', () => {
  let component: NzAlertComponent;
  let fixture: ComponentFixture<NzAlertComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NzAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
