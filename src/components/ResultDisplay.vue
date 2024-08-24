<template>
    <div class="result-display">
      <h3>Converted Amount: {{ result?.toFixed(2) }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      result: {
        type: Number,
        required: true,
      }
    }
  };
  </script>
  
  <style scoped>
  .result-display {
    margin-top: 20px;
  }
  </style>
  