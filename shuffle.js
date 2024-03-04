document.addEventListener('DOMContentLoaded', () => {
    // List of words to shuffle and display in the tiles
    const words = [
        'Driven', 'Resolute', 'Ambitious', 'Decisive', 'Competitive',
        'Independent', 'Prompt', 'Determined', 'Time-conscious', 'Persuasive',
        'Strong-willed', 'Results-oriented', 'Enthusiastic', 'Charming', 'Outgoing',
        'Inspiring', 'Optimistic', 'Flexible', 'Open', 'Creative',
        'Spontaneous', 'Convincing', 'Easy-going', 'Communicative', 'Friendly',
        'Reliable', 'Calm', 'Considerate', 'Pleasant', 'Patient',
        'Predictable', 'Stable', 'Team player', 'Discreet', 'Thoughtful',
        'Good listener', 'Accurate', 'Cautious', 'Correct', 'Detail-oriented',
        'Logical', 'Methodical', 'Orderly', 'Quality-oriented', 'Reflective',
        'Systematic', 'Thorough', 'Unassuming'
    ];

    // Function to shuffle the array of words
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    // Shuffle the words
    shuffle(words);

    // Select all the '.front' elements from the document
    const tiles = document.querySelectorAll('.grid-item .front');

    // Assign each word to a tile
    tiles.forEach((tile, index) => {
        if (index < words.length) { // Check to prevent index out of bounds error
            tile.textContent = words[index];
        }
    });
});
