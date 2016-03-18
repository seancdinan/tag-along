# tag-along
A simple feature to allow you to include external files without needing something heftier like Browserify.

## How
First, include tagAlong in your main HTML file
Create a file to hold all the dependencies, like suitcase.js or something. Use `tagAlong.include(filePath)` for each one. Make sure the main js file is the last one listed. Then you're good to go!
