<template>
  <details
    class="table-data"
    :style="{ borderLeft: '8px solid ' + table.color }"
    open
  >
    <summary class="table-data__header">
      <input
        class="table-data__title"
        type="text"
        :value="table.tableName"
        :disabled="disabled"
        @keyup="updateTitle(index, $event)"
      />
      <div class="table-data__btn-container">
        <button class="table-data__header-btn" @click="changeTableName">
          <template v-if="disabled">
            <Pencil />
          </template>
          <template v-else>
            <Checkmark />
          </template>
        </button>
        <template v-if="disabled">
          <div class="table-data__table-actions">
            <button class="table-data__header-btn" @click="openActionMenu">
              <Kebab />
            </button>
            <div class="menu" :class="{ show: isActionMenuOpen }">
              <h4 class="menu__title">Table actions</h4>
              <div class="menu__btn-container">
                <button class="menu__btn" @click="addColumn(index)">
                  Add column
                </button>
                <button class="menu__btn">Add index</button>
                <button class="menu__btn">Add comment</button>
              </div>
              <div class="menu__btn-container">
                <button class="menu__btn" @click="deleteTable(index)">
                  Delete Table
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </summary>
    <div class="table-data__attributes">
      <template v-for="(col, i) in table.columns" :key="i">
        <TableColumn :index="i" :tableIndex="index" :column="col" />
      </template>
    </div>
    <footer class="table-data__container table-data__menu">
      <div class="table-data__btn-container">
        <div class="table-data__icon-btn-container">
          <button class="table-data__icon-btn" @click="showColorMenu">
            <Colors />
          </button>
          <div
            class="menu table-data__colors-menu"
            :class="{ 'show--grid': colorMenuOpen }"
          >
            <button
              class="table-data__color-btn"
              :style="{ background: '#f56d9a' }"
              @click="changeColor(index, '#f56d9a')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#9561e2' }"
              @click="changeColor(index, '#9561e2')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#6574cd' }"
              @click="changeColor(index, '#6574cd')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#3590dc' }"
              @click="changeColor(index, '#3590dc')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#4dc0b5' }"
              @click="changeColor(index, '#4dc0b5')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#24d4ed' }"
              @click="changeColor(index, '#24d4ed')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#83cc15' }"
              @click="changeColor(index, '#83cc15')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#38c171' }"
              @click="changeColor(index, '#38c171')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#ffed4a' }"
              @click="changeColor(index, '#ffed4a')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#f6993f' }"
              @click="changeColor(index, '#f6993f')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#e3352e' }"
              @click="changeColor(index, '#e3352e')"
            ></button>
            <button
              class="table-data__color-btn"
              :style="{ background: '#b8c2cc' }"
              @click="changeColor(index, '#b8c2cc')"
            ></button>
          </div>
        </div>
        <div class="table-data__icon-btn-container">
          <button class="table-data__icon-btn" @click="openFooterActionMenu">
            <Kebab />
          </button>
          <div class="menu" :class="{ show: isFooterActionMenuOpen }">
            <h4 class="menu__title">Table actions</h4>
            <div class="menu__btn-container">
              <button class="menu__btn">Add comment</button>
            </div>
            <div class="menu__btn-container">
              <button class="menu__btn" @click="deleteTable(index)">
                Delete Table
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="table-data__btn-container">
        <button class="table-data__btn">Add Index</button>
        <button
          class="table-data__btn table-data__btn--green"
          @click="addColumn(index)"
        >
          Add Column
        </button>
      </div>
    </footer>
  </details>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import TableColumn from "./TableColumn.vue";
import Pencil from "../assets/icons/pencil.vue";
import Checkmark from "../assets/icons/checkmark-circle.vue";
import Kebab from "../assets/icons/kebab-menu.vue";
import Colors from "../assets/icons/colors.vue";

