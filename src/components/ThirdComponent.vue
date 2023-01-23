<script setup lang="ts">
import type { Person } from "@/types/Person";
import { defineProps } from "vue";

const props = defineProps<{
  person: Person;
}>();
</script>
<template>
  <div>
    <h1>{{ person.name }}</h1>
    <h2>{{ person.title }}</h2>
    <div>
      <h3>Description</h3>
      <p>
        {{ person.description }}
      </p>
      <p>Age: {{ person.age }}</p>
      <p>More than 18 years old?: {{ person.isAdult }}</p>
    </div>
  </div>
</template>
