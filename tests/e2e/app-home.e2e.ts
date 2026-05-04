import { expect, test } from "@playwright/test";

test("opens visual preview for Ship Rules Lite", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Ship Rules Lite" })).toBeVisible();
  await expect(page.getByText("Conservative shipping restrictions for PO boxes, pickup-only products and regional rules.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
