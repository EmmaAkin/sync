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
                                                          <h4>Tips</h4>
                                                          <p>Add the necessary features of your property.</p><br><strong><u>Important</u> : users would want to know more about your different features</strong><br><br>
                                                          <p>Take time to enter the necessary features</p>
                                                </div>
                                      </div>


                                </tab-content>
                                  <tab-content title="Attachment"  icon="ti-settings" :before-change="validateThirdTab">
                                      <div class="row">
                                              <div class="col-md-8">
                                                      <div v-if="!model.image" :model="model.image">
                                                            <h2>Select an image</h2>
                                                            <input type="file" @change="onFileChange" accept="image" />
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
                                        <!--//TODO::: Andrew make the necessary styling on the page -->
                                    <div class="row">
                                        <div class="col-md-5">
                                            <h4><img src="/static/img/lamudi_logo.fw.d3d7860.png" class="icon img-listing-logo"> Lamudi Preview </h4>
                                              <div class="catalog-wrapper"> <!-- catlogue -->
                                                 <ul style="hidden = true"class="properties-list" id="pnlPropertiesListPanel">
                                                    <li class="highlight-box">
                                                       <div class="wrapper top-position"> <!-- wrapper -->
                                                            <ul style="hidden = true"class="properties-list" id="pnlPropertiesListPanel">
                                                                <li class="highlight-box">
                                                                    <div class="wrapper top-position">
                                                                        <div class="listing-info-container">
                                                                            <div class="listing-info">
                                                                               <h3> <a class="main-link"> {{model.title}} </a> </h3>
                                                                               <p class="listing-address icon-location"> {{model.address}}, {{model.region.name}}, {{model.city.name}} </p>
                                                                                  <span class="listing-price">GH₵ {{model.price}} </span>
                                                                                  <ul class="listing-attributes has-agent">
                                                                                   <li> 
                                                                                      <span class="listing-attributes-value">{{ model.beds }} <span class="listing-attributes-title">Bedrooms</span>
                                                                                      </span>
                                                                                    </li>
                                                                                    <li>
                                                                                      <span class="listing-attributes-value">{{model.baths}} <span class="listing-attributes-title">Baths</span>
                                                                                      </span>
                                                                                    </li>
                                                                                    <li>
                                                                                      <span class="listing-attributes-value">{{model.rooms}} <span class="listing-attributes-title">Rooms (Total)</span>
                                                                                      </span>
                                                                                    </li>
                                                                                  </ul>
                                                                                  <div class="listing-actions">
                                                                                      <div class="listing-actions-inner">
                                                                                        <a>
                                                                                          <button class="more inverse">More Details</button>
                                                                                        </a>
                                                                                      </div> <!-- la-inner -->
                                                                                      <div class="cta-buttons">
                                                                                          <a href="#phone-modal" data-type="remote-box" data-class="phone-modal blue" rel="nofollow" original-title="Call agency">
                                                                                           <span>Call agency</span>
                                                                                          </a>
                                                                                          <a href="#email-agent-ajax" data-type="remote-box" data-class="email-modal blue" rel="nofollow" class="button inverse icon-mail tooltip" original-title="Send mail">
                                                                                            <span>Send mail</span>
                                                                                          </a>
                                                                                      </div> <!-- cta -->

                                                                                  </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="listing-image">
                                                                       <a href="/2-bedroom-house-for-rent-at-ashale-botwe-19383-21.html?location_region=26&amp;location_city=837&amp;attribute_option=offer_type%3Arent&amp;dir=desc&amp;disable_previous=true">
                                                                        <img class="lazy b-loaded" :src="model.image" >
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                       </div> <!-- END of Wrapper -->
                                                    </li>
                                                 </ul>
                                              </div> <!-- END Catalogue --> 
                                              
                                              <!--  <div class="img-preview">
                                                  <img :src="model.image"/>
                                                </div>
                                              <h4 class="title-preview">{{model.title}}</h4>
                                              <p class="short-description-preview"><i class="fa fa-map-marker" aria-hidden="true"></i> {{model.streetaddress}}, {{model.region.name}}, {{model.city.name}}</p>
                                              <span class="price-preview"><strong>GHC {{model.price}}</strong></span></br>
                                              <span class="beds-preview">{{model.beds}} Bedrooms</span>
                                              <span class="baths-preview">{{model.baths}} Baths</span>
                                              <span class="rooms-preview">{{model.rooms}} Rooms</span>
                                              <div class="listing-platform">Lamudi</div> -->

                                        </div>
                                        <div class="col-md-2"> <span>  </span> </div>
                                      <div class="col-md-5">
                                          <h4> <img src="/static/img/tonaton.fw.c1a6e21.png" class="icon img-listing-logo"/> TonaTon Preview </h4>
                                            <div class="ui-item">
                                                <div class="item-thumb has-frames">
                                                     <a href="#">
                                                        <img alt="a very nice house for rent at abelemkpe" :src="model.image" >
                                                      </a>
                                                </div> <!-- item-thumb -->
                                                <div class="item-content">
                                                    <a href="#" class="item-title h4"> {{ model.title }} </a>
                                                    <p class="item-meta">
                                                        <span>Beds: {{ model.beds }}</span>
                                                        <span>, Baths: {{ model.baths }}</span>
                                                    </p>
                                                    <p class="item-location">
                                                        <span class="ui-bubble is-member">MEMBER</span>
                                                        <span>2 minutes ago</span>
                                                        <span>, </span>
                                                        <span class="item-area"> {{ model.region.name }}, {{ model.city.name }}</span>
                                                         <span>, </span>
                                                        <span class="item-cat">{{ model.type }}</span>
                                                    </p>
                                                    <p class="item-info">
                                                       <strong>GH₵ {{ model.price }} /month</strong>
                                                    </p>

                                                </div> <!-- Item -->
                                                <div class="item-extras">

                                                </div>
                                            </div> <!-- UI Item -->
                                      </div> <!-- col-md-5 -->
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
                                              placeholder: "Greater Accra Region",
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
                                              placeholder: "Accra",
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
                                                    "name": "Accra"
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
    //Todo the launch of the completion of the form
            this.$listingModel.unshift(this.model);

          console.log("This is the update", this.$listingModel[0]);

		this.makeApiCall(this.model);

          this.$router.push({ path: 'dashboard' })

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
.vue-form-wizard .wizard-navigation .progress-with-circle{
  top:20px !important;
}
.vue-form-wizard .icon-circle{
  width: 30px !important;
  height:30px !important;
}

