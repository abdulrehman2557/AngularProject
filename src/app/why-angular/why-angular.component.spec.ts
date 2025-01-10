import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAngularComponent } from './why-angular.component';

describe('WhyAngularComponent', () => {
  let component: WhyAngularComponent;
  let fixture: ComponentFixture<WhyAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
