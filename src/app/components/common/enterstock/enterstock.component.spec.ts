import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterstockComponent } from './enterstock.component';

describe('EnterstockComponent', () => {
  let component: EnterstockComponent;
  let fixture: ComponentFixture<EnterstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterstockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