export default {
  name: "TableData",
  components: {
    TableColumn,
    Pencil,
    Checkmark,
    Kebab,
    Colors,
  },
  props: {
    index: Number,
    table: Object,
  },
  setup() {
    let disabled = ref(true);
    let isActionMenuOpen = ref(false);
    let isFooterActionMenuOpen = ref(false);
    let colorMenuOpen = ref(false);

    const store = useStore();

    const changeTableName = () => {
      disabled.value = !disabled.value;
    };

    const openActionMenu = () => {
      isActionMenuOpen.value = !isActionMenuOpen.value;
    };

    const openFooterActionMenu = () => {
      isFooterActionMenuOpen.value = !isFooterActionMenuOpen.value;
    };

    const showColorMenu = () => {
      colorMenuOpen.value = !colorMenuOpen.value;
    };

    //Table related methods

    const addColumn = (index) => {
      store.commit("addColumn", index);
    };

    const updateTitle = (index, e) => {
      store.commit("updateTitle", { index: index, value: e.target.value });
    };

    const deleteTable = (index) => {
      store.commit("deleteTable", index);
    };

    const changeColor = (index, colorValue) => {
      store.commit("changeColor", { index: index, colorValue: colorValue });
    };

    return {
      disabled,
      isActionMenuOpen,
      isFooterActionMenuOpen,
      colorMenuOpen,
      openActionMenu,
      openFooterActionMenu,
      showColorMenu,
      changeTableName,
      addColumn,
      updateTitle,
      deleteTable,
      changeColor,
    };
  },
};
</script>

<style>
.table-data {
  position: relative;
}

.table-data button {
  background: none;
}

/*=== Tabledata Header section ===*/

.table-data::before,
.table-data::after {
  content: "";
  position: absolute;
  top: 14px;
  left: 14px;
  width: 3px;
  height: 9px;
  background-color: #6574cd;
  border-radius: 1px;
}

.table-data[open]::before,
.table-data[open]::after {
  top: 12px;
}

.table-data::before {
  transform: translate(-2px, 0) rotate(-45deg);
}

.table-data::after {
  transform: translate(2px, 0) rotate(45deg);
}

.table-data[open]::before {
  transform: translate(-2px, 0) rotate(45deg);
}

.table-data[open]::after {
  transform: translate(2px, 0) rotate(-45deg);
}

.table-data__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  height: 40px;
  background-color: #f7fafc;
  border-bottom: 1px #dae1e7 solid;
}

.table-data__header:hover {
  background-color: #ebf4ff;
}

.table-data__title {
  position: relative;
  left: 18px;
  margin: 0.25rem;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  color: #2f365c;
  background: white;
  border: 3px solid #319795;
  border-radius: 0.25rem;
}

.table-data__title:disabled {
  margin: 0;
  padding: 0.5rem 0;
  width: 6.25rem;
  border: none;
  background: none;
}

.table-data__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #eaeceecd;
}

.table-data__header-btn {
  display: none;
  padding: 0.25rem 0.75rem;
}

.table-data__header:hover .table-data__header-btn {
  display: initial;
}

/*=== Tabledata buttons and icons ===*/

.table-data__btn-container {
  display: flex;
  margin: 0;
  padding: 0;
  width: fit-content;
}

.table-data__icon-btn-container {
  position: relative;
}

.table-data__icon-btn {
  position: relative;
  top: 3px;
  padding: 0.75rem;
}

.table-data__table-actions {
  position: relative;
}

.menu.table-data__colors-menu {
  top: 44px;
  right: auto;
  padding: 1rem;
  width: auto;
  border-radius: 0;
}

.table-data__color-btn {
  top: 44px;
  width: 42px;
  height: 42px;
  border-radius: 0.5rem;
}

.table-data__icon-btn:hover,
.table-data__btn:hover {
  background-color: #edf2f7;
}

.table-data__icon {
  width: 17px;
  height: 17px;
  fill: #b8c2cc;
}

.table-data__icon-btn:hover .table-data__icon {
  fill: #319795;
}

.table-data__btn {
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #a0aec0;
  border-width: 1px;
  border-style: solid;
  border-color: #a0aec0;
}

.table-data__btn--green {
  margin-left: 0.75rem;
  color: #319795;
  border-color: #319795;
}
</style>
