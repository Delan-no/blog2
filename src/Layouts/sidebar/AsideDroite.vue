<template>
  <aside
    id="logo-sidebar"
    class="fixed top-[4.4rem] right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden lg:block"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <section class="mb-10 lg:mb-5 lg:bg-white lg:p-4 lg:rounded-xl">
        <h3 class="font-bold font-cursive text-[0.75rem] text-gray-400 mb-4 ml-2">New Feeds</h3>
        <article class="flex items-center space-x-5 mb-4">
          <div class="rounded-full bg-blue-500 w-fit p-2">
            <svg
              height="1.8rem"
              viewBox="0 0 24 24"
              width="1.8rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 0L8 3m4 4l4-4"
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>
          <p class="font-semibold text-sm text-gray-500">Newsfeed</p>
        </article>
       
      </section>
 
    </div>
  </aside>
</template>