// ======================================= JUMIA STYLING ===============
button.inverse, .button.inverse, .inverse.button-blue, .inverse.button-green, .inverse.button-grey {
    background-color: #FFF;
    border-color: #ff8700;
    color: #ff8700;
}

button, .button {
    background-color: #ff8700;
    border: 1px solid #ff8700;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-weight: 600;
    padding: 0.625em 0.625em;
    text-decoration: none;
    text-transform: uppercase !important;
    transition: all .15s ease-out;
    transition-property: color,background-color,border-color;
}

.properties-list,
.developments .development-list {
    margin-top: 0.625em
}

.properties-list>li,
.developments .development-list>li {
    *zoom: 1;
    margin-bottom: 1.25em;
    position: relative
}

.properties-list>li:after,
.developments .development-list>li:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden
}

.properties-list>li:last-child,
.developments .development-list>li:last-child {
    margin-bottom: 0
}

.properties-list>li .delete,
.developments .development-list>li .delete {
    display: block
}

.properties-list>li .delete .icon-trash,
.developments .development-list>li .delete .icon-trash {
    font-size: 1em;
    color: #fff;
    margin-left: 0.42em;
}

.properties-list>li:hover .delete,
.developments .development-list>li:hover .delete {
    display: block
}

.properties-list .wrapper,
.developments .development-list .wrapper {
    *zoom: 1;
    position: relative;
    transition: .15s background-color ease-out
}

.properties-list .wrapper:after,
.developments .development-list .wrapper:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden
}

.properties-list .wrapper .listing-image,
.developments .development-list .wrapper .listing-image {
    cursor: pointer;
    width: 19em;
    float: left!important;
    height: 14em;
    position: relative;
    overflow: hidden
}

