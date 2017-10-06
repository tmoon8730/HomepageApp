import { TestBed, async } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LinkGridComponent } from './link-grid/link-grid.component';
import { MatGridListModule } from '@angular/material';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LinkGridComponent,
      ],
      imports: [
        MatGridListModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('HomepageApp');
  }));
});
