# Find My City Council Member #
## About ##
At the [2013 Atlanta Govathon Hackathon](http://clatl.com/freshloaf/archives/2013/11/18/govathon-ii-civic-hackers-come-back-to-city-hall-for-more-techno-troubleshooting)
[Jordan Streiff](https://github.com/supertrill) and [Gerry Pass](https://github.com/rgpass) started the Find My City 
Council Member app from scratch. This simple app went on to win the "Atlanta Just Go Ahead and Implement This" award.

Check out the [live demo](http://www.jordanstreiff.com/atlanta-districts/).

## Implementation ##
### Getting it to Work ###
Note: We have taken a minimalist approach to this app. Make sure to follow these directions.
* Click on Download ZIP in the bottom-right
* Create a new folder named "js" in the same folder as index.html (or whatever page is being referenced)
  * If you decide to put these files into a different folder, remember to address the src property in the &#60;script&#62; elements
* Copy the .js files into the "js" folder
* Copy the portions of the code that are found in index.html into your file. Need to make sure that you copy what's in both &#60;head&#62; and in &#60;body&#62;.
  * As mentioned above, if you put the .js files somewhere outside of ~/js, you will need to alter the src property in the &#60;script&#62; tags

### Customizing and Altering ###
* To customize what text is shown
  * Edit the index.html code in the &#60;div&#62; element.
* To add new attributes for each district
  * Add a new &#60;h1&#62; in index.html
  * Give it a unique id
  * Alter the code in implement.js, emulating the jQuery found in the codeAddress() function. 

### Questions ###
If you have any issues with implementation, please send an e-mail to both Jordan (jordan.streiff@gmail.com) and Gerry 
(rgpass@gmail.com).

## To-Do's ##

 - clean up javascript
 - improve address error handling
 - improve embeddability
 - improve/update readme for any changes

### New Features ###
* Have users upload their own GeoJSON and similar type files
* Ask users what values they would like to see (based off reading what is provided)
