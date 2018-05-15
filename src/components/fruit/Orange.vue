<template>
  <div class="orange">
    <!-- Table -->
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
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
    </el-dialog>

    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="上海" value="上海"></el-option>
            <el-option label="北京" value="北京"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'Orange',
    data () {
      return {
        msg: 'Orange',
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    },
    computed: {
      tableData: {
        get () {
          return this.$store.state.banana.tableData;
        }
      },
      form: {
        get () {
          return this.$store.state.apple.form;
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
      },
      onSubmit() {
        this.$store.dispatch('addOne', this.$store.state.apple.form);
        this.dialogFormVisible = false;
        this.$router.push({
          path:'/banana'
        });
      }
    }
  }
</script>

<style scoped>

</style>
