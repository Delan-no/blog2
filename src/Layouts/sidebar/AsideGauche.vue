<template>
  <aside
    id="logo-sidebar"
    class="fixed top-18 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden md:block"
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
        <article class="flex items-center space-x-5 mb-4">
          <div class="rounded-full bg-orange-500 w-fit p-2">
            <svg
              height="1.8rem"
              viewBox="0 0 24 24"
              width="1.8rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  d="m15 22l-.555.832A1 1 0 0 0 16 22zm-3-2l.555-.832a1 1 0 0 0-1.11 0zm-3 2H8a1 1 0 0 0 1.555.832zM8.75 3.537l-.08.997zm1.685-.697l-.762-.648zM6.532 5.686l-.997.08zm2.154-2.154l.08-.997zM5.84 7.435l.648.761zm.697-1.684l.997-.08zm-.747 4.772l-.648.762zm0-3.046l-.648-.762zm.747 4.772l-.997-.08zm-.697-1.684l.648-.761zm2.846 3.903l.08.997zm-2.154-2.154l.997.08zm3.903 2.846l.761-.648zm-1.684-.697l-.08-.997zm4.772.747l.762.648zm-3.046 0l-.762.648zm4.772-.747l.08-.997zm-1.684.697l-.761-.648zm3.903-2.846l.997-.08zm-2.154 2.154l-.08.997zm2.846-3.903l.648.762zm-.697 1.684l-.997.08zm.747-4.772l.648-.762zm0 3.046l-.648-.761zm-.747-4.772l-.997-.08zm.697 1.684l-.648.761zm-2.846-3.903l-.08-.997zm2.154 2.154l.997.08zM13.565 2.84l.762-.648zm1.684.697l.08.997zm-1.726-.747l-.761.648zm-3.046 0l.761.648zM9 14.458l.044-.999zm6.555 6.71l-3-2l-1.11 1.664l3 2zm-4.11-2l-3 2l1.11 1.664l3-2zm1.317-15.73l.042.05l1.523-1.296l-.042-.05zm2.567 1.096l.065-.005l-.16-1.994l-.065.005zm1.142 1.072l-.005.065l1.994.16l.005-.065zm1.041 2.59l.05.042l1.296-1.523l-.05-.042zm.05 1.566l-.05.042l1.296 1.523l.05-.042zm-1.096 2.567l.005.065l1.994-.16l-.005-.065zm-1.072 1.142l-.065-.005l-.16 1.994l.065.005zm-2.59 1.041l-.042.05l1.523 1.296l.042-.05zm-1.566.05l-.042-.05l-1.523 1.296l.042.05zm-2.567-1.096l-.065.005l.16 1.994l.065-.005zm-1.142-1.072l.005-.065l-1.994-.16l-.005.065zm-1.041-2.59l-.05-.042l-1.296 1.523l.05.042zm-.05-1.566l.05-.042l-1.296-1.523l-.05.042zm1.096-2.567l-.005-.065l-1.994.16l.005.065zm1.072-1.142l.065.005l.16-1.994l-.065-.005zm2.59-1.041l.042-.05l-1.523-1.296l-.042.05zM8.671 4.534a3 3 0 0 0 2.525-1.046L9.673 2.192a1 1 0 0 1-.842.348zM7.529 5.606a1 1 0 0 1 1.077-1.077l.16-1.994a3 3 0 0 0-3.23 3.231zm-1.041 2.59a3 3 0 0 0 1.046-2.525l-1.994.16a1 1 0 0 1-.348.842zm-.05 1.566a1 1 0 0 1 0-1.524L5.142 6.715a3 3 0 0 0 0 4.57zm1.096 2.567a3 3 0 0 0-1.046-2.525l-1.296 1.523a1 1 0 0 1 .348.842zm1.072 1.142a1 1 0 0 1-1.077-1.077l-1.994-.16a3 3 0 0 0 3.231 3.23zm4.156 1.09a1 1 0 0 1-1.524 0l-1.523 1.297a3 3 0 0 0 4.57 0zm3.71-2.167a1 1 0 0 1-1.078 1.077l-.16 1.994a3 3 0 0 0 3.23-3.231zm1.04-2.59a3 3 0 0 0-1.046 2.525l1.994-.16a1 1 0 0 1 .348-.842zm.05-1.566a1 1 0 0 1 0 1.524l1.296 1.523a3 3 0 0 0 0-4.57zm-1.096-2.567a3 3 0 0 0 1.046 2.525l1.296-1.523a1 1 0 0 1-.348-.842zm-1.072-1.142a1 1 0 0 1 1.077 1.077l1.994.16a3 3 0 0 0-3.231-3.23zm-2.59-1.041a3 3 0 0 0 2.525 1.046l-.16-1.994a1 1 0 0 1-.842-.348zm1.48-1.346a3 3 0 0 0-4.569 0l1.523 1.296a1 1 0 0 1 1.524 0zm-3.088 12.37a3 3 0 0 0-2.152-1.053l-.088 1.998a1 1 0 0 1 .717.351zM9.044 13.46a3.011 3.011 0 0 0-.373.007l.16 1.994a1 1 0 0 1 .125-.003zM10 22v-7.542H8V22zm5.33-8.534a3.012 3.012 0 0 0-.374-.007l.088 1.998a1 1 0 0 1 .125.003zm-.374-.007a3 3 0 0 0-2.152 1.053l1.523 1.296a1 1 0 0 1 .717-.35zm-.956 1V22h2v-7.542z"
                  fill="white"
                />
                <path
                  d="m14 8l-3 3l-1-1"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          <p class="font-semibold text-sm text-gray-500">Badges</p>
        </article>

        <article class="flex items-center space-x-5 mb-4">
          <div class="rounded-full bg-blue-400 w-fit p-2">
            <svg
              height="1.8rem"
              viewBox="0 0 24 24"
              width="1.8rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="white" stroke-width="2">
                <path
                  d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                  stroke-linejoin="round"
                />
                <circle cx="12" cy="7" r="3" />
              </g>
            </svg>
          </div>
          <p class="font-semibold text-sm text-gray-500">Author Profile</p>
        </article>
      </section>
      
    </div>
  </aside>
</template>
