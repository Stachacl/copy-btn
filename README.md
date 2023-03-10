# Copy Button Extension

This extension adds a "Copy text below" button to all ChatGPT responces. When the button is clicked, the text content of the ChatGPT respond message is copied to the clipboard.

Before and After the extention comparison: 



## Installation

To install the extension (description in progress) :

```html
<script src="copy-button.js"></script> 
```

## How it Works
The extension works by looping through all paragraphs on the page and adding a "Copy" button to each one. When the button is clicked, the extension creates a temporary <textarea> element, sets its value to the text content of the paragraph, selects the text in the <textarea>, and executes the "copy" command to copy the text to the clipboard. Finally, the temporary <textarea> element is removed from the page.

## Limitations
description in progress

## Contributing
If you'd like to contribute to this extension, please fork the repository and submit a pull request.
