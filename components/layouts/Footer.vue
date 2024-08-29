<script setup>
// import { GmailIcon, TelegramIcon, BloggerIcon, XIcon, MastodonIcon, GitHubIcon } from 'vue3-simple-icons'

const email = ref(null)
onMounted(() => {
  email.value.href = email.value.href.replace('$', '@')
})
</script>

<template>
  <section class="md:pt-6">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
        title="BriefURL"
      >BriefURL</a>
      <a
        class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
        href="/"
        title="BriefURL"
      >
        &copy; {{ new Date().getFullYear() }} BriefURL
      </a>
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          href="http://cxyroad.com"
          target="_blank"
          title="程序员资料站"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="">程序员资料站</span>
          <!--          <GmailIcon
            class="w-6 h-6"
          /> -->
        </a>
        <a
          href="http://cxytools.com"
          target="_blank"
          title="程序员在线工具"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="">程序员在线工具</span>
          <!--          <TelegramIcon
            class="w-6 h-6"
          /> -->
        </a>
        <a
          href="https://xbt100.top"
          target="_blank"
          title="副业专栏导航站"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="">副业专栏导航站</span>
          <!--          <BloggerIcon
            class="w-6 h-6"
          /> -->
        </a>

        <a
          href="https://ainavhub.com/"
          target="_blank"
          title="AI工具导航站"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="">AI工具导航站</span>
          <!--          <XIcon
            class="w-6 h-6"
          /> -->
        </a>

        <a
          href="http://chrome.cxyroad.com/"
          target="_blank"
          title="Mastodon"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="">谷歌插件大全</span>
          <!--          <MastodonIcon
            class="w-6 h-6"
          /> -->
        </a>

        <a
          href="https://nav.cxyroad.com/"
          target="_blank"
          title="程序员导航站"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="">程序员导航站</span>
          <!--          <GitHubIcon
            class="w-6 h-6"
          /> -->
        </a>
      </span>
    </div>
  </section>
</template>
