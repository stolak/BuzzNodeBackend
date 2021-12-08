<template>
<div class="container mt-3">
      <div class="submit-form">
        <div class="form-group">
          
          <div class="input-group">
          <input v-model="tags" placeholder="input tag to search" class="form-control">
          <button @click="retrieveQueryPhoto(tags)" class="btn btn-success">Go</button>
        </div>
        </div>
      </div> 
  </div>
  
  
  <div class="gallery" v-for="r in potos" :key="r.id">
  <a href="#">
    <img v-bind:src="'https://live.staticflickr.com/'+r.server+'/'+r.id +'_'+r.secret+'.jpg'" alt="No Image" width="600" height="400">
  </a>
  <div class="desc">{{r.title}}</div>
</div>
</template> 

<script>
import ApiService from "../services/ApiService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tags: null, 
      potos:[{  //not the this record is loaded as doming record. its should be removed or initialised to null during going live
      id: '51733017948',
      owner: '74752281@N00',
      secret: 'c7dec2e950',
      server: '65535',
      farm: 66,
      title: 'CHU_2875-3',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
      
    },
    {
      id: '51732779356',
      owner: '74752281@N00',
      secret: '1eb4a5d6df',
      server: '65535',
      farm: 66,
      title: 'CHU_2892-3',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    
    },
    {
      id: '51732779286',
      owner: '74752281@N00',
      secret: '1af1460da9',
      server: '65535',
      farm: 66,
      title: 'CHU_2897-3',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '51732779086',
      owner: '74752281@N00',
      secret: 'd64e927eaa',
      server: '65535',
      farm: 66,
      title: 'CHU_2899-3',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: '51731958182',
      owner: '74752281@N00',
      secret: '73fd8c8e4c',
      server: '65535',
      farm: 66,
      title: 'CHU_2901-3',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
     
    },
    {
      id: '51732115689',
      owner: '54784939@N07',
      secret: '465efe4611',
      server: '65535',
      farm: 66,
      title: 'Nigeria - October/November 2021',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
     
    },
    {
      id: '51732115534',
      owner: '54784939@N07',
      secret: '25d834f15c',
      server: '65535',
      farm: 66,
      title: 'Nigeria - October/November 2021',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
      
    },
    {
      id: '51732352865',
      owner: '54784939@N07',
      secret: '429d2a3478',
      server: '65535',
      farm: 66,
      title: 'Nigeria - October/November 2021',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
      
    },
    {
      id: '51732352675',
      owner: '54784939@N07',
      secret: 'db966e1a09',
      server: '65535',
      farm: 66,
      title: 'Nigeria - October/November 2021',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
      
    },
    {
      id: '51732352525',
      owner: '54784939@N07',
      secret: '41528d9027',
      server: '65535',
      farm: 66,
      title: 'Nigeria - October/November 2021',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
      
    }]
    };
  },
  created() {
       this.retrieveAll();
    },
  methods: {
    retrieveAll() {
      
      ApiService.getAllFoto()
        .then(response => {
          this.potos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e); 
        });
    },
    retrieveQueryPhoto(tag) {
      ApiService.getFilterFoto(tag)
        .then(response => {
          this.potos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e); 
        });
    },
   
  }
};
</script>

<style>
.input-group {
  display: flex;
  align-content: stretch;
}

.input-group > input {
  flex: 1 0 auto;
}
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
