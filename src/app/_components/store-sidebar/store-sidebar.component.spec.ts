import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSidebarComponent } from './store-sidebar.component';

describe('StoreSidebarComponent', () => {
  let component: StoreSidebarComponent;
  let fixture: ComponentFixture<StoreSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
