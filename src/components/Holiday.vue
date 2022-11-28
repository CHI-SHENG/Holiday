<template>
  <v-card class="pa-2" flat>
    <v-row justify="center" class="pa-5">
        
      <v-col cols="12">
        <v-select
          :items="items"
          filled
          label="選擇年分"
          v-model="year"
          @change="HolidayChange()"
        ></v-select>
        <v-simple-table height="600px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="width: 20%">日期</th>
                <th class="text-left" style="width: 20%">星期</th>
                <th class="text-left">放假類別</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in AlldayList" :key="item.uuid">
                <td>{{ item.date }}</td>
                <td v-if="item.name">{{ item.name }}</td>
                <td >星期{{ item.week }}</td>
                <td>{{ item.description  }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" lg="4">
        <v-btn
          block
          color="success"
          @click="getholiday"
          >取得放假日</v-btn
        >
      </v-col>
      <v-col xs="12" sm="8" md="6" lg="4">
        <v-btn
          block
          color="blue "
          dark
          @click="$router.go(-1)"
          >返回</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "ShowHoliday",
  components: {},
  data() {
    return {
      AlldayList:[],
      items: [],
      year:2017,
    };
  },
  async created() {
    for(let i=2017;i<2024;i++){
        this.items.push(i)
    }
    this.AlldayList = await this.$api.holiday.getHoliday(this.year)

  },
  methods: {
    async HolidayChange(){
        this.AlldayList = await this.$api.holiday.getHoliday(this.year)
    },
    getholiday() {
      let holiday = this.AlldayList.filter(Allday=> Allday.isHoliday ==true)
      this.AlldayList= holiday
    },
  },
  computed: {
    // pageAction() {
    //   return this.$store.state.pageAction.pageAction;
    // },
  },
};
</script>
<style scoped>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  border: thin solid rgba(0, 0, 0, 0.12);
}
</style>