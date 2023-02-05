import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCardComponent } from './interactive-card.component';

describe('InteractiveCardComponent', () => {
  let component: InteractiveCardComponent;
  let fixture: ComponentFixture<InteractiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { StoreModule, Store, select } from '@ngrx/store';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';

// import { MyComponent } from './my.component';
// import * as fromRoot from './app.state';
// import { initialState } from './app.state';

// describe('MyComponent', () => {
//   let component: MyComponent;
//   let fixture: ComponentFixture<MyComponent>;
//   let store: MockStore<fromRoot.State>;
//   const selectMyState = (state: fromRoot.State) => state.myState;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [StoreModule.forRoot({})],
//       declarations: [MyComponent],
//       providers: [provideMockStore({ initialState })]
//     });

//     fixture = TestBed.createComponent(MyComponent);
//     component = fixture.componentInstance;
//     store = TestBed.inject(Store);
//     spyOn(store, 'pipe').and.returnValue(of({}));
//     spyOn(store, 'dispatch').and.callThrough();
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call the selector', () => {
//     store.pipe(select(selectMyState)).subscribe();
//     expect(store.pipe).toHaveBeenCalledWith(select(selectMyState));
//   });
// });

