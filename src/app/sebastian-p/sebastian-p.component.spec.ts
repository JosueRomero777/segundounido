import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SebastianPComponent } from './sebastian-p.component';

describe('SebastianPComponent', () => {
  let component: SebastianPComponent;
  let fixture: ComponentFixture<SebastianPComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SebastianPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SebastianPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
