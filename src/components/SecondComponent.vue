<script setup lang="ts">
// import { defineComponent } from "vue";
import { defineProps } from "vue";

// export default defineComponent({
//   props: {
//     name: String,
//     title: String,
//     description: String,
//     age: Number,
//     isAdult: Boolean,
//   }
// });

const props = defineProps<{
  name: string;
  title: string;
  description: string;
  age: number;
  isAdult: boolean;
}>();
</script>
<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ title }}</h2>
    <div>
      <h3>Description</h3>
      <p>
        {{ description }}
      </p>
      <p>Age: {{ age }}</p>
      <p>More than 18 years old?: {{ isAdult }}</p>
    </div>
  </div>
</template>
