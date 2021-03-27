import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongrulationComponent } from './congrulation.component';

describe('CongrulationComponent', () => {
  let component: CongrulationComponent;
  let fixture: ComponentFixture<CongrulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongrulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongrulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
