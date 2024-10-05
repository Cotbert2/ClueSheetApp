import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetupPagePage } from './setup-page.page';

describe('SetupPagePage', () => {
  let component: SetupPagePage;
  let fixture: ComponentFixture<SetupPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
