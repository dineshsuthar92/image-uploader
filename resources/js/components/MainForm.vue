<template>
    <div class="container-fluid">
        <router-link :to="{name:'list_form_details'}" class="btn btn-success float-right">View Submitted Forms >></router-link>
        <br><br>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text"  class="form-control" id="title" v-model="title"  placeholder="Enter Title">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea placeholder="Please enter description" name="description"  class="form-control" id="description" cols="30" rows="10" v-model="description"></textarea>

            </div>


        <!--Upload part-->
        <div>

            <label class="btn btn-default">
                <input type="file" accept="image/*" multiple @change="selectFile" />
            </label>
            <br>
            <button class="btn btn-success"
                    :disabled="!selectedFiles"
                    @click="uploadFiles"
            >
                Submit
            </button>

            <div v-if="progressInfos">
                <div class="mb-2"
                     v-for="(progressInfo, index) in progressInfos"
                     :key="index"
                >
                    <span>{{progressInfo.fileName}}</span>
                    <div class="progress">
                        <div class="progress-bar progress-bar-info"
                             role="progressbar"
                             :aria-valuenow="progressInfo.percentage"
                             aria-valuemin="0"
                             aria-valuemax="100"
                             :style="{ width: progressInfo.percentage + '%' }"
                        >
                            {{progressInfo.percentage}}%
                        </div>
                    </div>
                </div>
            </div>

            <!--<div v-if="message" class="alert alert-light" role="alert">-->
                <!--<ul>-->
                    <!--<li v-for="(ms, i) in message.split('\n')" :key="i">-->
                        <!--{{ ms }}-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
            <!--<div class="card">-->
                <!--<div class="card-header">List of Files</div>-->
                <!--<ul class="list-group list-group-flush">-->
                    <!--<li class="list-group-item"-->
                        <!--v-for="(file, index) in fileInfos"-->
                        <!--:key="index"-->
                    <!--&gt;-->
                        <!--<p><a :href="file.url">{{ file.name }}</a></p>-->
                        <!--<img :src="file.url" :alt="file.name" height="80px">-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        </div>

        <!--Modal start-->
        <div id="appmodal">
            <div v-if="showModal">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Form Submitted Successfully</h5>
                                    </div>
                                    <div class="modal-body">
                                        <p>Form submitted successfully</p>
                                        <p>Redirecting to next page in {{ count_down }} seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <!--Modal end-->
    </div>
</template>

<script>
    import UploadService from "../services/UploadFileService";

    export default {
        name: "MainForm",

        data(){
            return {
                showModal: false,
                count_down:10,
                title:"",
                description:"",
                selectedFiles: undefined,
                progressInfos: [],
                message: "",
                fileInfos: [],
                form_id:"",
            }
        },


        methods: {

            countdown() {
                var i = this.count_down;
                if (i<=0) {

                    window.location.href='/list-form-details';
                }
                if (i!=0) {
                    this.count_down = i-1;
                }
            },

            selectFile() {
                this.progressInfos = [];
                this.selectedFiles = event.target.files;
            },
            uploadFiles() {
                // first save title and Image

                window.axios
                    .post(
                        "/api/save-form-details",
                        {
                            title:this.title,
                            description:this.description
                        },
                        {}
                    )
                    .then(response => {

                        if(response.data.status !=1){
                            alert(response.data.message);
                            return false;
                        }

                        this.form_id = response.data.data.form_id;

                        // then upload the images with form_id
                        this.message = "";
                        for (let i = 0; i < this.selectedFiles.length; i++) {
                            this.upload(i, this.selectedFiles[i]);
                        }

                        this.selectedFiles = undefined;

                        setTimeout(() => this.showModal = true, 2000);

                        setInterval(() => { this.countdown(); },1000);

                    })
                    .catch(error => {
                        console.log('error');
                    });
            },
            upload(idx, file) {
                this.progressInfos[idx] = { percentage: 0, fileName: file.name };
                UploadService.upload(file, this.form_id, (event) => {
                    this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
                })
                    .then((response) => {
                        let prevMessage = this.message ? this.message + "\n" : "";
                        this.message = prevMessage + response.data.message;
                        // return UploadService.getFiles();
                        return true;
                    })
                    .then((files) => {
                        this.fileInfos = files.data;
                    })
                    .catch(() => {
                        this.progressInfos[idx].percentage = 0;
                        this.message = "Could not upload the file:" + file.name;
                    });
            }
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
</style>
