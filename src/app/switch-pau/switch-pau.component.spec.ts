import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchPauComponent } from './switch-pau.component';

describe('SwitchPauComponent', () => {
  let component: SwitchPauComponent;
  let fixture: ComponentFixture<SwitchPauComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchPauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchPauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
