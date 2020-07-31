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
      "quote": "This is a really tough decision… ’cause you’re both crap",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "Hey, come here. Let me whisper something very important in your ear, very important: Fuck off. Get out.",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "I have to laugh when someone calls me an asshole. I’ve been called way worse.",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "I just want to die and fuck off to heaven with my filet steak.",
      "source": "Gordon Ramsey"
    },
    {
      "quote": "You added so much salt and pepper, I can hear the dish signing push it",
      "source": "Gordon Ramsey"
    }
  ];

  getRandomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  constructor() { }
}
