<template>
  <div class="row">
      <div class="col-md-12">
              <div class="card">
                    <div class="card-header">
                      Add a new Listing
                    </div>
                    <div class="card-body">
                          <form-wizard @on-complete="onComplete"
                                  color="gray"
                                  error-color="#a94442"
                                  :model="model"

                                  >
                                <tab-content title="Basic Information" icon="ti-user" :before-change="validateFirstTab">
                                              <div class="row">
                                                    <div class="col-md-8">
                                                          <vue-form-generator
                                                                :model="model"
                                                                :schema="firstTabSchema"
                                                                :options="formOptions"
                                                                ref="firstTabForm">
                                                          </vue-form-generator>
                                                    </div>
                                                    <div class="col-md-4">
                                                          <h4>Tips</h4>
                                                          <p>Writing a good title is important. Use words buyers would use to search for properties like yours.</p><br><strong><u>Important</u> : an ideal title should have a maximum of 50 characters</strong><br><br>
                                                          <p>By selecting the right property type you can help the user to find the right property for his specific needs</p>
                                                    </div>
                                              </div>
                                </tab-content>

                                <tab-content title="Features"  icon="ti-settings" :before-change="validateSecondTab">
                                      <div class="row">
                                            <div class="col-md-8">
                                                    <vue-form-generator
                                                            :model="model"
                                                            :schema="secondTabSchema"
                                                            :options="formOptions"
                                                            ref="secondTabForm"
                                                    >
                                                    </vue-form-generator>
                                            </div>
                                            <div class="col-md-4">

                                            </div>
                                      </div>


                                </tab-content>
                                  <tab-content title="Attachment"  icon="ti-settings" :before-change="validateThirdTab">
                                      <div class="row">
                                              <div class="col-md-8">
                                                      <div v-if="!model.image" :model="model.image">
                                                            <h2>Select an image</h2>
                                                            <input type="file" @change="onFileChange" accept="image/*" />
                                                            <div class="img-attachment">
                                                                    <img src=""/>
                                                            </div>
                                                      </div>
                                                      <div v-else class="" class="img-attachment">
                                                            <img :src="model.image" />
                                                            <button @click="removeImage">Remove image</button>
                                                      </div>
                                              </div>
                                        </div>
                                </tab-content>

                                  <tab-content title="Price"  icon="ti-settings" :before-change="validateFourthTab">
                                      <div class="row">
                                              <div class="col-md-8">
                                                    <vue-form-generator :model="model"
                                                            :schema="fourthTabSchema"
                                                            :options="formOptions"
                                                            ref="fourthTabForm"
                                                    >
                                                    </vue-form-generator>
                                              </div>
                                      </div>
                                </tab-content>


                                <tab-content title="Last step" icon="ti-check">
                                        <h4>This is the preview of your listing!</h4>
                                        <div class="row">
                                        <div class="col-md-3">
                                                <div class="img-preview">
                                                  <img :src="model.image"/>
                                                </div>
                                              <h4 class="title-preview">{{model.title}}</h4>
                                              <p class="short-description-preview"><i class="fa fa-map-marker" aria-hidden="true"></i> {{model.streetaddress}}, {{model.region.name}}, {{model.city.name}}</p>
                                              <span class="price-preview"><strong>GHC {{model.price}}</strong></span></br>
                                              <span class="beds-preview">{{model.beds}} Bedrooms</span>
                                              <span class="baths-preview">{{model.baths}} Baths</span>
                                              <span class="rooms-preview">{{model.rooms}} Rooms</span>
                                              <div class="listing-platform">Lamudi</div>
                                        </div>
                                        </div>

                                </tab-content>
                          </form-wizard>
                    </div>
              </div>
      </div>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator"
import Multiselect from 'vue-multiselect'
import _ from 'lodash'


