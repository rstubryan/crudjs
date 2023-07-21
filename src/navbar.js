function nav() {
   // Function to toggle the visibility of the dropdown menu
   function toggleDropdown() {
      const hamburger = document.getElementById("navbar-hamburger");
      hamburger.classList.toggle("hidden");
   }

   // Get the hamburger button element
   const hamburgerButton = document.querySelector(
      '[data-collapse-toggle="navbar-hamburger"]'
   );

   // Add click event listener to the hamburger button
   hamburgerButton.addEventListener("click", toggleDropdown);
}

function navbar() {
   const navbarHTML = `
       <nav class="bg-gray-800 border-gray-700">
         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="index.html" class="flex items-center text-white">
               <i class="fa fa-fw fa-database"> </i>
               <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  CRUD
               </span>
            </a>
            <button
               data-collapse-toggle="navbar-hamburger"
               type="button"
               class="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
               aria-controls="navbar-hamburger"
               aria-expanded="false"
            >
               <span class="sr-only">Open main menu</span>
               <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
               >
                  <path
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M1 1h15M1 7h15M1 13h15"
                  />
               </svg>
            </button>
            <div class="hidden w-full" id="navbar-hamburger">
               <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 border-gray-700">
                  <li>
                     <a
                        href="index.html"
                        class="block py-2 pl-3 pr-4 text-white bg-slate-400 rounded font-bold"
                        aria-current="page"
                     >
                        CRUD
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      `;
   // Get the navbar container element
   const navbarContainer = document.getElementById("navbar-container");

   // Set the innerHTML of the container to the navbar HTML
   navbarContainer.innerHTML = navbarHTML;

   // Call the nav() function to handle the dropdown menu
   nav();
}