.properties-list .wrapper .listing-image .premium,
.developments .development-list .wrapper .listing-image .premium {
    background-color: #254980;
    color: #fff;
    text-transform: uppercase;
    display: block;
    position: absolute;
    font-weight: 700;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    padding: 0.5em 2em;
    top: 1.62em;
    left: -2em;
    width: 9.3em;
    text-align: center
}

html[class*="yekan"] .properties-list .wrapper .listing-image .premium,
html[class*="yekan"] .developments .development-list .wrapper .listing-image .premium,
.developments html[class*="yekan"] .development-list .wrapper .listing-image .premium {
    left: -40px;
    width: 170px
}

.properties-list .wrapper .listing-image .rented,
.developments .development-list .wrapper .listing-image .rented,
.properties-list .wrapper .listing-image .sold,
.developments .development-list .wrapper .listing-image .sold {
    background-color: #F45C66;
    color: #fff;
    text-transform: uppercase;
    display: block;
    position: absolute;
    font-weight: 700;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    padding: 8px 30px;
    top: 26px;
    left: -33px;
    width: 150px;
    text-align: center
}

.properties-list .wrapper .listing-image img,
.developments .development-list .wrapper .listing-image img {
    width: 100%;
    height: 100%
}

.properties-list .wrapper .listing-info-container,
.developments .development-list .wrapper .listing-info-container {
    width: 100%;
    position: absolute;
    float: left!important
}

.properties-list .wrapper .listing-info-container .listing-info,
.developments .development-list .wrapper .listing-info-container .listing-info {
    width: auto;
    min-width: 333px;
    margin-left: 304px;
    height: 228px;
    background-color: #fff;
    padding: 11px 20px;
    position: relative;
    line-height: 1.33em
}

.properties-list .wrapper .listing-info-container .listing-info h2,
.developments .development-list .wrapper .listing-info-container .listing-info h2,
.properties-list .wrapper .listing-info-container .listing-info h3,
.developments .development-list .wrapper .listing-info-container .listing-info h3 {
    font-size: 1.41667em;
    font-weight: 700;
    margin: 0;
    width: 100%;
    text-transform: none;
    line-height: 1.33em;
    height: 1.33em
}

.properties-list .wrapper .listing-info-container .listing-info h2 a,
.developments .development-list .wrapper .listing-info-container .listing-info h2 a,
.properties-list .wrapper .listing-info-container .listing-info h3 a,
.developments .development-list .wrapper .listing-info-container .listing-info h3 a {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    font-weight: 600;
    width: 100%;
    font-size: 15px
}

.properties-list .wrapper .listing-info-container .listing-info .listing-address,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-address {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin: 0 0 2px;
    line-height: 1.7em;
    height: 1.7em
}

.properties-list .wrapper .listing-info-container .listing-info .listing-address:before,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-address:before {
    font-size: 1.08333em;
    padding-right: 3px;
    margin-left: 1px
}

.properties-list .wrapper .listing-info-container .listing-info .listing-price,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-price {
    margin-bottom: 8px;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    font-size: 1.41667em;
    font-weight: 700;
    width: 100%;
    line-height: 1.5em
}

.properties-list .wrapper .listing-info-container .listing-info .listing-attributes,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-attributes {
    width: 100%
}

.properties-list .wrapper .listing-info-container .listing-info .listing-attributes li,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-attributes li {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 1.25em
}

.properties-list .wrapper .listing-info-container .listing-info .listing-attributes li:last-child,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-attributes li:last-child {
    margin-bottom: 0
}

.properties-list .wrapper .listing-info-container .listing-info .listing-agent,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-agent {
    position: absolute;
    top: 85px;
    right: 20px;
    max-width: 100px
}

