import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCountComponent } from './old-count.component';

describe('OldCountComponent', () => {
  let component: OldCountComponent;
  let fixture: ComponentFixture<OldCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
