Next Release
-------------
* Added download attribute check for IE11 in unload trigger.

1.5.0
------
* Added support for calculating height of body containing absolute positioned elements.
* Restored default height calculation back to bodyOffset.

1.4.0
------
* Added trigger for frame unloading. #18
* Updated default height calculation to bodyScroll.

1.3.2
------
* Updated default height calculation to max to account for dropdowns.


1.3.1
------
* Updated node version to 8.9.2 to support NPM 2FA


1.3.0
------
* Added the feature to pass in custom attributes for mounted iframe.
* Added support for auto-authorizing the consumer.


1.2.1
------
* Removed message event listeners when unmounting frames.


1.2.0
------
* Added `load` method to frame in consumer.
* Updated consumer's unmount method to avoid potential memory leak.


1.1.0
------
* Removed the need of adding polyfills when consuming xfc.


1.0.2
------
* Updated dependency "mutation-observer" to v1.0.3 or above.


1.0.1
------
* Updated Webpack to v2.


1.0.0
------
* Initial release
