GuitarMaster.com is a completeley functional front end project using an API from songsterr.com to pull links to guitar tabs on their site.

The site features 4 html pages including a "Home", "Tabs", "Learning", and "About" page.

Each page features a nav bar in a fixed position at the top of the page. The nav bar will scroll with users so it's always in view for use. The nav bar links all the HTML pages together. 

The "Home" page contains an opening statement about the site and couple of embedded youtube videos. 
There are also built in links to the "Learning" and "Tabs" pages within the opening statement. 

The "Tabs" page is where I have a search engine that users will use to search for their favorite songs and artists and by use of the API, search results will populate
onto the page. These results will also have an associated link that when clicked on, will open up another tab in the users browser and take them to the associated tabs
for the song on songsterr.com. This feature is accomplished with JavaScript code. Using a async function, the users input into the search bar will be taken and concatenated with the fetch URL 
when the "search" button is clicked on. 

The "Learning" page gives users a lesson on what guitar tabs are and how to use them. After reading through the lesson, the user will be ready to start seaching and playing with the tabs.

The "About" page gives users a little background on the site and what it can do. 

With the use of several media queries and flex-wrapping, the site is completeley mobile responsive. 

Medium article - https://medium.com/@zakopry/guitarmaster-com-35eb1f0d72d

website - https://zakopry.github.io/front-end-project/
