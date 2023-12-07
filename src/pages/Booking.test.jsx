import { initializeTimes } from "./Booking";

describe("initializeTimes", () => {
  it("should return an array of times", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  it("should return an array with specific times", () => {
    const times = initializeTimes();
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(times).toEqual(expectedTimes);
  });
});
