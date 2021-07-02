# Top Anime

Top Anime is a SPA that allows you to discover some of the best anime that has ever been produced in history

**link to site**  https://top-anime.netlify.app/
**link to github** https://github.com/chasblu/top-anime 


### App Summary
This app uses the jikon.moe API to generate anime data. On the home page the top 3 anime ranked by My Anime List(a popular anime site) are populated with links to the corresponding My Anime List page. There is a Category page that generates a list of 100 anime based on the category that you select.  The category results are displayed by popularity. There is a search page that allows you to search for your favorite anime and displays a list of 50 results that match by title. The search results are displayed by closest matching title.

### Technologies Used

- CSS: Grid, Flex
- React: Functional components, React Router, React hooks(useState, useEffect), JSX 
- Jikon API
- Github
- Netlify


### Installation Requirements
- Clone repo from github 
- Site uses yarn and React Router

### Contributions

For additional contributions, requests, or suggestions email me at c.prit@ymail.com

### Lesson

- Originally I wanted the search feature to be apart of the main page but had to make it a separate route on the app in order to solve a problem i was having with hof the results were displaying
- Need to start CSS way earlier and plan it better

### Ongoing Issues 

- Getting the search results to work on the home page so that it replaces the display on the home page but only when something is searched for

- There was an error when searching with less that 3 characters.  I fixed it by adding an aaa to the search if the input is less that 3 characters. I feel like there is a better way to solve this problem then by setting the search to an empty string or 3 letters but didn't solve that problem