document.getElementById('discord-link').addEventListener('click', function(event) {
    window.location.href = 'https://discord.gg/yourinvite';
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textarea);
}

function showSuccessAlert() {
    const alertBox = document.getElementById('custom-alert');
    const alertTitle = alertBox.querySelector('p:first-child');
    const alertMessage = document.getElementById('alert-message');
    
    alertTitle.textContent = "IP Copied! :D";
    alertMessage.textContent = "The address is copied to your clipboard, you're set and ready to play the server, can't wait to see you!";

    alertBox.classList.remove('hidden');
    alertBox.classList.add('flex');
}

function hideAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.remove('flex');
    alertBox.classList.add('hidden');
}

document.getElementById('copy-java-ip').addEventListener('click', function() {
    const javaIp = "32077.ddnod.es";
    copyToClipboard(javaIp);
    showSuccessAlert();
});

document.getElementById('copy-eagler-ip').addEventListener('click', function() {
    const eaglerIp = "wss://32077.ddnod.es";
    copyToClipboard(eaglerIp);
    showSuccessAlert();
});
