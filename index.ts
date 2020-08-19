// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

   function convert(hours, minutes) {
   var seconds;
   seconds = (hours * 3600) + (minutes * 60);

    return seconds;

   }


   console.log(convert(8,40));

