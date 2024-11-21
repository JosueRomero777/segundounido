import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DarwinjcbComponent } from './darwinjcb.component';

describe('DarwinjcbComponent', () => {
  let component: DarwinjcbComponent;
  let fixture: ComponentFixture<DarwinjcbComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DarwinjcbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarwinjcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
