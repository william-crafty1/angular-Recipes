import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quotes = [
    {
      "quote": "You’re getting your knickers in a twist! Calm down!",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "I wish you would jump in the oven! That would make my life a lot easier!",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "Hey panini head, are you listening to me?",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "This is a really tough decision… ’cause you’re both crap.",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "Honestly, chimichanga... chimi chuck it in the bin.",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "I'm Gordon Ramsay, for goodness sake: people know I'm volatile.",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "For what we're about to eat, may the Lord make us truly not vomit.",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "I have never ever, ever, ever met someone I believe in as little as you.",
      "source": "Gordon Ramsey"
    }
  ];

  getRandomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  constructor() { }
}
