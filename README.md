![Build status](https://github.com/darrensapalo/daily-bible-readings/actions/workflows/build.yml/badge.svg)


# Daily Bible Readings

This project allows you to automatically retrieve daily bible readings from USCCB and generates the readings into a PDF.

The purpose of this project is to automate the process of building power point presentations used in local parishes that display the readings.

## Installation

1. `git clone git@github.com:darrensapalo/daily-bible-readings.git`
2. `npm install`
3. `npm test`
4. `npm start`

## Context

In our local parish church, a volunteer is assigned to do produce daily powerpoint presentations that contain the responsorial psalm, the gospel acclamation, and etc. for public display for the congregation to be able to read.

Additionally, during weekdays this volunteer also compiles the daily readings to be used by the lector (which includes those readings as well).

I want to automate this process, and publicly share this tool to anyone who has a similar use case.

## Dependencies

This project uses the following technologies:

1. [rxjs](https://www.npmjs.com/package/rxjs) - data processing
2. [typescript](https://www.npmjs.com/package/typescript) - scalable javascript programming
3. [cheerio](https://www.npmjs.com/package/cheerio) - generating HTML and PDF files from markdown
4. [jest](https://www.npmjs.com/package/jest) - javascript testing

## Contributors

If you're interested to help out on the project, check out the [contributing page](./CONTRIBUTING.md).
