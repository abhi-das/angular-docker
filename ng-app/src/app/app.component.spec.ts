
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

fdescribe('TestHeaderComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ AppComponent ],
      imports: [HttpClientTestingModule],
      providers: [UserService]

    }).compileComponents();

    userService = TestBed.get(UserService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('run only user1 case', () => {

    spyOn(component, 'deleteUser').and.callThrough();
    userService.addUser({
        name: 'user1',
        id: 1
    });
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.deleteUser).toHaveBeenCalled()
  })
});
