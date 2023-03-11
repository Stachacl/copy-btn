# Copy Button Extension

This extension adds a "Copy text below" button to all ChatGPT responces. When the button is clicked, the text content of the ChatGPT respond message is copied to the clipboard.

## Before and After the extention comparison: 



## Installation

To install the extension you need to follow these steps:

1. Download and install Tampermonkey extention https://www.tampermonkey.net/
2. Copy the script from this file https://gist.github.com/Stachacl/d29fc368beb00f453e0d7e76b8e806e5
3. Install the script in Tampermonkey by opening the URL and clicking the "Install" button that appears.
4. If  the "Install" button not appears, you can copy the code and create a new Tampermonkey script with it.
(description in progress)

```html
<script src="copy-button.js"></script> 
```

## How it Works
The extension is built on top of Tempermonkey extention and it works by looping through all paragraphs on the page and adding a "Copy" button to each one. When the button is clicked, the extension creates a temporary <textarea> element, sets its value to the text content of the paragraph, selects the text in the <textarea>, and executes the "copy" command to copy the text to the clipboard. Finally, the temporary <textarea> element is removed from the page.

## Working on improvements
- Hide the button if not needed
- Select all the paragraphs in the response message
- Notification "Copied to clipboard!"
- Your suggestions...


## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.
