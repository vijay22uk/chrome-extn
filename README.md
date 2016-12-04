# chrome-extn
A chrome extension to read page data and send to server.

## To Load extension follow https://developer.chrome.com/extensions/getstarted#unpacked
 Load extension folder as an extension from chrome://extensions
 Extension Icon will appear in top right corner of chrome extension bar

## To read page data of a page :
 Click on extension and click on READ button it will read all images on a page.
 After reading it will send the data to API loacated at https://extn.herokuapp.com/
 The server will store recent 5 records in a in memory queue.
 The saved data can be explored at https://extn.herokuapp.com/


## For Flipkart it will only work on product listing page
Example : https://www.flipkart.com/mobiles/motorola~brand/pr?sid=tyy,4io&otracker=nmenu_sub_Electronics_0_Motorola


## The server show listing of fetched data with their type Images/Flipkart and origin/url of page which on click will expand on shows recored data.

<h3>The Screens</h3>
![alt tag](https://raw.githubusercontent.com/vijay22uk/chrome-extn/master/screens/logo.png)
![alt tag](https://raw.githubusercontent.com/vijay22uk/chrome-extn/master/screens/expand.png)
![alt tag](https://raw.githubusercontent.com/vijay22uk/chrome-extn/master/screens/explorer.png)
