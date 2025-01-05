const copyButton = document.querySelector('.copy-button');
const copyMessage = copyButton.querySelector('.copy-message');
const codeBlock = document.getElementById('python-code-cont');
const buttonOverlay = copyButton.querySelector('.button-dim-overlay');
copyButton.addEventListener('click', () => {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(codeBlock.textContent)
    .then(() => {
        // Show the "Copied!" message
        copyMessage.style.display = 'block';
        copyMessage.style.opacity = '1';  // Make the message visible

        // Dim the button, code container, and python code block
        copyButton.classList.add('dimmed');
        codeBlock.classList.add('dimmed');  // Dimming the python code block
        buttonOverlay.style.transition = 'opacity 0.3s ease-in';
        buttonOverlay.style.opacity = '1'; // Dimming the copy button
        // Keep the message for 2 seconds, then hide it and remove the dim effect
        setTimeout(() => {
            copyMessage.style.opacity = '0';  // Fade out the message
            setTimeout(() => {
                copyMessage.style.display = 'none';  // Fully hide after fade out
            }, 300);  // 0.3s delay for fade-out "Copied!"

            // Remove dimming effects after message disappears
            copyButton.classList.remove('dimmed');
            codeBlock.classList.remove('dimmed');
            buttonOverlay.style.opacity = '0';
            buttonOverlay.style.transition = 'none';
        }, 2000); 
    })
    .catch(err => {
        console.error('Failed to copy code:', err);});});
const toggleButton = document.querySelector('.toggle-code-button');
const originalMarginBottom = getComputedStyle(toggleButton).marginBottom; // Store original margin-bottom
const originalMarginLeft = getComputedStyle(toggleButton).marginLeft; // Store original margin-left
codeBlock.style.display = 'none';
toggleButton.addEventListener('click', () => {
    if (codeBlock.style.display === 'none') {
    codeBlock.style.display = 'block';
    toggleButton.textContent = 'Hide code';
    // Change margin-bottom and margin-left (animation)
    toggleButton.style.marginBottom = '0.6rem';
    toggleButton.style.marginLeft = '10px';

    copyButton.classList.add('visible');
    } else {
    codeBlock.style.display = 'none';
    toggleButton.textContent = 'Show code';
    copyButton.classList.remove('visible');
    // Restore original margin-bottom and margin-left
    toggleButton.style.marginBottom = originalMarginBottom;
    toggleButton.style.marginLeft = originalMarginLeft;}});