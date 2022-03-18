<template>
  <div class="table-col">
    <input
      class="table-col__input width-32"
      type="text"
      :value="column.key"
      @keyup="updateKey($event, index, tableIndex)"
    />
    <div class="table-col__btn-menu-container width-32">
      <button class="table-col__input" @click="showTypeMenu">
        {{ column.type }}
      </button>
      <div
        class="menu table-col__type-menu"
        :class="{ 'show--flex-col': typeMenuOpen }"
      >
        <input class="menu__input" type="text" />
        <ul class="menu__list">
          <li class="menu__item" v-for="(type, index) in types" :key="index">
            {{ type }}
          </li>
        </ul>
      </div>
    </div>
    <button
      class="table-col__btn"
      :class="{ nullable: nullable }"
      @click="() => updateNullable(index, tableIndex)"
    >
      N
    </button>
    <div class="table-col__btn-menu-container">
      <button class="table-col__btn" @click="showIndexMenu">
        <Key v-if="column.indexType === 'primary key'" />
        <Unique v-else-if="column.indexType === 'unique key'" />
        <Index v-else-if="column.indexType === 'index'" />
        <None v-else />
      </button>
      <div class="menu" :class="{ 'show--flex-col': indexMenuOpen }">
        <h4 class="menu__title">Index type</h4>
        <button
          class="menu__btn"
          @click="updateIndexType(index, tableIndex, 'primary key')"
        >
          Primary key
        </button>
        <button
          class="menu__btn"
          @click="updateIndexType(index, tableIndex, 'unique key')"
        >
          Unique key
        </button>
        <button
          class="menu__btn"
          @click="updateIndexType(index, tableIndex, 'index')"
        >
          Index
        </button>
        <button
          class="menu__btn"
          @click="updateIndexType(index, tableIndex, 'none')"
        >
          None
        </button>
      </div>
    </div>
    <button class="table-col__btn">
      <Kebab />
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import Kebab from "../assets/icons/kebab-horizontal.vue";
import Key from "../assets/icons/key.vue";
import Unique from "../assets/icons/snowflake.vue";
import Index from "../assets/icons/index.vue";
import None from "../assets/icons/none.vue";

export default {
  name: "TableColumn",
  components: {
    Kebab,
    Key,
    Unique,
    Index,
    None,
  },
  props: {
    index: Number,
    tableIndex: Number,
    column: Object,
  },
  setup(props) {
    let nullable = ref(props.column.nullable);
    let typeMenuOpen = ref(false);
    let indexMenuOpen = ref(false);

    const store = useStore();

    const types = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "date",
      "datetime",
      "decimal",
      "double",
      "enum",
      "float",
      "geometry",
      "geometrycollection",
      "int",
      "json",
      "linestring",
      "longtext",
      "mediumint",
      "mediumtext",
      "multilinestring",
      "multipoint",
      "multipolygon",
      "point",
      "polygon",
      "smallint",
      "text",
      "time",
      "timestamp",
      "tinyint",
      "uuid",
      "varchar",
      "year",
    ];

    const setNullable = () => {
      nullable.value = !nullable.value;
    };

    const showTypeMenu = () => {
      typeMenuOpen.value = !typeMenuOpen.value;
    };

    const showIndexMenu = () => {
      indexMenuOpen.value = !indexMenuOpen.value;
    };

    //Table related methods

    const updateKey = (e, index, tableIndex) => {
      store.commit("updateKey", {e: e, index: index, tableIndex: tableIndex});
    };

    const updateType = (index, tableIndex, type) => {
      store.commit("updateType", {index: index, tableIndex: tableIndex, type: type});
    };

    const updateNullable = (index, tableIndex) => {
      store.commit("updateNullable", {index: index, tableIndex: tableIndex});
      setNullable();
    };

    const updateIndexType = (index, tableIndex, indexType) => {
      store.commit("updateIndexType", {index: index, tableIndex: tableIndex, indexType: indexType});
    };

    return {
      nullable,
      indexMenuOpen,
      typeMenuOpen,
      types,
      showTypeMenu,
      showIndexMenu,
      updateKey,
      updateType,
      updateNullable,
      updateIndexType,
    };
  },
};
</script>

<style>
.table-col {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-bottom: 1px solid #eaeceecd;
}

.table-col__input {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  color: #4a5568;
  border: none;
  border-radius: 0.25rem;
  outline: 2px solid transparent;
}

.width-32 {
  width: 32%;
}

.table-col__btn-menu-container {
  position: relative;
}

.table-col__btn {
  padding: 0.5rem;
  height: 2rem;
  font-weight: 700;
  color: #a0aec0;
}

.table-col__btn:hover {
  background-color: #e2e8f0;
}

.table-col__icon,
.table-col__index-icon {
  width: 1rem;
  height: 1rem;
}

.table-col__icon {
  fill: #319795;
}

.table-col__index-icon {
  stroke: #319795;
}

.menu.table-col__type-menu {
  width: 190px;
  top: 0px;
  left: 50px;
}

.nullable {
  color: #319795;
}
</style>
