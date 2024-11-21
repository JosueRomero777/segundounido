import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaulmuelaComponent } from './paulmuela.component';

describe('PaulmuelaComponent', () => {
  let component: PaulmuelaComponent;
  let fixture: ComponentFixture<PaulmuelaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaulmuelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaulmuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
