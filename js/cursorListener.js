AFRAME.registerComponent("cursor-listener",{
    init:function(){
        this.handleClickEvents1();
        this.handleClickEvents2();
        this.handleClickEvents3();
    },
    handleClickEvents1:function(){
        const place1 = document.querySelector("#place-1")
        place1.addEventListener("click",evt => {
                //  this.handleViewState();
                 const skyEl = document.querySelector("#main-container");
            skyEl.setAttribute("material",{
                src:`./assets/place-1.jpg`,
                color:"#fff"
            })
        })
    },
    handleClickEvents2:function(){
        const place2 = document.querySelector("#place-2")
        place2.addEventListener("click",evt => {
                //  this.handleViewState();
                 const skyEl = document.querySelector("#main-container");
            skyEl.setAttribute("material",{
                src:`./assets/place-2.jpg`,
                color:"#fff"
            })
        })
    }
,
handleClickEvents3:function(){
    const place3 = document.querySelector("#place-3")
    place3.addEventListener("click",evt => {
            //  this.handleViewState();
             const skyEl = document.querySelector("#main-container");
        skyEl.setAttribute("material",{
            src:`./assets/place-3.jpg`,
            color:"#fff"
        })
    })
}

})