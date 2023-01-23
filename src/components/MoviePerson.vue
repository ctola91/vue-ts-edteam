<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const name = ref<string>("Christian"); // string
const age = ref<number>(18); // number
const year = ref<number | string>(2023);
const description = ref<string>();

const birthYear = computed<number>(() => {
  return Number(year.value) - age.value;
});

const handleOnChange = (event: Event) => {
  console.log((event.target as HTMLInputElement).value);
};

const handleClick = (event: Event) => {
  console.log((event.target as HTMLButtonElement).className);
};

onMounted(() => {
  name.value = "Marcelo";
  year.value = "2023";
  description.value = "Hola EDteam";
});
</script>
<template>
  <div>
    <h2>{{ name }}</h2>
    <span>{{ age }}</span>
    <p>{{ birthYear }}</p>
    <p>{{ description }}</p>
    <input type="text" @keyup="handleOnChange" />
    <button class="my-button" @click="handleClick">Click</button>
  </div>
</template>
