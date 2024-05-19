import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { getRandomQuote } from './quotes.js';
import { moveToTop } from './quotes.js';

document.querySelector('#quote').textContent = getRandomQuote()

export const renderQuotes = (quotes) => {
  quotes.forEach((quote) => {
    document.body.innerHTML += `<p>${quote}</p>`;
  });
};

// Vyberte všechny citáty na stránce
const allQuotes = document.querySelectorAll('quote');

// Přidejte posluchač události click na každý citát
allQuotes.forEach((quote, index) => {
  quote.addEventListener('click', () => {
    // Zavolejte funkci moveToTop s indexem citátu
    moveToTop(index, quote); // Předpokládám, že máte pole citátů s názvem myQuotes
    // Znovu vykreslete citáty
    renderQuotes(quote);
  });
});

const quoteElement = document.getElementById('root');
const quote = getRandomQuote();
quoteElement.innerHTML = `<p>Citát dne: ${quote}</p>`;
