function createEl(el, className, parent){
    let thisEl = document.createElement(el)
    thisEl.classList.add(className)
    parent.appendChild(thisEl)
}

async function createNode() {
    var jsonData = new Promise(function (resolve, reject) {
        var jsonData = JSON.parse(JSON.stringify(ProdSimple))
        resolve(ProdSimple)
    })
    try {
        var Product = await ProdSimple;
        
        const simpleLength = Object.keys(Product.simple).length;
        const prodListEl = document.getElementById("prodList")
        const popup = document.getElementById("popup")

        //create popup
        let ppContainerBgEl = document.createElement("div")
        ppContainerBgEl.classList.add("food--popup-bg")
        popup.appendChild(ppContainerBgEl)
        ppContainerBgEl.addEventListener("click",function(){
            popup.classList.remove("show")
            $("body").removeClass("hide")
        })

        let ppContainerEl = document.createElement("div")
        let pplistEl = document.createElement("ul")
        ppContainerEl.classList.add("food--popup")
        ppContainerEl.appendChild(pplistEl)
        popup.appendChild(ppContainerEl)

        var nowIndex = 0;
        let slideButtons = document.createElement("div")
            slideButtons.classList.add("food--slide-buttons") 

        let slidePrev = document.createElement("div")
            slidePrev.classList.add("food--slide-prev")
            slidePrev.addEventListener("click",function(){
                pp = document.querySelectorAll(".food--popup ul li")
                for(item of pp){
                    item.classList.remove("show")
                }
                if( nowIndex == 0 ){
                    pp[simpleLength - 1].classList.add("show")
                    nowIndex = simpleLength - 1
                }else{
                    pp[nowIndex - 1].classList.add("show")
                    nowIndex = nowIndex - 1
                }
                pp[nowIndex].classList.add("show")
            })
            slideButtons.appendChild(slidePrev)

        let slideNext = document.createElement("div")
            slideNext.classList.add("food--slide-next")
            slideNext.addEventListener("click",function(){
                pp = document.querySelectorAll(".food--popup ul li")
                for(item of pp){
                    item.classList.remove("show")
                }
                if( nowIndex == simpleLength - 1 ){
                    pp[0].classList.add("show")
                    nowIndex = 0
                }else{
                    pp[nowIndex + 1].classList.add("show")
                    nowIndex = nowIndex + 1
                }
                pp[nowIndex].classList.add("show")
            })
            slideButtons.appendChild(slideNext)
            
        popup.appendChild(slideButtons)

        for (i = 0; i < simpleLength; i++) {
            let simpleNum = Object.keys(Product.simple)[i];
            let index = i;
            // make li-element and hover-filter
            let li = document.createElement("li");
            li.setAttribute("popup-thumb-number",index)
            li.classList.add("init")
            li.style.cssText = `transition-delay:${i/10}s`
            li.addEventListener("click",function(){
                nowIndex = index
                console.log(nowIndex)
                var pp = document.querySelectorAll(".food--popup ul li");
                for(item of pp){
                    item.classList.remove("show")
                }
                pp[index].classList.add("show")
                popup.classList.add("show")
                $("body").addClass("hide")
            })

            let imgEl = document.createElement("img");
            imgEl.setAttribute("src",`/common/image/${simpleNum}.jpg`)

            let filterEl = document.createElement("div");
            filterEl.classList.add("filter")

            let filterNameEl = document.createElement("p");
            filterNameEl.innerHTML = Product.simple[simpleNum].name

            filterEl.appendChild(filterNameEl)
            li.appendChild(filterEl)
            li.appendChild(imgEl)
            prodListEl.appendChild(li)

            //make popup-list
            let prodName = Product.simple[simpleNum].name;
            let prodBrand = Product.simple[simpleNum].brand;
            let prodSave = Product.simple[simpleNum].save;
            let prodDate = Product.simple[simpleNum].date;
            let prodExp = Product.simple[simpleNum].exp;
            let prodMaterial = Product.simple[simpleNum].material;
            
            let ppImgBoxEl = document.createElement("div")
                ppImgBoxEl.classList.add("food--popup-imgBox")
            let ppTextBoxEl = document.createElement("div")
                ppTextBoxEl.classList.add("public--text2","food--popup-textBox","bold")

            let ppTextBoxFlag = document.createElement("div")//텍스트 상자 초록깃발 만들기
                ppTextBoxFlag.classList.add("food--popup-textBox-flag")
                ppTextBoxEl.appendChild(ppTextBoxFlag)                
                
            let ppText1 = document.createElement("p")
                ppText1.classList.add("public--text1")
                ppText1.innerHTML = prodName;
                ppTextBoxEl.appendChild(ppText1)
            let ppText2 = document.createElement("p")
                ppText2.innerHTML = `<span class="black3">브랜드 </span>${prodBrand} ㅣ <span class="black3">보관 </span>${prodSave} ㅣ <span class="black3">유통기한 </span>${prodDate}`
                ppTextBoxEl.appendChild(ppText2)
            let ppText3 = document.createElement("p")
                ppText3.classList.add("black3")
                ppText3.innerHTML = `특징`
                ppTextBoxEl.appendChild(ppText3)
            let ppText4 = document.createElement("p")
                ppText4.innerHTML = prodExp
                ppTextBoxEl.appendChild(ppText4)
            let ppText5 = document.createElement("p")
                ppText5.classList.add("black3")
                ppText5.innerHTML = `원재료`
                ppTextBoxEl.appendChild(ppText5)
            let ppText6 = document.createElement("p")
                ppText6.innerHTML = prodMaterial;
                ppTextBoxEl.appendChild(ppText6)
            let ppImgEl = document.createElement("img")
                ppImgEl.setAttribute("src",`/common/image/${simpleNum}.jpg`)
                ppImgBoxEl.appendChild(ppImgEl)

            let ppCloseBtn = document.createElement("div")
            let ppCloseBtnSpan1 = document.createElement("span")
            let ppCloseBtnSpan2 = document.createElement("span")
                ppCloseBtn.classList.add("ppCloseBtn")
                ppCloseBtn.appendChild(ppCloseBtnSpan1)
                ppCloseBtn.appendChild(ppCloseBtnSpan2)
                ppCloseBtn.addEventListener("click",function(){
                    popup.classList.remove("show")
                    $("body").addClass("hide")
                })
                

            let ppLi = document.createElement("li")
                ppLi.setAttribute("popup-number",i)
                ppLi.appendChild(ppImgBoxEl)
                ppLi.appendChild(ppTextBoxEl)
                ppLi.appendChild(ppCloseBtn)
                pplistEl.appendChild(ppLi)
        }
    } catch {
        console.log("load failed")
    }
}
createNode()