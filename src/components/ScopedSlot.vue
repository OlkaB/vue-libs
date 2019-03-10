<template>
  <div>
      <h4>Items list</h4>
    <ul class="list-item" v-for="shape in shapes" :key="shape.name">
      <slot :shape="shape"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shapes: [
        { name: "Square", sides: 4 },
        { name: "Hexagon", sides: 6 },
        { name: "Triangle", sides: 3 }
      ]
    };
  }
};
</script>

