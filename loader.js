// import cors from "cors";
(() => {
    const script = document.currentScript;
    // cors({origin: "*"})
    const loadWidget = () => {

        const chatIcon = document.createElement("div")
        const chatIconStyle = chatIcon.style;
        chatIconStyle.width = "60px";    
        chatIconStyle.height = "60px";
        chatIconStyle.borderRadius = "30px"
        chatIconStyle.backgroundColor = "blue"
        chatIconStyle.position = "fixed";
        chatIconStyle.bottom = "40px";
        chatIconStyle.right = "50px";

        const imageTag = document.createElement("img")
        const imageTagStyle = imageTag.style
        imageTag.src = "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731__340.png"
        imageTagStyle.width = "60px"
        imageTagStyle.height = "60px"

        chatIcon.appendChild(imageTag)

        const chatBox = document.createElement("div")
        const chatBoxStyle = chatBox.style;
        chatBoxStyle.display = "none"
        chatBoxStyle.width = "500px";    
        chatBoxStyle.height = "600px";
        chatBoxStyle.padding = "8px"
        // chatBoxStyle.backgroundColor = "blue"
        chatBoxStyle.position = "fixed";
        chatBoxStyle.top = "85px";
        chatBoxStyle.right = "100px";
        chatBoxStyle.overflow = "hidden"

        chatIcon.appendChild(chatBox)

        const iframe = document.createElement("iframe");

        const iframeStyle = iframe.style;
        iframeStyle.border = "none"
        iframeStyle.width = "100%";
        iframeStyle.height = "100%";
        iframeStyle.borderRadius="20px"
        chatBox.appendChild(iframe);

        chatIcon.addEventListener("click" , ()=> {
            if(chatBoxStyle.display == "none"){
                chatBoxStyle.display = "block"
            }else{
                chatBoxStyle.display = "none"
            }
        })
        
        const license = script.getAttribute("data-visitor-id");
        const widgetUrl = `https://chat-widget-five.vercel.app/?visitorId=r213d-rt5hhe-52ebxg`;
        const greeting = script.getAttribute("data-greeting");
        
        iframe.addEventListener("load", () => {
            iframe.contentWindow.postMessage({greeting}, "https://chat-widget-five.vercel.app/");
         });
        
        iframe.src = widgetUrl;
        document.body.appendChild(chatIcon);
        
    }
    
    if ( document.readyState === "complete" ) {
        loadWidget();
    } else {
        document.addEventListener("readystatechange", () => {
            if ( document.readyState === "complete" ) {
                loadWidget();
            }
        });
    }

})();
