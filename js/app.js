// variables


let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"One person seeking glory does not accomplish very much."`,
    person: `Sam walton`
}, {
    quote: `"Life is not fair, get used to it!."`,
    person: `Bill Gate.`
}, {
    quote: `"I do the very best i know how - the very best i can; and i mean to keep on doing so until the end"`,
    person: `Abraharm Lincoln`
}, {
    quote: `"Nearly every man who develops an idea works it up to the point where it looks impossible, and then he gets discourage. That's not the place to become discouraged."`,
    person: `Thomas A. Edison`
}, {
    quote: `"A real entrepreneur is somebody who has no safety net underneath them"`,
    person: `Henry Kravis`
}, {
    quote: `"Success is walking from failure to failure with no loss of enthusiasm"`,
    person: `Winston Churchill`
}, {
    quote: `"That man is rich whose pleasure are the cheapest"`,
    person: `Henry David Thoreau`
}, {
    quote: `"Quality means doing it right when no one is looking"`,
    person: `Henry Ford`
}, {
    quote: `"Risk comes from not knowing what your doing"`,
    person: `Warren Buffett`
}, {
    quote: `"High expectations are key to everything"`,
    person: `Sam Walton`
}, {
    quote: `"The value of an idea lies in the using of it"`,
    person: `Thomas A. Edison`
}, {
    quote: `"A journey of a thousand miles must begin with a single"`,
    person: `Lao Tzu`
}, {
    quote: `"Believe you can and you are halfway there"`,
    person: `Theodore Roosevelt`
},];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})