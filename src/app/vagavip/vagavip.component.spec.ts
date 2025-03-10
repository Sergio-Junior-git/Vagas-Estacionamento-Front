import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagavipComponent } from './vagavip.component';

describe('VagavipComponent', () => {
  let component: VagavipComponent;
  let fixture: ComponentFixture<VagavipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagavipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagavipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
