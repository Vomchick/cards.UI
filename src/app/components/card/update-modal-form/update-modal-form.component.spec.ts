import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModalFormComponent } from './update-modal-form.component';

describe('UpdateModalFormComponent', () => {
  let component: UpdateModalFormComponent;
  let fixture: ComponentFixture<UpdateModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateModalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
