const copyButton3 = document.querySelector('.copy-button3');
const copyMessage3 = copyButton3.querySelector('.copy-message3');
const codeBlock3 = document.getElementById('python-code-cont3');
const buttonOverlay3 = copyButton3.querySelector('.button-dim-overlay3');

copyButton3.addEventListener('click', () => {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(codeBlock3.textContent)
    .then(() => {
        // Show the "Copied!" message
        copyMessage3.style.display = 'block';
        copyMessage3.style.opacity = '1';  // Make the message visible

        // Dim the button, code container, and python code block
        copyButton3.classList.add('dimmed3');
        codeBlock3.classList.add('dimmed3');  // Dimming the python code block
        buttonOverlay3.style.transition = 'opacity 0.3s ease-in';
        buttonOverlay3.style.opacity = '1'; // Dimming the copy button
        // Keep the message for 3 seconds, then hide it and remove the dim effect
        setTimeout(() => {
            copyMessage3.style.opacity = '0';  // Fade out the message
            setTimeout(() => {
                copyMessage3.style.display = 'none';  // Fully hide after fade out
            }, 300);  // 0.3s delay for fade-out "Copied!"

            // Remove dimming effects after message disappears
            copyButton3.classList.remove('dimmed3');
            codeBlock3.classList.remove('dimmed3');
            buttonOverlay3.style.opacity = '0';
            buttonOverlay3.style.transition = 'none';
        }, 2000);
    })
    .catch(err => {
        console.error('Failed to copy code:', err);
    });
});

const toggleButton3 = document.querySelector('.toggle-code-button3');
const originalMarginBottom3 = getComputedStyle(toggleButton3).marginBottom; // Store original margin-bottom
const originalMarginLeft3 = getComputedStyle(toggleButton3).marginLeft; // Store original margin-left

codeBlock3.style.display = 'none';
toggleButton3.addEventListener('click', () => {
    if (codeBlock3.style.display === 'none') {
    codeBlock3.style.display = 'block';
    toggleButton3.textContent = 'Hide code';
    // Change margin-bottom and margin-left (animation)
    toggleButton3.style.marginBottom = '0.6rem';
    toggleButton3.style.marginLeft = '10px';

    copyButton3.classList.add('visible');
    } else {
    codeBlock3.style.display = 'none';
    toggleButton3.textContent = 'Show code';
    copyButton3.classList.remove('visible');
    // Restore original margin-bottom and margin-left
    toggleButton3.style.marginBottom = originalMarginBottom3;
    toggleButton3.style.marginLeft = originalMarginLeft3;
    }
});