window.vueMultiSelect = Multiselect

  export default {
    name: 'FormPage',
    data() {
            return {
                          //Handling images
                          cloudinary:{
                            uploadPreset: "",
                            apiKey: "",
                            cloudName:""

                          },
                          model:{
                          name:"Andrew",
                          email:"test4@berkowitz.org",
                          title:"",
                          propertyType:'',
                          subcategory:"",
                          streetaddress:"",
                          region:'',
                          city:'',
                          baths:"",
                          beds:"",
                          rooms:"",
                          livingarea:"",
                          landarea:"",
                          availableOn:"",
                          floor:"",
                          build:"",
                          carspace:"",
                          shortlet:"",
                          description:"",

                          image:"",
                          image_thumbnails1:"",
                          image_thumbnails2:"",
                          image_thumbnails3:"",
                          image_thumbnails4:"",

                          price:"",
                          currency:"",
                          priceAvailability:"",
                          depositBond:"",
                          agentCommission:"",
                          pricingConditions:"",

                          },
                          selected: null,
                          options: ['list', 'of', 'options'],
                          formOptions: {
                          validationErrorClass: "has-error",
                          validationSuccessClass: "has-success",
                          validateAfterChanged: true
                          },
                          firstTabSchema:{
                                 fields:[{
                                              type: "input",
                                              inputType: "text",
                                              label: "Title",
                                              model: "title",
                                              required:true,
                                              validator:VueFormGenerator.validators.string,
                                              styleClasses:'col-xs-6'
                                           },
                                           {
                                              type: "select",
                                              multiSelect: false,
                                              placeholder: "Select your property type",
                                              label: "Property Type",
                                              model: "propertyType",
                                              required:true,
                                              selectOptions:{
                                                  key:"name",
                                                  label:"name",
                                                  noneSelectedText:"Select your Propety Type",
                                                  searchable: true,
                                                  customLabel: function({name}){
                                                    return `${name}`
                                                  }
                                              },
                                              values:[
                                                  {
                                                    "name": "Apartment"
                                                  },
                                                  {
                                                    "name": "House"
                                                  },
                                                  {
                                                    "name": "Land"
                                                  },
                                                  {
                                                    "name": "Commercial"
                                                  },
                                                  {
                                                    "name": "Development"
                                                  }
                                              ],
                                              styleClasses:'col-xs-6'
                                           },
                                                {
                                              type: "select",
                                              inputType: "text",
                                              multiSelect: false,
                                              placeholder: "Select your Category",
                                              label: "Subcategory",
                                              model: "subcategory",
                                              required:true,
                                              selectOptions:{
                                                  key:"name",
                                                  label:"name",
                                                  noneSelectedText:"Select your Sub Category of this property Type",
                                                  searchable: true,
                                                  customLabel: function({name}){
                                                    return `${name}`
                                                  }
                                              },
                                              values:[
                                                  {
                                                    "name": "Uncompleted"
                                                  },
                                                  {
                                                    "name": "Rooms"
                                                  },
                                                  {
                                                    "name": "Single-Family House"
                                                  },
                                                  {
                                                    "name": "Multi-Family House"
                                                  },
                                                  {
                                                    "name":"Offices"
                                                  },
                                                  {
                                                    "name": "Townhouse"
                                                  },
                                                  {
                                                    "name": "Farm/Ranch"
                                                  },
                                                  {
                                                    "name": "Special Property"
                                                  },
                                                  {
                                                    "name": "Others"
                                                  }
                                              ],
                                              styleClasses:'col-xs-6'
                                           },
                                          {
                                            type: "input",
                                            inputType: "text",
                                            label: "Street Address",
                                            model: "streetAddress",
                                            required:true,
                                            validator:VueFormGenerator.validators.string,
                                            styleClasses:'col-xs-6'
                                         },
                                        {
                                              type: "select",
                                               inputType: "text",
                                              multiSelect: false,
                                              placeholder: "Select your Region",
                                              label: "Region",
                                              model: "region",
                                              required:true,
                                              selectOptions:{
                                                  key:"name",
                                                  label:"name",
                                                  noneSelectedText:"Select the Region of the property",
                                                  searchable: true,
                                                  customLabel: function({name}){
                                                    return `${name}`
                                                  }
                                              },
                                              values:[
                                                  {
                                                    "name": "Ashanti Region"
                                                  },
                                                  {
                                                    "name": "Brong-Ahafo Region"
                                                  },
                                                  {
                                                    "name": "Central Region"
                                                  },
                                                  {
                                                    "name": "Eastern Region"
                                                  },
                                                  {
                                                    "name":"Ghana"
                                                  },
                                                  {
                                                    "name": "Greater Accra Region"
                                                  },
                                                  {
                                                    "name": "Northern Region"
                                                  },
                                                  {
                                                    "name": "Upper East Region"
                                                  },
                                                  {
                                                    "name": "Upper West Region"
                                                  },
                                                  {
                                                    "name": "Volta Region"
                                                  },
                                                  {
                                                    "name": "Western Region"
                                                  }
                                              ],
                                              styleClasses:'col-xs-3'
                                           }, {
                                              type: "select",
                                              multiSelect: false,
                                              placeholder: "Select your City",
                                              label: "City",
                                              model: "city",
                                              required:true,
                                              selectOptions:{
                                                  key:"name",
                                                  label:"name",
                                                  noneSelectedText:"Select the Region of the property",
                                                  searchable: true,
                                                  customLabel: function({name}){
                                                    return `${name}`
                                                  }
                                              },
                                              values:[
                                                  {
                                                    "name": "Barekese"
                                                  },
                                                  {
                                                    "name": "Breman"
                                                  },
                                                  {
                                                    "name": "Domeabra"
                                                  },
                                                  {
                                                    "name": "Kumasi"
                                                  },
                                                  {
                                                    "name":"Kwapia"
                                                  }
                                              ],
                                              styleClasses:'col-xs-3'
                                           }
                                         ]
                          },
                          secondTabSchema:{
                                     fields:[
                                               {
                                                  type: "input",
                                                   inputType: "number",
                                                  label: "Baths",
                                                  model: "baths",
                                                  required:true,
                                                  validator:VueFormGenerator.validators.integer,
                                                  styleClasses:'col-xs-4'
                                               },
                                              {
                                                type: "input",
                                                inputType: "number",
                                                label: "Bed",
                                                model: "beds",
                                                required:true,
                                                validator:VueFormGenerator.validators.integer,
                                                styleClasses:'col-xs-4'
                                              },
                                              {
                                                type: "input",
                                                inputType: "number",
                                                label: "Rooms",
                                                model: "rooms",
                                                required:true,
                                                validator:VueFormGenerator.validators.integer,
                                                styleClasses:'col-xs-4'
                                              },
                                              {
                                                type: "input",
                                                inputType: "number",
                                                label: "Living area (square meters)",
                                                model: "livingarea",
                                                required:true,
                                                validator:VueFormGenerator.validators.integer,
                                                styleClasses:'col-xs-6'
                                              },
                                              {
                                                type: "input",
                                                inputType: "number",
                                                label: "Land Area (square meters)",
                                                model: "landarea",
                                                required:true,
                                                validator:VueFormGenerator.validators.integer,
                                                styleClasses:'col-xs-6'
                                              },
                                               {
                                                type: "input",
                                                inputType:"text",
                                                label: "Available on",
                                                model: "availableOn",
                                                required:true,
                                                validator:VueFormGenerator.validators.string,
                                                styleClasses:'col-xs-6'
                                              }

                                              ]
                          },
                           thirdTabSchema:{
                                     fields:[
                                               {
                                                  type: "input",
                                                  inputType: "file",
                                                  label: "Select your Main Image",
                                                  model: "image",
                                                  required:true,
                                                  styleClasses:'col-xs-4'
                                               },
                                                 {
                                                  type: "input",
                                                  inputType: "file",
                                                  label: "Image",
                                                  model: "image",
                                                  required:true,
                                                  styleClasses:'col-xs-4'
                                               },
                                                 {
                                                  type: "input",
                                                  inputType: "file",
                                                  label: "Image",
                                                  model: "image",
                                                  required:true,
                                                  styleClasses:'col-xs-4'
                                               }

                                              ]
                          },
                           fourthTabSchema:{
                                     fields:[
                                               {
                                                  type: "input",
                                                  inputType: "number",
                                                  label: "Price",
                                                  model: "price",
                                                  required:true,
                                                  validator:VueFormGenerator.validators.integer,
                                                  styleClasses:'col-xs-4'
                                               },
                                              {
                                                type: "input",
                                                inputType: "text",
                                                label: "Currency",
                                                model: "currency",
                                                required:false,
                                                validator:VueFormGenerator.validators.string,
                                                styleClasses:'col-xs-4'
                                              },
                                              {
                                                type: "select",
                                                inputType: "text",
                                                label: "Show Price",
                                                model: "priceAvailability",
                                                required:false,
                                                validator:VueFormGenerator.validators.string,
                                                values:["Show price", "Hide the Price"],
                                                styleClasses:'col-xs-4'
                                              },
                                              {
                                                type: "input",
                                                inputType: "number",
                                                label: "Deposit Bond",
                                                model: "depositBond",
                                                required:false,
                                                validator:VueFormGenerator.validators.integer,
                                                styleClasses:'col-xs-4'
                                              },
                                              {
                                                type: "input",
                                                 inputType: "number",
                                                label: "Agent Commission",
                                                model: "agentCommission",
                                                required:false,
                                                validator:VueFormGenerator.validators.integer,
                                                styleClasses:'col-xs-4'
                                              },
                                              {
                                                type: "input",
                                                 inputType: "text",
                                                label: "Pricing Conditions",
                                                model: "pricingConditions",
                                                required:false,
                                                validator:VueFormGenerator.validators.string,
                                                styleClasses:'col-xs-4'
                                              }
                                              ]
                          }
                    }
          },
 methods: {
      onComplete: function(){
              this.makeApiCall(this.model);
              alert('Yay. Done!',this.model);
       },
       //Prepare the API call
       makeApiCall(model){
              this.$api.makeCall(model, this.axiosCallBack);
       },
       axiosCallBack(callResponse){
              console.log(callResponse);
       },


   validateFirstTab: function(){
     return this.$refs.firstTabForm.validate();
   },
   validateSecondTab: function(){
     return this.$refs.secondTabForm.validate();
   },
   validateThirdTab: function(){
     return this.model.image !="";
   },
   validateFourthTab: function(){
     return this.$refs.fourthTabForm.validate();
   },
   onFileChange(e){
        var files = e.target.files || e.dataTransfer.files;
        console.log(files);
        if(!files.length)
          return;
        this.createImage(files[0]);
   },
   createImage(file){
        var image = new Image();
        var reader = new FileReader();
        var vm = this.model;

        reader.onload = (e) => {vm.image = e.target.result;};
        reader.readAsDataURL(file);
   },
   removeImage: function(e){
        this.image = "";
   },

    prettyJSON: function(json) {
            if (json) {
                json = JSON.stringify(json, undefined, 4);
                json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'key';
                        } else {
                            cls = 'string';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                });
            }
        }
   },
   computed: {

        clUrl: function(){
            return `https://api.cloudinary.com/v1_1/${this.cloudinary.cloudName}/upload`;
        },

   },

   components:{
        Multiselect
   }

  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.wizard-header{
display: none;
}
  pre {
  overflow: auto;
}
  pre .string { color: #885800; }
  pre .number { color: blue; }
  pre .boolean { color: magenta; }
  pre .null { color: red; }
  pre .key { color: green; }


.img-attachment{
    background-size:cover;
    background-position: center;
    height: 250px; width: 250px;
    border: 1px solid #bbb;
}
  .img-attachment img{
      max-width: 100%;
      max-height: 100%;
  }
.img-preview{
  width: 220px;
  height: 220px;
}
.img-preview img{
    display:block;
    max-height: auto;
    max-width: 100%;

}

</style>