import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatingLogEntryComponent } from './skating-log-entry.component';

describe('SkatingLogEntryComponent', () => {
  let component: SkatingLogEntryComponent;
  let fixture: ComponentFixture<SkatingLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkatingLogEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkatingLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
