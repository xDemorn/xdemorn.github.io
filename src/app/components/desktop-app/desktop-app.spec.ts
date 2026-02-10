import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopApp } from './desktop-app';

describe('DesktopApp', () => {
  let component: DesktopApp;
  let fixture: ComponentFixture<DesktopApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
