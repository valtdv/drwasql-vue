<template>
  <div class="sidebar js-sidebar">
    <div class="sidebar__header">
      <h2 class="sidebar__title">Tables</h2>
      <button class="sidebar__create-btn" @click="addNewTable">
        <span class="sidebar__create-icon">+</span>
        New table
      </button>
    </div>
    <div class="sidebar__content">
      <template v-for="(table, index) in tables" :key="index">
        <TableData :index="index" :table="table" />
      </template>
    </div>
    <div class="sidebar__retract-container">
      <button class="sidebar__retract-btn" @click="retract">
        <ChevronLeft />
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import ChevronLeft from "../assets/icons/chevron-left.vue";
import TableData from "./TableData.vue";

export default {
  name: "Sidebar",
  components: {
    ChevronLeft,
    TableData,
  },
  setup() {
    const store = useStore();
    const tables = computed(() => store.state.tables)

    const retract = () => {
      const sidebar = document.querySelector(".js-sidebar");
      if (
        !sidebar.classList.contains("active") &&
        !sidebar.classList.contains("retract")
      ) {
        sidebar.classList.add("retract");
      } else {
        sidebar.classList.toggle("active");
        sidebar.classList.toggle("retract");
      }
    };

    const addNewTable = () => {
      store.commit("addNewTable")
    }

    return {
      tables,
      retract,
      addNewTable
    };
  },
};
</script>

<style>
.sidebar {
  position: relative;
  width: 350px;
  height: 100%;
  background-color: white;
}

.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-bottom: 2px solid #b8c2cc0f;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
}

.sidebar__title {
  font-size: 1.125rem;
  font-weight: 400;
  color: #a0aec0;
}

.sidebar__create-btn {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: white;
  background-color: #38b2ac;
}

.sidebar__create-icon {
  margin-right: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.sidebar__content {
  height: 100%;
}

.sidebar__retract-container {
  position: absolute;
  top: 0.5rem;
  right: -35px;
}

.sidebar__retract-btn {
  position: relative;
  z-index: 100;
  width: 2.188rem;
  height: 2.188rem;
  background-color: #d9e3e8;
}

.active {
  animation: active 1s forwards;
}

.retract {
  animation: retract 1s forwards;
  -webkit-animation: retract 1s forwards;
}

@keyframes active {
  0% {
    margin-left: -350px;
  }
  100% {
    margin-left: 0;
  }
}

@keyframes retract {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -350px;
  }
}
</style>