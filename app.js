const quotes = [
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
	"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
	"Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
	"The way to get started is to quit talking and begin doing. -Walt Disney",
	"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
	"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
	"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
	"Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
	"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
	"Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
	"It is during our darkest moments that we must focus to see the light. -Aristotle",
	"Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
	"Never let the fear of striking out keep you from playing the game. -Babe Ruth",
	"Give me six hours to chop down a tree, and I will spend the first four sharpening the axe",
	"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
	"Love the life you live. Live the life you love. -Bob Marley",
	"Think Big - Sachin Shetti",
	"If you cannot walk then run - MLK",
	"We must learn to live together as brothers or perish together as fools. - Martin Luther King Jr.",
	"Be the change you wish to see in the world. - Mahatma Gandhi",
	"I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.' - Martin Luther King Jr."
]
  
  function generateQuote() {
	const quoteContainer = document.getElementById("quote");
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
  
	quoteContainer.textContent = randomQuote;
  }
  