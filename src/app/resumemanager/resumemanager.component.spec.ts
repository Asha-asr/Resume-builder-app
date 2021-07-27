import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumemanagerComponent } from './resumemanager.component';

describe('ResumemanagerComponent', () => {
  let component: ResumemanagerComponent;
  let fixture: ComponentFixture<ResumemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
