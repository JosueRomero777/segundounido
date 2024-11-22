import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SebasCuestaComponent } from './sebas-cuesta.component';

describe('SebasCuestaComponent', () => {
  let component: SebasCuestaComponent;
  let fixture: ComponentFixture<SebasCuestaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SebasCuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SebasCuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
