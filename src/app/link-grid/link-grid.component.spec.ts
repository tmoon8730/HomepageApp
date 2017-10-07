import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material';
import { LinkGridComponent } from './link-grid.component';

describe('LinkGridComponent', () => {
  let component: LinkGridComponent;
  let fixture: ComponentFixture<LinkGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkGridComponent ],
      imports: [MatGridListModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // TODO: Remove hardcoded references
  it('should render a grid with a link to google', async() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').first().textContent).toContain('Google');
  });

});
