//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest = ["ainy", "bilal", "Komal", "ali"];
guest.map(function (items) { return (console.log("Dear ".concat(items, "! You Are Invited At My Home for Dinner."))); });
