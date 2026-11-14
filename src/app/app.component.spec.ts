
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { UserService } from "./core";

describe("AppComponent", () => {
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userService = jasmine.createSpyObj<UserService>(
      "UserService",
      ["populate"]
    );

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: UserService,
          useValue: userService
        }
      ]
    }).overrideComponent(AppComponent, {
      set: { template: "" }
    });
  });

  it("should create the component", () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("should call populate when the component initializes", () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    expect(userService.populate).toHaveBeenCalled();
  });
});
