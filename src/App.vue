<template>
  <header>
    <Navbar />
  </header>
  <div className="container">
    <Sidebar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
  }
}
</script>

<style>
@import url("./assets/fonts.css");

* {
  font-family: "Roboto";
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  padding: 0%;
  height: 100%;
  background-color: #f1f6f8;
  overflow: hidden;
}

input {
  outline: none;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
}

.container {
  display: flex;
  margin-top: 57px;
  height: 100%;
  width: 100%;
}

.menu {
  display: none;
  position: absolute;
  top: 0;
  right: -190px;
  z-index: 10;
  padding: 0.375rem 0rem;
  width: 11.25rem;
  max-height: 16.25rem;
  color: #f7fafc;
  background-color: #2d3748;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
}

.menu-container {
  position: relative;
}

.menu__title {
  margin: 0.25rem 1rem;
  color: #a0aec0;
  text-align: left;
  text-transform: uppercase;
}

.menu__input {
  margin: 0.25rem 0.5rem 0.5rem;
  padding: 0.5rem 0.75rem;
  color: white;
  background-color: #606f7b;
  border: none;
  border-radius: 0.25rem;
}

.menu__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0 0.5rem;
  list-style: none;
  overflow-y: scroll;
}

.menu__item {
  padding: 0.5rem 0.75rem;
  width: 100%;
  font-size: 1.1rem;
  text-align: start;
  border-radius: 0.25rem;
  cursor: pointer;
}

.menu__item:hover {
  background-color: #606f7b;
}

.menu__btn-container {
  display: flex;
  flex-direction: column;
}

.menu__btn-container:first-child {
  border-bottom: 2px solid #a0aec072;
}

.menu__btn {
  margin: 0 0.5rem;
  padding: 0.25rem 1rem;
  font-size: 1.1rem;
  text-align: left;
  color: white;
}

.menu__btn:hover {
  background-color: #718096;
}

.show {
  display: initial;
}

.show--flex {
  display: flex;
}

.show--flex-col {
  display: flex;
  flex-direction: column;
}

.show--grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
}

.active--item {
  background-color: #38b2ac;
}
</style>

