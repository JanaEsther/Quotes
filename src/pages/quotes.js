

const quotes = [
  'So many books, so little time.',
  'The greatest wealth is to live content with little.',
  'A great man is always willing to be little.',
  'The journey of a thousand miles begins with one step.',
  'That which does not kill us makes us stronger.',
  'A room without books is like a body without a soul.',
  'You only live once, but if you do it right, once is enough.',
  'Be the change that you wish to see in the world.',
  'Live as if you were to die tomorrow. Learn as if you were to live forever.',
  'Always forgive your enemies; nothing annoys them so much.',
  'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
  'It does not do to dwell on dreams and forget to live.',
  'Life is what happens to us while we are making other plans.',
  "I have not failed. I've just found 10,000 ways that won't work.",
  'I solemnly swear that I am up to no good.',
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export const moveToTop = (index, quotes) => {
  if (index <= quotes.length) {
    const moveQuote = quotes.splice(index, 1)[0];
    quotes.unshift(moveQuote);
  }
  return quotes;
};


renderQuotes(quotes);
