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
                      label="Enter Name">
              <b-form-input id="name" placeholder="Enter name" v-model.trim="guide.name"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter address">
                <b-form-textarea id="address"
                          v-model="guide.address"
                          placeholder="Enter address"
                          :rows="2"
                          :max-rows="6">{{guide.address}}</b-form-textarea>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter age">
              <b-form-input id="age" placeholder="Enter age" v-model.trim="guide.age"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter sex">
              <b-form-input id="sex" placeholder="Enter sex" v-model.trim="guide.sex"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Save</b-button>
          </b-form>
        </b-jumbotron>
      </div>
    </b-col>
  </b-row>
</template>

<script>
const API_URL = 'https://localist-backend.herokuapp.com/add-guide';

export default {
  name: 'AddGuide',
  data: () => ({
    guide: {
      name: '',
      address: '',
      age: '',
      sex: ''
    }
  }),
  methods: {
    onSubmit() {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.guide),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then((result) => {
        if (result.details) {
          const error = result.details.map(detail => detail.message).join('. ');
        } else {
          this.$router.push('/guides')
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
