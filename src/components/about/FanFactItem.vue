<template>
  <div class="fan-fact-item">
    <div class="fan-fact-image">
      <slot name="fan-fact-icon"></slot>
    </div>
    <div class="fan-fact-details">
      <p>
        <slot name="fan-fact-description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FanFactItem'
}
</script>

<style>
.fan-fact-item {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8%;
}

.fan-fact-image {
  display: flex;
  min-width: 2rem;
  justify-content: center;
  align-items: center;
}

.fan-fact-icon {
  font-size: 1.4rem;
}

.fan-fact-details {
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  text-align: center;
  margin-left: 1rem;
}

.fan-fact-details p {
  font-size: 1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .fan-fact-item {
    flex-direction: column;
    padding: 1rem;
  }

  .fan-fact-image {
    margin-bottom: 0.5rem;
  }

  .fan-fact-details {
    margin-left: 0;
  }
}
</style>
