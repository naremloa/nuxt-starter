<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const { data } = useAsyncData(
  'data',
  () => $fetch('https://jsonplaceholder.typicode.com/posts/1'),
)

function onClick() {
  router.replace({ query: { a: 1 } })
}
</script>

<template>
  <div>
    <div>{{ route.query }}</div>
    <pre>{{ data }}</pre>
    <button @click="onClick">
      asdfsdf
    </button>
  </div>
</template>
