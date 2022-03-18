import { createStore } from 'vuex'

export default createStore({
  state: {
    index: 0,
    tables: [],
  },
  mutations: {
    //Table methods
    addNewTable(state) {
      const newTable = {
        tableName: "table_" + state.index,
        columns: [
          {
            key: "id",
            type: "int",
            nullable: false,
            indexType: "primary key",
          },
        ],
        color: "#f66d9b",
        position: { x: 10, y: 10 }
      }
      
      const arr = [...state.tables, newTable];
      state.index++;
      state.tables = arr;
    },
    addColumn(state, index) {
      const newCol = {
        key: "column",
        type: "int",
        nullable: false,
        indexType: "None",
      };
      const newTables = state.tables.map((table, i) => {
        if (i === index) {
          table = { ...table, columns: [...table.columns, newCol] };
          return table;
        } else {
          return table;
        }
      });
      state.tables = newTables;
    },
    updateTitle(state, { index, value }) {
      const newTables = state.tables.map((table, i) => {
        if (i === index) {
          table = { ...table, tableName: value };
          return table;
        } else {
          return table;
        }
      });
      state.tables = newTables;
    },
    deleteTable(state, index) {
      const newTables = state.tables.filter((table, i) => i !== index);
      state.tables = newTables;
    }
    , changeColor(state, { index, colorValue }) {
      const newTables = state.tables.map((table, i) => {
        if (i === index) {
          table = { ...table, color: colorValue };
          return table;
        } else {
          return table;
        }
      });
      state.tables = newTables;
    },
    //Column methods
    updateKey(state, { e, index, tableIndex }) {
      const newTables = state.tables.map((table, i) => {
        if (i === tableIndex) {
          let newCols = [...table.columns];
          newCols[index].key = e.target.value;
          table = { ...table, columns: newCols };
        }
        return table;
      });
      state.tables = newTables;
    },
    updateType(state, { index, tableIndex, type }) {
      const newTables = state.tables.map((table, i) => {
        if (i === tableIndex) {
          let newCols = [...table.columns];
          newCols[index].type = type;
          table = { ...table, columns: newCols };
        }
        return table;
      });
      state.tables = newTables;
    },
    updateNullable(state, { index, tableIndex }) {
      const newTables = state.tables.map((table, i) => {
        if (i === tableIndex) {
          const isNullable = table.columns[index].nullable;
          let newCols = [...table.columns];
          if (isNullable) {
            newCols[index].nullable = false;
          } else {
            newCols[index].nullable = true;
          }
          table = { ...table, columns: newCols };
        }
        return table;
      });
      state.tables = newTables;
    },
    updateIndexType(state, { index, tableIndex, indexType }) {
      const newTables = state.tables.map((table, i) => {
        if (i === tableIndex) {
          let newCols = [...table.columns];
          newCols[index].indexType = indexType;
          table = { ...table, columns: newCols };
        }
        return table;
      });
      state.tables = newTables;
    },
  },
  actions: {
  },
  modules: {
  }
})
