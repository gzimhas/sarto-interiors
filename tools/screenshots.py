"""
Capture desktop and mobile screenshots of every page.
Requires a running server: `npm run build && npm run start -- -p 3077`
Usage: python3 tools/screenshots.py [base_url]
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3077"
OUT = Path(__file__).resolve().parents[1] / "screenshots"
OUT.mkdir(exist_ok=True)

PAGES = {
    "de-home": "/de",
    "de-projekte": "/de/projekte",
    "de-projekt-obermumpf": "/de/projekte/obermumpf",
    "de-leistungen": "/de/leistungen",
    "de-leistungen-kuechen": "/de/leistungen/kuechen",
    "de-fuer-architekten": "/de/fuer-architekten",
    "de-fuer-entwickler": "/de/fuer-entwickler",
    "de-handwerk": "/de/handwerk",
    "de-ueber-sarto": "/de/ueber-sarto",
    "de-showroom": "/de/showroom",
    "de-kontakt": "/de/kontakt?path=developer",
    "en-home": "/en",
    "en-developers": "/en/for-developers",
}

VIEWPORTS = {"desktop": (1440, 900), "mobile": (390, 844)}


def settle(page):
    # Trigger reveal animations by scrolling through the page, then return to top.
    h = page.evaluate("document.body.scrollHeight")
    y = 0
    while y < h:
        page.mouse.wheel(0, 700)
        y += 700
        page.wait_for_timeout(60)
        h = page.evaluate("document.body.scrollHeight")
    page.wait_for_timeout(900)
    page.evaluate("window.scrollTo({top: 0, behavior: 'instant'})")
    page.wait_for_timeout(800)


with sync_playwright() as p:
    browser = p.chromium.launch()
    for vp, (w, h) in VIEWPORTS.items():
        ctx = browser.new_context(viewport={"width": w, "height": h}, device_scale_factor=1,
                                  is_mobile=(vp == "mobile"), has_touch=(vp == "mobile"))
        page = ctx.new_page()
        for name, path in PAGES.items():
            page.goto(BASE + path, wait_until="networkidle")
            settle(page)
            page.screenshot(path=str(OUT / f"{name}-{vp}.png"), full_page=True)
            print("captured", name, vp)
        # Mobile menu open state
        if vp == "mobile":
            page.goto(BASE + "/de", wait_until="networkidle")
            page.click("button[aria-controls='site-menu']")
            page.wait_for_timeout(700)
            page.screenshot(path=str(OUT / f"de-menu-{vp}.png"))
        ctx.close()
    browser.close()
