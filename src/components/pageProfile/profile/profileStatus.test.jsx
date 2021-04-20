import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./profileStatus";

describe("profile status component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });
});