import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ZambranoComponent } from './zambrano.component';

describe('ZambranoComponent', () => {
  let component: ZambranoComponent;
  let fixture: ComponentFixture<ZambranoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZambranoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZambranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
