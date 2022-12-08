import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentquoteComponent } from './currentquote.component';

describe('CurrentquoteComponent', () => {
  let component: CurrentquoteComponent;
  let fixture: ComponentFixture<CurrentquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentquoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
