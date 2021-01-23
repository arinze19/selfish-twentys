<template>
  <teleport to="body">
    <div class="container">
      <div class="img-container">
        <img  />
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  
};
</script>


<style scoped>
.img-container {
  margin: 0;
  padding: 0;
  width: 400px;
  height: 400px;
}

img {
  width: 100%;
  height: 100%;
}

.container {
  background-color: #212121c1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.arrows {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 200px auto;
}

.arrow {
  border: 1px solid white;
  background-color: #212121;
  padding: 20px;
  cursor: pointer;
  font-size: 32px;
  color: white;
}

@media (max-width: 768px) {
  .arrows {
    width: 95%;
    margin: 50% auto;
  }

  .arrow {
    padding: 10px;
    font-size: 18px;
  }
}
</style>