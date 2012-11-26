# Media-Query-Sync

A cross-browser solution for syncing Javascript functionality with CSS media queries

[Read more about this technique here](http://goo.gl/ggnlJ)

## How To

**In your CSS file**

1. Add a font-family property to the head element with a value you wish to use for the name of your breakpoint
2. Add an :after pseudo element with a content value the same as your font-family property to the body element
3. Repeat steps 1 and 2 for each media queries you want to sync with JavaScript. 

Remember, "The absence of support for @media queries is in fact the first @media query." - [Bryan Rieger](http://www.slideshare.net/bryanrieger/rethinking-the-mobile-web-by-yiibu)

**In the getActiveMQ function**

4. Set up conditions for your breakpoint variables from you CSS file
5. Add the JavaScript you want executed in sync with your media queries inside the conditions you created


## Demo

[View Demo](http://brettjankord.com/projects/media-query-sync/) - with respond.js

[View Demo](http://brettjankord.com/projects/media-query-sync/index-without-respondjs.html) - without respond.js


## Thanks

[Jeremy Keith](https://github.com/adactio), [Chris Coyier](https://github.com/chriscoyier), [Emil Björklund](https://github.com/emilbjorklund)