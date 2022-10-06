import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsNavComponent } from './boots-nav.component';

describe('BootsNavComponent', () => {
  let component: BootsNavComponent;
  let fixture: ComponentFixture<BootsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