.properties-list .wrapper .listing-info-container .listing-info .listing-agent img,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-agent img {
    max-width: 100px;
    max-height: 70px
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions {
    padding: 0 20px 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner {
    padding-top: 10px;
    border-top: 1px solid #ccc;
    *zoom: 1
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner:after,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more {
    float: left!important;
    width: 42%;
    margin-right: 0
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .cta-buttons,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .cta-buttons {
    float: right!important;
    width: 58%;
    text-align: right
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .cta-buttons a,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .cta-buttons a {
    width: 2em;
    font-weight: 500%
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button {
    margin-right: 5px;
    padding: 0.5em 0;
    border-color: #ccc;
    color: #ccc;
    display: inline-block;
    font-size: 1.5em;
    text-decoration: none
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button.saved,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button.saved,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .saved.button-blue,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .saved.button-blue,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .saved.button-green,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .saved.button-green,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .saved.button-grey,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .saved.button-grey,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button.saved,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button.saved {
    color: #ff8700
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button:hover,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button:hover,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue:hover,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue:hover,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green:hover,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green:hover,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey:hover,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey:hover,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button:hover,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button:hover {
    background-color: #ff8700;
    color: #fff
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button:hover.favourite-property,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button:hover.favourite-property,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue:hover.favourite-property,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue:hover.favourite-property,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green:hover.favourite-property,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green:hover.favourite-property,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey:hover.favourite-property,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey:hover.favourite-property,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button:hover.favourite-property,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button:hover.favourite-property {
    background: #fff;
    border-color: #ccc!important
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button:last-child,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button:last-child,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue:last-child,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-blue:last-child,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green:last-child,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-green:last-child,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey:last-child,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button-grey:last-child,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button:last-child,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button:last-child {
    margin-right: 0
}

.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button.more,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .button.more,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more.button-blue,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more.button-blue,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more.button-green,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more.button-green,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more.button-grey,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner .more.button-grey,
.properties-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button.more,
.developments .development-list .wrapper .listing-info-container .listing-info .listing-actions .listing-actions-inner button.more {
    font-size: 1em
}

.properties-list .wrapper .listing-info-mobile,
.developments .development-list .wrapper .listing-info-mobile,
.properties-list .wrapper .show-details-mobile,
.developments .development-list .wrapper .show-details-mobile {
    display: none
}

.properties-list .wrapper.over .button,
.developments .development-list .wrapper.over .button,
.properties-list .wrapper.over .button-blue,
.developments .development-list .wrapper.over .button-blue,
.properties-list .wrapper.over .button-green,
.developments .development-list .wrapper.over .button-green,
.properties-list .wrapper.over .button-grey,
.developments .development-list .wrapper.over .button-grey,
.properties-list .wrapper.over button,
.developments .development-list .wrapper.over button {
    background-color: #ff8700;
    border-color: #ff8700!important;
    color: #fff!important
}

.properties-list .wrapper.over .button.favourite-property,
.developments .development-list .wrapper.over .button.favourite-property,
.properties-list .wrapper.over .favourite-property.button-blue,
.developments .development-list .wrapper.over .favourite-property.button-blue,
.properties-list .wrapper.over .favourite-property.button-green,
.developments .development-list .wrapper.over .favourite-property.button-green,
.properties-list .wrapper.over .favourite-property.button-grey,
.developments .development-list .wrapper.over .favourite-property.button-grey,
.properties-list .wrapper.over button.favourite-property,
.developments .development-list .wrapper.over button.favourite-property {
    background: #fff;
    border-color: #ccc!important;
    color: #ff8700!important
}

.properties-list .wrapper.over section .button,
.developments .development-list .wrapper.over section .button,
.properties-list .wrapper.over section .button-blue,
.developments .development-list .wrapper.over section .button-blue,
.properties-list .wrapper.over section .button-green,
.developments .development-list .wrapper.over section .button-green,
.properties-list .wrapper.over section .button-grey,
.developments .development-list .wrapper.over section .button-grey,
.properties-list .wrapper.over section button,
.developments .development-list .wrapper.over section button {
    color: #ff8700;
    text-decoration: none;
    background: 0 0;
    padding: 0
}

.my-content .properties-list>li,
.register-container .properties-list>li,
.my-content .developments .development-list>li,
.developments .my-content .development-list>li,
.register-container .developments .development-list>li,
.developments .register-container .development-list>li {
    margin-bottom: 20px;
    position: relative
}

.my-content .properties-list>li .listing-info,
.register-container .properties-list>li .listing-info,
.my-content .developments .development-list>li .listing-info,
.developments .my-content .development-list>li .listing-info,
.register-container .developments .development-list>li .listing-info,
.developments .register-container .development-list>li .listing-info {
    border: 1px solid #ccc;
    border-left: none
}

.my-content .properties-list>li .listing-info-mobile,
.register-container .properties-list>li .listing-info-mobile,
.my-content .developments .development-list>li .listing-info-mobile,
.developments .my-content .development-list>li .listing-info-mobile,
.register-container .developments .development-list>li .listing-info-mobile,
.developments .register-container .development-list>li .listing-info-mobile {
    border: 1px solid #ccc;
    border-top: none
}
// =============================== END OF JUMIA ======================

// ============================== TONATON ============================
.ui-item {
    padding: 12px 8px;
    border-radius: 3px 3px 4px 4px;
    border: 1px solid rgba(255,255,255,0);
    border-top: 1px solid #d4ded9;
    -webkit-box-shadow: 0 2px 0 0 rgba(212,222,217,0);
    box-shadow: 0 2px 0 0 rgba(212,222,217,0);
    min-height: 128px;
}
.ui-item {
    position: relative;
    background: #fff;
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.ui-item .item-thumb {
    float: left;
    text-align: center;
}

.ui-item .item-thumb a {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: #f3f6f5;
}

.ui-item .item-thumb a:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid rgba(47, 52, 50, .1);
    pointer-events: none;
}

.ui-item .item-thumb img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}

.ui-item .item-thumb.no-bg a {
    background: 0 0;
}

.ui-item .item-thumb.no-frame a:after {
    content: none;
}

.ui-item .item-thumb.has-frames {
    position: relative;
}

.ui-item .item-thumb.has-frames:before,
.ui-item .item-thumb.has-frames:after {
    content: '';
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
}

.ui-item .item-thumb.has-frames:before {
    z-index: 2;
    top: 2px;
    left: 2px;
    border: 1px solid #d4ded9;
}

.ui-item .item-thumb.has-frames:after {
    z-index: 1;
    top: 4px;
    left: 4px;
    border: 1px solid #d4ded9;
}

.ui-item .item-thumb {
    width: 136px;
    height: 102px;
    line-height: 100px;
    margin-right: 24px;
}

.ui-item .item-thumb .ui-icon {
    width: 2rem;
    height: 2rem;
}

.ui-item .item-thumb.no-image {
    opacity: 0;
    width: 0!important;
    overflow: hidden;
    margin-right: 8px;
}
.ui-item.is-similar .item-content {
    white-space: normal;
    min-height: 5rem;
}

.ui-item.is-similar .item-content:after {
    content: none;
}
.ui-item.is-similar .item-title {
    max-height: 42.672px;
    overflow: hidden;
    position: relative;
}

.ui-item.is-similar .item-title:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 20.32px;
    pointer-events: none;
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0), #fff);
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
}
.ui-item .item-title {
    font-weight: 700;
}
.ui-item .item-meta {
    color: #009877;
    font-weight: 700;
}
.ui-item.is-top .item-location {
    color: #707676;
}
.ui-item .item-description,
.ui-item .item-location,
.ui-item .item-date {
    color: #afb7ad;
}
.ui-item .item-location .is-member {
    vertical-align: middle;
    margin-right: .5rem;
}
ui-item .item-info {
    color: #424e4e;
}

.ui-item .item-meta {
    color: #009877;
    font-weight: 700;
}
.ui-bubble.is-member {
    color: #f3f6f5;
    border-radius: 2px;
    font-size: 9px;
    font-weight: 700;
    padding: 1px 4px;
}
.ui-bubble {
    color: #fff;
    background: #afb7ad;
    padding: .1em .4em;
    border-radius: 2em;
}

.vue-form-wizard .wizard-navigation .progress-with-circle{
  top:20px !important;
}
.vue-form-wizard .icon-circle{
  width: 30px !important;
  height:30px !important;

}
</style>