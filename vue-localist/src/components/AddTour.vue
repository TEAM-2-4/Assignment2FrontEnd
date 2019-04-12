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
              <b-form-input id="title" placeholder="Enter title" v-model.trim="tour.title"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Description">
                <b-form-textarea id="description"
                          v-model="tour.description"
                          placeholder="Enter description"
                          :rows="2"
                          :max-rows="6">{{tour.description}}</b-form-textarea>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Author">
              <b-form-input id="author" placeholder="Enter author" v-model.trim="tour.author"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Price">
              <b-form-input id="price" placeholder="Enter price" v-model.trim="tour.price"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Save</b-button>
          </b-form>
        </b-jumbotron>
      </div>
    </b-col>
  </b-row>
</template>

<script>
const API_URL = 'http://localhost:3000/add-tour';

export default {
  name: 'AddTour',
  data: () => ({
    tour: {
      title: '',
      description: '',
      author: '',
      price: ''
    }
  }),
  methods: {
    onSubmit() {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.tour),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then((result) => {
        if (result.details) {
          const error = result.details.map(detail => detail.message).join('. ');
        } else {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style>
  .jumboDiv {
    width: 70%;
    padding-top: 1%;
    margin: auto;
  }

  .jumbotron {
    padding: 2rem;
  }
</style>
