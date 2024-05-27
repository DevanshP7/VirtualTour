AFRAME.registerComponent('cursor-event',{
    schema:{
        selectedItemId : {type:'string',default:''}
    },
    init:function(){
        this.handleMouseEnterEvent()
    },
    getPlaces:function(){
        var id = this.el.getAttribute('id')
        var id_array = ['taj-mahal','budapest','eiffel-tower','new-york-city']
        console.log(id)

        if(id_array.includes(id)){
            var placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute('cursor-event',{selectedItemId:id})
            this.el.setAttribute('material','color','green')
            //console.log(id,id_array,placesContainer)
        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener('mouseenter',(e)=>{
            this.getPlaces()
            //console.log(this.getPlaces())
        })
    }
})