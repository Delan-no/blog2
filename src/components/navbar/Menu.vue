<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <!-- <div class="bg-white h-full fixed top-0 lg:top-[100px] lg:h-[calc(100vh-100px)]
 z-50 shadow-xl lg:shadow shadow-gray-400 w-[300px] p-8 overflow-y-auto pb-10 lg:bg-gray-100 lg:bg-opacity-75 lg:p-6 lg:py-2">
    <section class="mb-10 lg:mb-5 lg:bg-white lg:p-4 lg:rounded-xl">
      <h3 class="font-bold font-cursive text-[0.75rem] text-gray-400 mb-4 ml-2">New Feeds</h3>
      <article class="flex items-center space-x-5 mb-4">
        <div class="rounded-full bg-blue-500 w-fit p-2">
          <svg height="1.8rem" viewBox="0 0 24 24" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 0L8 3m4 4l4-4" fill="none"
                  stroke="white" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"/>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Newsfeed</p>
      </article>
      <article class="flex items-center space-x-5 mb-4">
        <div class="rounded-full bg-orange-500 w-fit p-2">
          <svg height="1.8rem" viewBox="0 0 24 24" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path
                  d="m15 22l-.555.832A1 1 0 0 0 16 22zm-3-2l.555-.832a1 1 0 0 0-1.11 0zm-3 2H8a1 1 0 0 0 1.555.832zM8.75 3.537l-.08.997zm1.685-.697l-.762-.648zM6.532 5.686l-.997.08zm2.154-2.154l.08-.997zM5.84 7.435l.648.761zm.697-1.684l.997-.08zm-.747 4.772l-.648.762zm0-3.046l-.648-.762zm.747 4.772l-.997-.08zm-.697-1.684l.648-.761zm2.846 3.903l.08.997zm-2.154-2.154l.997.08zm3.903 2.846l.761-.648zm-1.684-.697l-.08-.997zm4.772.747l.762.648zm-3.046 0l-.762.648zm4.772-.747l.08-.997zm-1.684.697l-.761-.648zm3.903-2.846l.997-.08zm-2.154 2.154l-.08.997zm2.846-3.903l.648.762zm-.697 1.684l-.997.08zm.747-4.772l.648-.762zm0 3.046l-.648-.761zm-.747-4.772l-.997-.08zm.697 1.684l-.648.761zm-2.846-3.903l-.08-.997zm2.154 2.154l.997.08zM13.565 2.84l.762-.648zm1.684.697l.08.997zm-1.726-.747l-.761.648zm-3.046 0l.761.648zM9 14.458l.044-.999zm6.555 6.71l-3-2l-1.11 1.664l3 2zm-4.11-2l-3 2l1.11 1.664l3-2zm1.317-15.73l.042.05l1.523-1.296l-.042-.05zm2.567 1.096l.065-.005l-.16-1.994l-.065.005zm1.142 1.072l-.005.065l1.994.16l.005-.065zm1.041 2.59l.05.042l1.296-1.523l-.05-.042zm.05 1.566l-.05.042l1.296 1.523l.05-.042zm-1.096 2.567l.005.065l1.994-.16l-.005-.065zm-1.072 1.142l-.065-.005l-.16 1.994l.065.005zm-2.59 1.041l-.042.05l1.523 1.296l.042-.05zm-1.566.05l-.042-.05l-1.523 1.296l.042.05zm-2.567-1.096l-.065.005l.16 1.994l.065-.005zm-1.142-1.072l.005-.065l-1.994-.16l-.005.065zm-1.041-2.59l-.05-.042l-1.296 1.523l.05.042zm-.05-1.566l.05-.042l-1.296-1.523l-.05.042zm1.096-2.567l-.005-.065l-1.994.16l.005.065zm1.072-1.142l.065.005l.16-1.994l-.065-.005zm2.59-1.041l.042-.05l-1.523-1.296l-.042.05zM8.671 4.534a3 3 0 0 0 2.525-1.046L9.673 2.192a1 1 0 0 1-.842.348zM7.529 5.606a1 1 0 0 1 1.077-1.077l.16-1.994a3 3 0 0 0-3.23 3.231zm-1.041 2.59a3 3 0 0 0 1.046-2.525l-1.994.16a1 1 0 0 1-.348.842zm-.05 1.566a1 1 0 0 1 0-1.524L5.142 6.715a3 3 0 0 0 0 4.57zm1.096 2.567a3 3 0 0 0-1.046-2.525l-1.296 1.523a1 1 0 0 1 .348.842zm1.072 1.142a1 1 0 0 1-1.077-1.077l-1.994-.16a3 3 0 0 0 3.231 3.23zm4.156 1.09a1 1 0 0 1-1.524 0l-1.523 1.297a3 3 0 0 0 4.57 0zm3.71-2.167a1 1 0 0 1-1.078 1.077l-.16 1.994a3 3 0 0 0 3.23-3.231zm1.04-2.59a3 3 0 0 0-1.046 2.525l1.994-.16a1 1 0 0 1 .348-.842zm.05-1.566a1 1 0 0 1 0 1.524l1.296 1.523a3 3 0 0 0 0-4.57zm-1.096-2.567a3 3 0 0 0 1.046 2.525l1.296-1.523a1 1 0 0 1-.348-.842zm-1.072-1.142a1 1 0 0 1 1.077 1.077l1.994.16a3 3 0 0 0-3.231-3.23zm-2.59-1.041a3 3 0 0 0 2.525 1.046l-.16-1.994a1 1 0 0 1-.842-.348zm1.48-1.346a3 3 0 0 0-4.569 0l1.523 1.296a1 1 0 0 1 1.524 0zm-3.088 12.37a3 3 0 0 0-2.152-1.053l-.088 1.998a1 1 0 0 1 .717.351zM9.044 13.46a3.011 3.011 0 0 0-.373.007l.16 1.994a1 1 0 0 1 .125-.003zM10 22v-7.542H8V22zm5.33-8.534a3.012 3.012 0 0 0-.374-.007l.088 1.998a1 1 0 0 1 .125.003zm-.374-.007a3 3 0 0 0-2.152 1.053l1.523 1.296a1 1 0 0 1 .717-.35zm-.956 1V22h2v-7.542z"
                  fill="white"/>
              <path d="m14 8l-3 3l-1-1" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </g>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Badges</p>
      </article>
      <article class="flex items-center space-x-5 mb-4">
        <div class="rounded-full bg-yellow-500 w-fit p-2">
          <svg height="1.8rem" viewBox="0 0 20 20" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <g fill="white">
              <path clip-rule="evenodd"
                    d="M1.25 10a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0m16 0a7.25 7.25 0 1 1-14.5 0a7.25 7.25 0 0 1 14.5 0"
                    fill-rule="evenodd"/>
              <path clip-rule="evenodd"
                    d="M6.25 10c0 4.522 1.491 8.25 3.75 8.25s3.75-3.728 3.75-8.25S12.259 1.75 10 1.75S6.25 5.478 6.25 10m6 0c0 3.762-1.195 6.75-2.25 6.75S7.75 13.762 7.75 10S8.945 3.25 10 3.25s2.25 2.988 2.25 6.75"
                    fill-rule="evenodd"/>
              <path
                  d="m3.602 5.467l1.006-1.112c.1.09.209.18.325.267c1.271.952 3.3 1.54 5.515 1.54c1.891 0 3.653-.427 4.931-1.158c.308-.176.582-.367.819-.57l.974 1.141a6.73 6.73 0 0 1-1.048.73c-1.516.868-3.534 1.356-5.676 1.356c-2.522 0-4.865-.678-6.415-1.839a6.063 6.063 0 0 1-.431-.355m0 9.082l1.006 1.112c.1-.091.209-.18.325-.267c1.271-.952 3.3-1.54 5.515-1.54c1.891 0 3.653.427 4.931 1.158c.308.176.582.367.819.57l.974-1.141a6.841 6.841 0 0 0-1.048-.73c-1.516-.868-3.534-1.356-5.676-1.356c-2.522 0-4.865.678-6.415 1.839a6.06 6.06 0 0 0-.431.355M1.75 10.75v-1.5h16.5v1.5z"/>
            </g>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Explore Stories</p>
      </article>
      <article class="flex items-center space-x-5 mb-4">
        <div class="rounded-full bg-red-500 w-fit p-2">
          <svg height="1.8rem" viewBox="0 0 24 24" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 10V3L5 14h6v7l8-11z" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="1.5"/>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Popular Groups</p>
      </article>
      <article class="flex items-center space-x-5 mb-4">
        <div class="rounded-full bg-blue-400 w-fit p-2">
          <svg height="1.8rem" viewBox="0 0 24 24" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="white" stroke-width="2">
              <path d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" stroke-linejoin="round"/>
              <circle cx="12" cy="7" r="3"/>
            </g>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Author Profile</p>
      </article>
    </section>
    <section class="mb-10 lg:mb-5 lg:bg-white lg:p-4 lg:rounded-xl">
      <h3 class="font-bold font-cursive text-[0.75rem] text-gray-400 mb-4 ml-2">More Pages</h3>
      <article class="flex items-center justify-between mb-5">
        <div class="flex items-center space-x-3.5">
          <div class="rounded-full w-fit">
            <svg height="1.8rem" viewBox="0 0 24 24" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="#0055ff" stroke-width="1.5">
                <path
                    d="m4.85 6.095l5.25-2.84a4 4 0 0 1 3.8 0l5.25 2.84a4 4 0 0 1 2.1 3.51v7.62a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-7.62a4 4 0 0 1 2.1-3.51Z"/>
                <path d="m2.91 8.495l7.09 4.1a4 4 0 0 0 4 0l7.14-4" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </div>
          <p class="font-semibold text-sm text-gray-500">Email Box</p>
        </div>
        <span class="text-white text-[0.70rem] bg-orange-400 rounded-lg w-fit p-1 border-white border-2">256</span>
      </article>
      <article class="flex items-center space-x-3.5 mb-5">
        <div class="rounded-full w-fit">
          <svg height="1.8rem" viewBox="0 0 24 24" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#0055ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path
                  d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/>
              <path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/>
            </g>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Near Hotel</p>
      </article>
      <article class="flex items-center space-x-3.5 mb-5">
        <div class="rounded-full w-fit">
          <svg height="1.8rem" viewBox="0 0 48 48" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#0055ff" stroke-linejoin="round" stroke-width="4">
              <path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 13 15 25 15 25Z"/>
              <path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/>
            </g>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Latest Event</p>
      </article>
      <article class="flex items-center space-x-3.5 mb-5">
        <div class="rounded-full w-fit">
          <svg height="1.8rem" viewBox="0 0 24 24" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
            <g clip-rule="evenodd" fill="#0055ff" fill-rule="evenodd">
              <path
                  d="M10.386 8.357A.75.75 0 0 0 9.25 9v6a.75.75 0 0 0 1.136.643l5-3a.75.75 0 0 0 0-1.286zM13.542 12l-2.792 1.675v-3.35z"/>
              <path
                  d="M17.03 4.641a64.499 64.499 0 0 0-10.06 0l-2.241.176a2.975 2.975 0 0 0-2.703 2.475a28.566 28.566 0 0 0 0 9.416a2.975 2.975 0 0 0 2.703 2.475l2.24.176c3.349.262 6.713.262 10.062 0l2.24-.176a2.975 2.975 0 0 0 2.703-2.475c.52-3.117.52-6.299 0-9.416a2.975 2.975 0 0 0-2.703-2.475zM7.087 6.137a62.998 62.998 0 0 1 9.828 0l2.24.175c.676.053 1.229.56 1.34 1.228a27.066 27.066 0 0 1 0 8.92a1.475 1.475 0 0 1-1.34 1.228l-2.24.175a62.98 62.98 0 0 1-9.828 0l-2.24-.175a1.475 1.475 0 0 1-1.34-1.228a27.066 27.066 0 0 1 0-8.92a1.475 1.475 0 0 1 1.34-1.228z"/>
            </g>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Live Stream</p>
      </article>
    </section>
    <section class="mb-10 lg:mb-5 lg:bg-white lg:p-4 lg:rounded-xl">
      <h3 class="font-bold font-cursive text-[0.75rem] text-gray-400 mb-4 ml-2">Account</h3>

      <article class="flex items-center space-x-3.5 mb-4">
        <div class="rounded-full w-fit">
          <svg height="1.2rem" viewBox="0 0 1024 1024" width="1.2rem" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m859.3 569.7l.2.1c3.1-18.9 4.6-38.2 4.6-57.3c0-17.1-1.3-34.3-3.7-51.1c2.4 16.7 3.6 33.6 3.6 50.5c0 19.4-1.6 38.8-4.7 57.8M99 398.1c-.5-.4-.9-.8-1.4-1.3c.7.7 1.4 1.4 2.2 2.1l65.5 55.9v-.1zm536.6-216h.1l-15.5-83.8c-.2-1-.4-1.9-.7-2.8c.1.5.3 1.1.4 1.6zm54 546.5l31.4-25.8l92.8 32.9c17-22.9 31.3-47.5 42.6-73.6l-74.7-63.9l6.6-40.1c2.5-15.1 3.8-30.6 3.8-46.1s-1.3-31-3.8-46.1l-6.5-39.9l74.7-63.9c-11.4-26-25.6-50.7-42.6-73.6l-92.8 32.9l-31.4-25.8c-23.9-19.6-50.6-35-79.3-45.8l-38.1-14.3l-17.9-97a377.5 377.5 0 0 0-85 0l-17.9 97.2l-37.9 14.3c-28.5 10.8-55 26.2-78.7 45.7l-31.4 25.9l-93.4-33.2c-17 22.9-31.3 47.5-42.6 73.6l75.5 64.5l-6.5 40c-2.5 14.9-3.7 30.2-3.7 45.5c0 15.2 1.3 30.6 3.7 45.5l6.5 40l-75.5 64.5c11.4 26 25.6 50.7 42.6 73.6l93.4-33.2l31.4 25.9c23.7 19.5 50.2 34.9 78.7 45.7l37.8 14.5l17.9 97.2c28.2 3.2 56.9 3.2 85 0l17.9-97l38.1-14.3c28.8-10.8 55.4-26.2 79.3-45.8m-177.1-50.3c-30.5 0-59.2-7.8-84.3-21.5C373.3 627 336 568.9 336 502c0-97.2 78.8-176 176-176c66.9 0 125 37.3 154.8 92.2c13.7 25 21.5 53.7 21.5 84.3c0 97.1-78.7 175.8-175.8 175.8M207.2 812.8c-5.5 1.9-11.2 2.3-16.6 1.2c5.7 1.2 11.7 1 17.5-1l81.4-29c-.1-.1-.3-.2-.4-.3zm717.6-414.7l-65.5 56c0 .2.1.5.1.7l65.4-55.9c7.1-6.1 11.1-14.9 11.2-24c-.3 8.8-4.3 17.3-11.2 23.2"
                fill="#0055ff"
                fill-opacity="0.15"/>
            <path
                d="M935.8 646.6c.5 4.7 0 9.5-1.7 14.1l-.9 2.6a446 446 0 0 1-79.7 137.9l-1.8 2.1a32 32 0 0 1-35.1 9.5l-81.3-28.9a350 350 0 0 1-99.7 57.6l-15.7 85a32.05 32.05 0 0 1-25.8 25.7l-2.7.5a445 445 0 0 1-79.2 7.1h.3c26.7 0 53.4-2.4 79.4-7.1l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c1.6-4.7 2.1-9.7 1.5-14.5"
                fill="#0055ff"
                fill-opacity="0.15"/>
            <path
                d="M688 502c0-30.3-7.7-58.9-21.2-83.8C637 363.3 578.9 326 512 326c-97.2 0-176 78.8-176 176c0 66.9 37.3 125 92.2 154.8c24.9 13.5 53.4 21.2 83.8 21.2c97.2 0 176-78.8 176-176m-288 0c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390s58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502"
                fill="gray"/>
            <path
                d="M594.1 952.2a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c1.7-4.6 2.2-9.4 1.7-14.1c-.9-7.9-4.7-15.4-11-20.9l-65.3-55.9l-.2-.1c3.1-19 4.7-38.4 4.7-57.8c0-16.9-1.2-33.9-3.6-50.5c-.3-2.2-.7-4.4-1-6.6c0-.2-.1-.5-.1-.7l65.5-56c6.9-5.9 10.9-14.4 11.2-23.2c.1-4-.5-8.1-1.9-12l-.9-2.6a443.7 443.7 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.4-44-99.6-57.6h-.1l-15.7-85c-.1-.5-.2-1.1-.4-1.6a32.08 32.08 0 0 0-25.4-24.1l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.9 351.9 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446 446 0 0 0-79.7 137.9l-.9 2.6a32.09 32.09 0 0 0 7.9 33.9c.5.4.9.9 1.4 1.3l66.3 56.6v.1c-3.1 18.8-4.6 37.9-4.6 57c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c4.9 5.7 11.4 9.4 18.5 10.7c5.4 1 11.1.7 16.6-1.2l81.9-29.1c.1.1.3.2.4.3c29.7 24.3 62.8 43.6 98.6 57.1l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5c26.1 4.7 52.8 7.1 79.5 7.1h.3c26.6 0 53.3-2.4 79.2-7.1zm-39.8-66.5a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370 370 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3z"
                fill="gray"/>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Settings</p>
      </article>
      <article class="flex items-center space-x-3.5 mb-4">
        <div class="rounded-full w-fit">
          <svg height="1.2rem" viewBox="0 0 24 24" width="1.2rem" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 7c1.25 1.67 2 3.75 2 6c0 5.52-4.48 10-10 10S2 18.52 2 13S6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1Z"
                fill="none" stroke="gray"
                stroke-width="2"/>
          </svg>
        </div>
        <p class="font-semibold text-sm text-gray-500">Analytics</p>
      </article>
      <article class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3.5">
          <div class="rounded-full w-fit">
            <svg height="1.2rem" viewBox="0 0 24 24" width="1.2rem" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="gray" stroke-width="1.5">
                <path
                    d="m4.85 6.095l5.25-2.84a4 4 0 0 1 3.8 0l5.25 2.84a4 4 0 0 1 2.1 3.51v7.62a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-7.62a4 4 0 0 1 2.1-3.51Z"/>
                <path d="m2.91 8.495l7.09 4.1a4 4 0 0 0 4 0l7.14-4" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </div>
          <p class="font-semibold text-sm text-gray-500">Chat</p>
        </div>
        <span class="text-white text-[0.70rem] bg-orange-400 rounded-lg w-fit p-1 px-2 border-white border-2">23</span>
      </article>
    </section>
  </div> -->
</template>

<style>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  border-radius: 10px;
}

</style>
