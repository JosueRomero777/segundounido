import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SerggioComponent } from './serggio.component';

describe('SerggioComponent', () => {
  let component: SerggioComponent;
  let fixture: ComponentFixture<SerggioComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SerggioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
