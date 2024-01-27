<template>
  <div class="amount">
    <div>
      <div>
        <div>Tip Amount</div>
        <div>/ person</div>
      </div>
      <div>{{ "$4.27" }}</div>
    </div>
    <div>
      <div>
        <div>Total</div>
        <div>/ person</div>
      </div>
      <div>{{ "$32.79" }}</div>
    </div>
  </div>
  <button>RESET</button>
</template>

<script setup lang="ts">

</script>

<style scoped>
button {
  color: #00474B;
  font-weight: 900;
  width: 100%;
  background-color: #26C2AE;
  padding: 12px 0;
  border: none;
  border-radius: 5px;
}
</style>