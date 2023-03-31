# chrome-crossdomain-pagehide
Reproducer repo for a chrome bug that doesn't fire pagehide events on cross domain navigation if page is still loading

## Steps to reproduce
* Run `npm install`
* run `npm start` to start a server on port 3000
* open a chromium-based browser
* open devtools
* navigate to `http://localhost:3000`
* click on the link

## Expected outcome
A POST request to `http://localhost:3000` should have been fired.

## Actual outcome
The `pagehide` event, where the POST request should have been fired, is never called.

## Notes
This only happens on cross-domain navigations. It works fine on Firefox.
