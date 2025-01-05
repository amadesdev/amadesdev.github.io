const copyButton2 = document.querySelector('.copy-button2');
const copyMessage2 = copyButton2.querySelector('.copy-message2');
const codeBlock2 = document.getElementById('python-code-cont2');
const buttonOverlay2 = copyButton2.querySelector('.button-dim-overlay2');

copyButton2.addEventListener('click', () => {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(codeBlock2.textContent)
    .then(() => {
        // Show the "Copied!" message
        copyMessage2.style.display = 'block';
        copyMessage2.style.opacity = '1';  // Make the message visible

        // Dim the button, code container, and python code block
        copyButton2.classList.add('dimmed2');
        codeBlock2.classList.add('dimmed2');  // Dimming the python code block
        buttonOverlay2.style.transition = 'opacity 0.3s ease-in';
        buttonOverlay2.style.opacity = '1'; // Dimming the copy button
        // Keep the message for 2 seconds, then hide it and remove the dim effect
        setTimeout(() => {
            copyMessage2.style.opacity = '0';  // Fade out the message
            setTimeout(() => {
                copyMessage2.style.display = 'none';  // Fully hide after fade out
            }, 300);  // 0.3s delay for fade-out "Copied!"

            // Remove dimming effects after message disappears
            copyButton2.classList.remove('dimmed2');
            codeBlock2.classList.remove('dimmed2');
            buttonOverlay2.style.opacity = '0';
            buttonOverlay2.style.transition = 'none';
        }, 2000);
    })
    .catch(err => {
        console.error('Failed to copy code:', err);
    });
});

const toggleButton2 = document.querySelector('.toggle-code-button2');
const originalMarginBottom2 = getComputedStyle(toggleButton2).marginBottom; // Store original margin-bottom
const originalMarginLeft2 = getComputedStyle(toggleButton2).marginLeft; // Store original margin-left

codeBlock2.style.display = 'none';
toggleButton2.addEventListener('click', () => {
    if (codeBlock2.style.display === 'none') {
    codeBlock2.style.display = 'block';
    toggleButton2.textContent = 'Hide code';
    // Change margin-bottom and margin-left (animation)
    toggleButton2.style.marginBottom = '0.6rem';
    toggleButton2.style.marginLeft = '10px';

    copyButton2.classList.add('visible');
    } else {
    codeBlock2.style.display = 'none';
    toggleButton2.textContent = 'Show code';
    copyButton2.classList.remove('visible');
    // Restore original margin-bottom and margin-left
    toggleButton2.style.marginBottom = originalMarginBottom2;
    toggleButton2.style.marginLeft = originalMarginLeft2;
    }
});