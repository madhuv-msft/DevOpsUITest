import { ObservableArray } from "azure-devops-ui/Core/Observable";

describe("UTisl Tests", () => {
    it("Check observable", () => {
        const items = new ObservableArray<any>();
        expect(items.length).toBe(0);
    });
});