import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingOverviewComponent } from './thing-overview.component';

describe('ThingOverviewComponent', () => {
  let component: ThingOverviewComponent;
  let fixture: ComponentFixture<ThingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
