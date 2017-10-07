import { TestBed, async } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LinkGridComponent } from './link-grid/link-grid.component';
import { MatGridListModule } from '@angular/material';
import { InputformComponent } from './inputform/inputform.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LinkGridComponent,
        InputformComponent
      ],
      imports: [
        MatGridListModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'HomepageApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('HomepageApp');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to HomepageApp!');
  }));
});
