<script setup lang="ts">
import FirstComponent from "@/components/FirstComponent.vue";
import MovieItem from "@/components/MovieItem.vue";
import MoviePerson from "@/components/MoviePerson.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import ThirdComponent from "@/components/ThirdComponent.vue";
import type { Person } from "@/types/Person";

// const person: Person = {
//   name: "Christian",
//   title: "Software Developer",
//   age: 18,
//   isAdult: true,
// };
</script>
<template>
  <div class="about">
    <!-- <FirstComponent /> -->
    <!-- <SecondComponent
      name="Christian"
      title="Software Developer"
      description="Hola EDteam"
      :age="18"
      :is-adult="true"
    /> -->
    <!-- <ThirdComponent :person="person" /> -->
    <MoviePerson />
    <MovieItem />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
