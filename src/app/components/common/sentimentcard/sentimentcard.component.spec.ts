import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentcardComponent } from './sentimentcard.component';

describe('SentimentcardComponent', () => {
  let component: SentimentcardComponent;
  let fixture: ComponentFixture<SentimentcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
