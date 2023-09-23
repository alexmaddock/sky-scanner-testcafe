# Introduction 

This repo is designed as a sample to demo test code and logic against the Skyscanner system - Web and API.

It is not an exhaustive test suite, rather it is in place to demo certain key concepts like the abstraction methods, for say, Page Object Model.

## Test Locations

Tests are found in [spec dir](https://github.com/alexmaddock/sky-scanner-testcafe/blob/main/spec/homePage.js). These inherit from [pageObjects dir](https://github.com/alexmaddock/sky-scanner-testcafe/blob/main/pageObjects/HomePage.js), which uses date picker logic developed in the [helpers dir](https://github.com/alexmaddock/sky-scanner-testcafe/blob/main/helpers/datePicker.js).

The tests have been purposely built to avoid variable assignment and return statements. They use a pure POM design, at the cleanest most readable level possible.

## System Requirements
Latest LTS version of node. Comes with npm from site install.

[nodes-site](https://nodejs.org/en/download)

Checkout project and run in terminal

`npm install`

## To Run

`npm run test`

## Other notes

The Skyscanner flight booking system is not a trivial piece to test. While on the surface it seems easy enough to just pick dates and book flights, the sheer act of trying to safeguard against day / date overflows into the next month and booking returning flights as a user would, has its challenges. 

Further to this, some destinations cannot be scanned, and therefore return no results. This is namely due to the fact that Skyscanner itself does not control the prices and timelines of flights, or routes. It relies on third party API's to function with correct results. This fact alone has at times put a lock on the web elements from selecting new dates into the next month, should prices or routes not be found.

Essentially this is testing third party integrations indirectly, and is known to not be the best practice.
