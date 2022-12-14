function updateStatusBar(color,text) {
    switch(color) {
        case "green":
            document.getElementById('sbcolor').style.backgroundColor = '#388e3c'; // Material Green 700
            document.getElementById('sbtextfield').innerHTML = text;
            break;
        case "red":
            document.getElementById('sbcolor').style.backgroundColor = '#d32f2f'; // Material Red 700
            document.getElementById('sbtextfield').innerHTML = text;
            break;
        case "yellow":
            document.getElementById('sbcolor').style.backgroundColor = '#ffa000'; // Material Amber 700
            document.getElementById('sbtextfield').innerHTML = text;
            break;
        case "blue":
            document.getElementById('sbcolor').style.backgroundColor = '#1976d2'; // Material Blue 700
            document.getElementById('sbtextfield').innerHTML = text;
            break;
        case "grey":
            document.getElementById('sbcolor').style.backgroundColor = '#616161'; // Material Blue 700
            document.getElementById('sbtextfield').innerHTML = text;
            break;
        default:
            document.getElementById('sbcolor').style.backgroundColor = color; // If hex value is passed
            document.getElementById('sbtextfield').innerHTML = text;
            break;
    }
}