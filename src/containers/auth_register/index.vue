
<template>
  <div class="container h-100">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-8">

        <div class="card card-body">
            <h4 class="card-title">Register</h4>

              <form @submit.prevent="register">
                  <fieldset>
                    <div class='row'>
                      <div class='col-lg-12'>
                        <FormInput v-model="register_user.name" name='name' label='Name' placeholder='Name'/>
                      </div>

                      <div class='col-lg-6'>
                        <FormInput v-model="register_user.email" name='email' label='Email' placeholder='Email'/>
                      </div>

                      <div class='col-lg-6'>
                        <FormInput v-model="register_user.github.login" name='github'  label='GitHub Username' placeholder='GitHub Username'/>
                      </div>

                      <div class='col-lg-6'>
                        <FormInput v-model="register_user.password" name='password' label='Password' placeholder='Password' type='password'/>
                      </div>

                      <div class='col-lg-6'>
                        <FormInput v-model="register_user.passwordverify" name='passwordverify' label='Confirm Password' placeholder='Confirm Password' type='password'/>
                      </div>
                    </div>

                    <FormSubmit label='Sign Up' class='btn-success btn-block w-100'/>

                    <p v-if="register_user.error" class="error">Bad registration information</p>


                  </fieldset>

                </form>

            </div>
        </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    FormInput,
    FormSubmit
  },
  metaInfo: {
    title: 'Auth - Register'
  },
  computed: mapGetters({
    loading: 'auth/loading',
    register_user: 'auth/register_user'
  }),
  methods: mapActions({
    register: 'auth/register'
  })
}
</script>


