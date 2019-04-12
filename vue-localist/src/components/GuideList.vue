<template>
  <b-row>
    <b-col cols="12">
      <div class = "tableDiv">
        <b-jumbotron bg-variant ="dark" text-variant="white" border-variant="dark">
          <div class="media" v-for="guide in guides" :key="guide._id">
            <div class="media-body">
              <h5 class="mt-0">Name: {{guide.name}}</h5>
              <h3>Address: {{guide.address}}</h3>
              <h6>Age: {{guide.age}}</h6>
              <h6>Sex: {{guide.sex}}</h6>
              <button><router-link :to="{ name: 'EditGuide', params: { id: guide._id } }">edit</router-link></button>
              <button @click="deletee(guide)">delete</button>
              <hr>
            </div>
          </div>
        </b-jumbotron>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import router from '../router'

const API_URL = 'https://localist-backend.herokuapp.com/guides';
const API_DELETE = 'https://localist-backend.herokuapp.com/delete-guide';

export default {
  name: 'GuideList',
  data: () => ({
    guides: [],
    guide: {
      name: '',
      address: '',
      age: '',
      sex: ''
    }
  }),
  mounted() {
    fetch(API_URL).then(response => response.json()).then((result) => {
      this.guides = result;
    });
  },
  methods: {
    deletee(guide) {
      fetch(API_DELETE, {
        method: 'POST',
        body: JSON.stringify(guide),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then((result) => {
        this.guides = result;
      })
    }
  }
}
</script>

<style>
  .tableDiv {
    padding-top: 1%;
    width: 70%;
    margin: auto;
  }

  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>
