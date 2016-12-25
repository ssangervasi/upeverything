'use strict';

var upvoteSelector = '[data-event-action="upvote"]'
var upvoteEls = document.querySelectorAll(upvoteSelector)
console.log(`Found ${upvoteEls.length} upvote elements. Here's one: `,
            upvoteEls[0])
