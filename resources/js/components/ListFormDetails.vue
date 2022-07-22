<template>
    <div>
        <router-link :to="{name:'main'}" class="btn btn-success"><< Go Back</router-link>
        <template v-if="form_details.length > 0">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(fd,index) in form_details" :id="fd.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ fd.title }}</td>
                <td>{{ fd.description }}</td>
                <td>
                    <router-link :to="{name:'list_form_images', params:{form_id:fd.id}}" class="btn btn-success">View Images</router-link>

                    <button class="btn btn-danger" @click="deleteEntry(index)">Delete Entry</button>
                </td>
            </tr>

            </tbody>
        </table>
        </template>
        <template v-else>
            <table class="table">
                <thead>
                <tr>
                    <td>
                        <h4>NO DATA AVAILABLE</h4>
                    </td>
                </tr>
                </thead>
            </table>
        </template>
    </div>
</template>

<script>
    export default {
        name: "ListFormDetails",
        data(){
          return {
              form_details:[]
          }
        },
        mounted(){
            window.axios.get('/api/get-forms',{}).then(response => {

                if(response.data.status !=1){
                    alert(response.data.message);
                    return false;
                }

                this.form_details = response.data.data.form_details
            });
        },

        methods:{
            deleteEntry(index){

                var form_id = this.form_details[index]['id'];
                this.form_details.splice(index, 1);

                window.axios.get('/api/delete-form/'+form_id,{})
                    .then(response => {

                        if(response.data.status !=1){
                            alert(response.data.message);
                            return false;
                        }


                    });
            }
        }
    }
</script>

<style scoped>

</style>
