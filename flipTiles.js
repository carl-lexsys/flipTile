document.addEventListener('DOMContentLoaded', () => {
    // Define the word-color associations
    const colorMapping = {
        red: [
            'Driven', 'Resolute', 'Ambitious', 'Decisive', 'Competitive',
            'Independent', 'Prompt', 'Determined', 'Time-conscious', 'Persuasive',
            'Strong-willed', 'Results-oriented'
        ],
        yellow: [
            'Enthusiastic', 'Charming', 'Outgoing', 'Inspiring', 'Optimistic',
            'Flexible', 'Open', 'Creative', 'Spontaneous', 'Convincing',
            'Easy-going', 'Communicative'
        ],
        green: [
            'Friendly', 'Reliable', 'Calm', 'Considerate', 'Pleasant',
            'Patient', 'Predictable', 'Stable', 'Team player', 'Discreet',
            'Thoughtful', 'Good listener'
        ],
        blue: [
            'Accurate', 'Cautious', 'Correct', 'Detail-oriented', 'Logical',
            'Methodical', 'Orderly', 'Quality-oriented', 'Reflective', 'Systematic',
            'Thorough', 'Unassuming'
        ]
    };

    // Function to determine the color based on the word
    function getColor(word) {
        for (const [color, words] of Object.entries(colorMapping)) {
            if (words.includes(word)) {
                return color;
            }
        }
        return 'white'; // Fallback color
    }

    // Function to initialize and handle the tile flipping
    function flipTiles() {
        const tiles = document.querySelectorAll('.grid-item');

        tiles.forEach(tile => {
            const word = tile.querySelector('.front').textContent.trim();
            const back = tile.querySelector('.back');
            back.style.backgroundColor = getColor(word); // Set the back color based on the word

            tile.addEventListener('click', () => {
                tile.classList.toggle('flipped'); // Add or remove the 'flipped' class on click
            });
        });
    }

    // Initialize the tiles once the DOM content has loaded
    flipTiles();
});
