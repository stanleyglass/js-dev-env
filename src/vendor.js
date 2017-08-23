/* This file contains references to the vendor lilbraries
 we're using in this project. This is used by webpack
 in the production build onlyl*. a seperate bundle for vendor
 code is useful since it's unlikly to change as often
 as the application's code. So all the libraries we refrence
 here will be written to vendor.js so they can be
 cached until one of the them change. So basically, this avoids
 customers having to download a huge JS file anytime a line
  of code changes. They only have to download vendor.js when
  a vendor libary changes which should be less frequent.
  any files that aren't referenced here will be bundled into
  main.js for the production build.
 */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
