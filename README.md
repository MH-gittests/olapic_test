#Process

##Design
For the purpose of this exercise, I decided to mainly stick within the guidelines of material design by google. This was used due to the lack of any style guidelines of branding principles. I kept the design very light, as this would allow customers to feedback further (which I would have normally gained through wireframe and design processes). The only design styles I have inferred is the use of material design and that the customers primary colour is light blue 3 (as defined in materialize).

I decided to put the navigation buttons at the bottom as they looked too cluttered elsewhere, and I wanted to give priority of screen space to the images. Following on from this going live I would monitor to see whether people were clicking through, whether there was a need to move the nav buttons or add auto scrolling.

I used the related instagram text from the API as a lead for the users to want to read more/find out more about the product.

I ran out of time on wanting to have the user name displayed on the card to give credibility.

I wrapped the cards within a flexbox, with the idea of using this to implement a responsive design over the user the use of grids as implement by materialize, this is due to the power of flexbox and power of breakpoints and behaviors.

##Tech decisions
I assumed that the user would have a browser IE9 or above.
I had very little time/access to my laptop in the last 10 days due to traveling and a 6 day work week, so I haven't been able to implement any TDD or code reviews (which is my normal practice).
I made decisions based on my needs as the developer in this situation, normally I would purely make technical decisions based on the customer need, existing code bases and principles of decision/coding style sheets.

I didn't use any task runners due to the lack of testing, minification, environment dependent dependencies.

I tried to structure my code in a readable and clear way, while not polutting the code (this is why i didn't minify anything).

I didn't use any front-end frameworks due to the weight that they give to the code and dependencies, and that they would be overkill for this process of providing a very simple carousel.

If this was a recurring customer need I would change the way I approached this to make the code as re-usable and clear as possible for anyone picking it up, this includes adding further documentation, testing structures and implementing techniques to improve speed, reducing size of implimentation and rendering on different devices.


##Tech critique
Given more time, I would have liked to implement this in vanilla JavaScript to ensure that the code is more re-usable and has less dependencies. This would also facilitate using more functional programming principles to ensure scope and variable integrity.
I would have also like to use ES6 template strings and arrow functions, but was unsure of their implementation within JQuery so avoided it.
I chose to use JQuery and materialize due to time constraints, however due to how long it's been since I used easier if I was to do it again I would use
I used CDNs due to ease of use for those viewing, and reducing any npm packages they would need to download.
I didn't stick as much as I should to any CSS naming principles.


Given more time I would have:
- put more effort in to making the design responsive.
- Error handling
- Service workers to ensure that the images/info was displayed should the user be offline
- move to vanilla JavaScript
- reduce all dependencies
- I would have liked to have made the JavaScript and css more agnostic to the html, so that they could be implemented on other pages for other users.
- Add in function to allow multiple clicks to be executed by listening on the transition event.


##Things to do
Impliment modal
Get a code review
Impliment tests

##Dependencies
materialize
jQuery
