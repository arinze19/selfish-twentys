<template>
  <div>
    <ul>
      <li
        @click="switchDisplay('ShoesComponent')"
        :class="{ active: activeComponent == 'ShoesComponent' }"
      >
        Shoes
      </li>
      <li
        @click="switchDisplay('ApparelComponent')"
        :class="{ active: activeComponent == 'ApparelComponent' }"
      >
        Apparel
      </li>
      <li
        @click="switchDisplay('BasicsComponent')"
        :class="{ active: activeComponent == 'BasicsComponent' }"
      >
        Basics
      </li>
    </ul>

    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import ApparelComponent from "./ApparelComponent.vue";
import ShoesComponent   from "./ShoesComponent.vue";
import BasicsComponent  from "./BasicsComponent.vue";

export default {
  components: { ApparelComponent, ShoesComponent, BasicsComponent },
  data() {
    return {
      activeComponent: "ShoesComponent",
      isActive: false,
    };
  },
  methods: {
    switchDisplay(selectedComponent) {
      this.activeComponent = selectedComponent;
    },
  },
};
</script>




<style scoped>
ul {
  border-bottom: 1px solid #b8bbb8;
  width: 95%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style-type: none;
  color: #b8bbbd;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 20px 57px 12px 57px;
  cursor: pointer;
}

li:hover {
  color: #212a2f;
}

.active {
  border-bottom: 2px solid #212a2f;
  color: #212a2f;
}

@media (max-width: 768px) {
  ul {
    width: 90%;
    padding: 0;
  }

  li {
    padding: 15px;
    font-size: 14px;
  }
}
</style>