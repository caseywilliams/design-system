# 0.1.17

* Bug fix for combination charts when no series layout has been set and an annotation is provided

# 0.1.16

* Properly disable closest point overlay with simple tooltip
* Adding more variables to help improve theming. Particularly around data labels and legends
* Fix right axis titles

# 0.1.15

* Add the ability to render simple tooltips

# 0.1.14

* Bug fixes to prevent scatters from stacking, update the default legend display state, etc

# 0.1.13

* Remove support for toggling series via the legend
* Ignore pointer-events over tooltips

# 0.1.12

* Legends should be disabled by default
* Fix regression in combination and sparkline layouts

# 0.1.11

* Bug fix for default stacking layout

# 0.1.10

* Support for horizontal legends
* Data labels
* Optionally handle errors through dispatchers
* Fixes for formatting and aggregating expanded legends

# 0.1.9

* Better formatting for axis labels
* Catch errors and pass to onError callback if applicable
* Add additional measurements to x axis for determine margins
* Fix bug where pie arcs would turn black after updating
* Fix bug where pies were incorrectly sized

# 0.1.6

* Properly support single series datasets
* Fix bug where axis were being rendered over series elements

# 0.1.5

* Set defaults for grid
* Allow column chart to be rotated into a bar chart via its axis

# 0.1.2

## Improvements

* Introduce scatter plot

## Fixes

* Support for custom colors
* Nodemon for rebuilding on changes
* Scroll bar gets cut off on the bottom of the legend
* Bottom margin isn't being applied to the legend
* Donut is getting too much left margin
* Percentage summary formatters
* Support for rendering legend aggregates

# 0.1.1

## Improvements

* Introduce sparkline chart

# 0.1.0

## Improvements

* Combination charts
* Support for splines

## Fixes

* Various bug fixes related to options, axis, etc.

# 0.0.2

## Improvements

* Measure axis labels and ticks so we can take them into account when applying margins.
* Dynamically increase or reduce the number of ticks based off the label width
* Better support for negative values in column charts

# 0.0.1

Initial tracked release