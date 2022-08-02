function main() {
    console.log("Started script.js");
}

function onHoverGitHubButton() {
    document.getElementById("github-logo-image").src = "https://assets.iseyu.xyz/assets/icons/platform-icons/GitHub-Mark-120px-plus.png";
}
function onNotHoverGitHubButton() {
    document.getElementById("github-logo-image").src = "https://assets.iseyu.xyz/assets/icons/platform-icons/GitHub-Mark-Light-120px-plus.png";
}
function onHoverDiscordButton() {
    document.getElementById("discord-logo-image").src = "https://assets.iseyu.xyz/assets/icons/platform-icons/Discord-Logo-Black.png";
}
function onNotHoverDiscordButton() {
    document.getElementById("discord-logo-image").src = "https://assets.iseyu.xyz/assets/icons/platform-icons/Discord-Logo-White.png";
}

main()