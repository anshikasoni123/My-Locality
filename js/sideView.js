AFRAME.registerComponent("side-view",{
    init:function(){
        this.createPlaces();
    },
    createPlaces:function(){
        const sideViewContainer = document.querySelector("#side-view-container")
        let previousXPosition = -100;
        let previousYPosition = 20;
        for(var i=1;i<=3;i++){
           position = {x:(previousXPosition+=40),y:(previousYPosition+=2),z:-40};
           const entityEl = this.createThumbnailPlace(position,i);
           sideViewContainer.appendChild(entityEl);
        }
    },
    createThumbnailPlace:function(position,id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"circle",
            radius:1.2
        });
        entityEl.setAttribute("material",{
            src:"./assets/home.jpeg",
            color:"#fff"
        });
        entityEl.setAttribute("position",position);
        entityEl.setAttribute("id",`place-${id}`);
        return entityEl;
    }
})