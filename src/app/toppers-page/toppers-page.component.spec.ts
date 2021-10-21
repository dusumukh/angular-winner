import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppersPageComponent } from './toppers-page.component';

describe('ToppersPageComponent', () => {
  let component: ToppersPageComponent;
  let fixture: ComponentFixture<ToppersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
