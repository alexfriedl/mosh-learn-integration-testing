import { TestBed, ComponentFixture } from "@angular/core/testing";
import { VoterComponent } from "./voter.component";

describe("VoterComponent", () => {
  // Declare variable of type VoterComponent
  let component: VoterComponent;

  // Declare variable of type ComponentFixture with argument of type VoterComponent
  // Wrapper around the component instance which gives access to the VoterComponent (.ts) and its template (.html)
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    // Creates dynamic testing module
    // different to unit tests (create new VoterComponent instance)
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    // The return type of the method createComponent() is ComponentFixture (generic class) with argument of type VoterComponent (generic argument)
    fixture = TestBed.createComponent(VoterComponent);

    // Initialize an instance of VoterComponent
    component = fixture.componentInstance;

    // Gives the root element (DOM) of the component
    fixture.nativeElement;

    // Is a wrapper around nativeElement which gives methods for querying the DOM
    fixture.debugElement;
  });

  it("", () => {});
});
