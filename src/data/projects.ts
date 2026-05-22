export interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  category: 'Full Stack' | 'Frontend' | 'Personal';
}

export const projects: Project[] = [
  // Full Stack
  {
    title: 'Tax Docs Portal',
    description: 'A full stack web application for managing and organizing tax documentation.',
    repoUrl: 'https://github.com/cgtfarmer/tax-docs-portal',
    category: 'Full Stack',
  },

  // Frontend
  {
    title: 'GitHub User Info Viewer',
    description: 'Search for any GitHub username and display their public profile data via the GitHub API.',
    liveUrl: 'https://arsidee.github.io/User-Info-github/',
    repoUrl: 'https://github.com/Arsidee/User-Info-github',
    category: 'Frontend',
  },
  {
    title: 'Higher or Lower',
    description: 'A number-guessing game where the player decides if the next value will be higher or lower.',
    liveUrl: 'https://arsidee.github.io/Higher-or-Lower/',
    repoUrl: 'https://github.com/Arsidee/Higher-or-Lower',
    category: 'Frontend',
  },
  {
    title: 'Modify Table of Data',
    description: 'An interactive data table that allows users to add, edit, and remove rows dynamically.',
    liveUrl: 'https://arsidee.github.io/Modify-Table-of-Data/',
    repoUrl: 'https://github.com/Arsidee/Modify-Table-of-Data',
    category: 'Frontend',
  },
  {
    title: 'To-Do List',
    description: 'A task management app with add, complete, and delete functionality.',
    liveUrl: 'https://arsidee.github.io/To-Do-List/',
    repoUrl: 'https://github.com/Arsidee/To-Do-List',
    category: 'Frontend',
  },
  {
    title: 'Generate Wage Table',
    description: 'Generates a formatted wage table based on user-supplied hours and pay rate.',
    liveUrl: 'https://arsidee.github.io/Generate-Wage-Table/',
    repoUrl: 'https://github.com/Arsidee/Generate-Wage-Table',
    category: 'Frontend',
  },
  {
    title: 'Random Number Generator with Limitations',
    description: 'Generates random numbers within user-defined min/max constraints.',
    liveUrl: 'https://arsidee.github.io/Random-Number-Generator-With-Limitations/',
    repoUrl: 'https://github.com/Arsidee/Random-Number-Generator-With-Limitations',
    category: 'Frontend',
  },
  {
    title: 'Simple Calculator',
    description: 'A clean, functional calculator supporting basic arithmetic operations.',
    liveUrl: 'https://arsidee.github.io/Simple-Calculator/',
    repoUrl: 'https://github.com/Arsidee/Simple-Calculator',
    category: 'Frontend',
  },
  {
    title: 'UI Custom Life Points',
    description: 'A customizable life point tracker UI for card games with user-defined starting values.',
    liveUrl: 'https://arsidee.github.io/UI-Custom-Life-Points/',
    repoUrl: 'https://github.com/Arsidee/UI-Custom-Life-Points',
    category: 'Frontend',
  },
  {
    title: 'UI Lifepoint Reduction',
    description: 'A life point reduction tool for tracking damage during card game matches.',
    liveUrl: 'https://arsidee.github.io/UI-Lifepoint-Reduction/',
    repoUrl: 'https://github.com/Arsidee/UI-Lifepoint-Reduction',
    category: 'Frontend',
  },
  {
    title: 'Random Number Generator with Input',
    description: 'Generates a random number based on a user-supplied upper bound.',
    liveUrl: 'https://arsidee.github.io/Random-Number-Generator-With-Input/',
    repoUrl: 'https://github.com/Arsidee/Random-Number-Generator-With-Input',
    category: 'Frontend',
  },
  {
    title: 'Greeting',
    description: 'Takes a user\'s name as input and displays a personalized greeting message.',
    liveUrl: 'https://arsidee.github.io/Greeting/',
    repoUrl: 'https://github.com/Arsidee/Greeting',
    category: 'Frontend',
  },
  {
    title: 'Text Input → Page Output',
    description: 'Renders text typed into an input field directly onto the page in real time.',
    liveUrl: 'https://arsidee.github.io/Text-input-page-output/',
    repoUrl: 'https://github.com/Arsidee/Text-input-page-output',
    category: 'Frontend',
  },
  {
    title: 'Text Input → Console Output',
    description: 'Logs user-entered text to the browser console — a foundational JS exercise.',
    liveUrl: 'https://arsidee.github.io/Text-input-console-output/',
    repoUrl: 'https://github.com/Arsidee/Text-input-console-output',
    category: 'Frontend',
  },
  {
    title: 'Temporary Image Display',
    description: 'Displays an image temporarily on the page before hiding it again.',
    liveUrl: 'https://arsidee.github.io/Temporary-Image-Display/',
    repoUrl: 'https://github.com/Arsidee/Temporary-Image-Display',
    category: 'Frontend',
  },
  {
    title: 'Toggle Element',
    description: 'Demonstrates toggling the visibility of a DOM element with a button click.',
    liveUrl: 'https://arsidee.github.io/Toggle-Element/',
    repoUrl: 'https://github.com/Arsidee/Toggle-Element',
    category: 'Frontend',
  },
  {
    title: 'Show Element',
    description: 'Shows a hidden page element when the user triggers an action.',
    liveUrl: 'https://arsidee.github.io/Show-Element/',
    repoUrl: 'https://github.com/Arsidee/Show-Element',
    category: 'Frontend',
  },
  {
    title: 'Button Input → Page Output',
    description: 'Outputs a result to the page when a button is clicked — core DOM manipulation.',
    liveUrl: 'https://arsidee.github.io/Button-Input-Page-Output/',
    repoUrl: 'https://github.com/Arsidee/Button-Input-Page-Output',
    category: 'Frontend',
  },
  {
    title: 'Button Input → Console Output',
    description: 'Logs a value to the console on button click — a first step in JavaScript event handling.',
    liveUrl: 'https://arsidee.github.io/Button-Input-to-Console-Output/',
    repoUrl: 'https://github.com/Arsidee/Button-Input-to-Console-Output',
    category: 'Frontend',
  },

  // Personal
  {
    title: 'Hand Probability with Deck',
    description: 'Calculates the probability of drawing specific cards from a configurable deck.',
    liveUrl: 'https://arsidee.github.io/Hand-Probability-with-Deck/',
    repoUrl: 'https://github.com/Arsidee/Hand-Probability-with-Deck',
    category: 'Personal',
  },
  {
    title: 'Hand Probability',
    description: 'Computes opening hand probabilities for card games using combinatorics.',
    liveUrl: 'https://arsidee.github.io/Hand-Probability/',
    repoUrl: 'https://github.com/Arsidee/Hand-Probability',
    category: 'Personal',
  },
  {
    title: 'MICROmanagement',
    description: 'An educational game where players identify microorganisms from images using a word bank while tracking their score.',
    liveUrl: 'https://arsidee.github.io/MICROmanagement/',
    repoUrl: 'https://github.com/Arsidee/MICROmanagement',
    category: 'Personal',
  },
  {
    title: 'Expense Tracking with Local Storage',
    description: 'Track and manage expenses with persistent local storage — no backend required.',
    liveUrl: 'https://arsidee.github.io/Expense-Tracking-with-Local-Storage/',
    repoUrl: 'https://github.com/Arsidee/Expense-Tracking-with-Local-Storage',
    category: 'Personal',
  },
];
