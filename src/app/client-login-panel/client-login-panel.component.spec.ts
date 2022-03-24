import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginPanelComponent } from './client-login-panel.component';

describe('ClientLoginPanelComponent', () => {
  let component: ClientLoginPanelComponent;
  let fixture: ComponentFixture<ClientLoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLoginPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
