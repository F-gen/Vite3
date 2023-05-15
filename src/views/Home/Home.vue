<template>
  <a-button type="primary" @click="add"> add </a-button>
  <a-button type="Reset" @click="Reset"> Reset </a-button>
  {{ count }}
</template>

<script>
export default {
  name: "Home",
};
</script>

<script setup>
const store = useStore();
const count = computed(() => {
  return store.state.user.count;
});
const add = () => {
  store.commit("user/add");
};
const Reset = () => {
  store.commit("user/reset");
};
</script>

<style lang="less">
.box {
  width: 100%;
  height: 100%;
  border: 1px solid #42b983;

  .h1 {
    color: red;
  }

  .h2 {
    color: blue;
  }
}
</style>
