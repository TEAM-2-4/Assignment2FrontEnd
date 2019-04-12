<template>
  <b-row>
    <b-col cols="12">
      <div class = "tableDiv">
        <b-jumbotron bg-variant ="dark" text-variant="white" border-variant="dark">
          <div class="media" v-for="tour in tours" :key="tour._id">
            <div class="media-body">
              <h5 class="mt-0">Title: {{tour.title}}</h5>
              <h3>Description: {{tour.description}}</h3>
              <h6>Author: {{tour.author}}</h6>
              <h6>Price: {{tour.price}}</h6>
              <button><router-link :to="{ name: 'EditTour', params: { id: tour._id } }">edit</router-link></button>
              <button @click="deletee(tour)">delete</button>
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

const API_URL = 'https://localist-backend.herokuapp.com/tours';
const API_DELETE = 'https://localist-backend.herokuapp.com/delete-tour';

export default {
  name: 'TourList',
  data: () => ({
    tours: [],
    tour: {
      title: '',
      description: '',
      author: '',
      price: ''
    }
  }),
  mounted() {
    fetch(API_URL).then(response => response.json()).then((result) => {
      this.tours = result;
    });
  },
  methods: {
    deletee(tour) {
      fetch(API_DELETE, {
        method: 'POST',
        body: JSON.stringify(tour),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then((result) => {
        this.tours = result;
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
