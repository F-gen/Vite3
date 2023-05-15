<template>
  <div class="space">
    <a-button type="primary" @click="add"> add </a-button>
    <a-button type="Reset" @click="Reset"> Reset </a-button>
    <div class="Num">{{ count }}</div>
  </div>
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
.space {
  display: flex;
  margin: 40px;
  .Num {
    font-size: 16px;
    color: #000;
    margin-left: 20px;
  }
}
</style>
