import { act, renderHook } from "@testing-library/react";
import { useLoading } from "./useLoading";
import { setImmediate } from "timers";

describe("useLoading", () => {
  it("returns data after fetchData works out", async () => {
    function getData() {
      return new Promise((resolve) => resolve(1));
    }

    const { result } = renderHook(() => useLoading(getData));
    await act(() => new Promise(setImmediate));

    console.log(result);
    expect(result.current).toBe(1);
  });

  it("returns null before fetchData works out", async () => {
    function getData() {
      return new Promise((resolve) => resolve(1));
    }

    const { result } = renderHook(() => useLoading(getData));

    expect(result.current).toBeNull();
    await act(() => new Promise(setImmediate));
  });
});
