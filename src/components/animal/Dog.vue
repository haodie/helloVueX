<template>
  <div class="dog">
    <el-table
      :data="tableData">
      <el-table-column
        prop="date"
        label="活动时间"
        sortable>
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动名称">
      </el-table-column>
      <el-table-column
        prop="region"
        label="活动区域"
        sortable>
      </el-table-column>
      <el-table-column
        prop="type"
        label="活动性质"
        :formatter="typeFormatter">
      </el-table-column>
      <el-table-column
        prop="delivery"
        label="即时配送"
        :formatter="deliveryFormatter"
        sortable>
      </el-table-column>
      <el-table-column
        prop="resource"
        label="特殊资源">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="活动形式">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'Dog',
    data () {
      return {
        msg: 'Dog',
      }
    },
    computed: {
      tableData: {
        get () {
          return this.$store.state.dog.tableData;
        }
      }
    },
    methods: {
      deliveryFormatter(row) {
        let str='';
        if(row.delivery==true){
          str = '是';
        }else if(row.delivery==false){
          str = '否';
        }
        return str;
      },
      typeFormatter(row) {
        let str = row.type.join('、');
        return str;
      }
    }
  }
</script>

<style scoped>

</style>
