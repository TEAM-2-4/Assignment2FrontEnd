<template>
  <b-row>
    <b-col cols="12">
      <div class = "jumboDiv">
        <b-jumbotron bg-variant ="dark" text-variant="white" border-variant="dark">
          <b-form @submit="onSubmit">
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Title">
              <b-form-input id="title" v-model.trim="tour.title"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Description">
                <b-form-textarea id="description"
                          v-model="tour.description"
                          placeholder="Enter something"
                          :rows="2"
                          :max-rows="6">{{tour.description}}</b-form-textarea>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Author">
              <b-form-input id="author" v-model.trim="tour.author"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Price">
              <b-form-input id="price" v-model.trim="tour.price"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Update</b-button>
          </b-form>
        </b-jumbotron>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import router from '../router'


const API_URL = 'http://localhost:3000/edit-tour';
const API_FIND = 'http://localhost:3000/tour-single';

export default {
  name: 'EditTour',
  data () {
    return {
      tour: {
        _id: '',
        title: '',
        description: '',
        author: '',
        price: ''
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    var t = {
      id: this.$route.params.id
    };
    fetch(API_FIND, {
        method: 'POST',
        body: JSON.stringify(t),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then((result) => {
      this.tour = result;
    });
  },
  methods: {
    onSubmit() {
      this.tour._id = this.id;
      console.log(JSON.stringify(this.tour));
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.tour),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then((result) => {
        if (result.details) {
          const error = result.details.map(detail => detail.message).join('. ');
          console.log(error);
        } else {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
