import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBase } from './card-base';

describe('CardBase', () => {
  let component: CardBase;
  let fixture: ComponentFixture<CardBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBase],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
