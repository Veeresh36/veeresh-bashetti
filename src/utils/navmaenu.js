const navbars = () => {
    let linkTabs = document.getElementsByClassName("link_tabs");
    let contentTabs = document.getElementsByClassName("contents__tab");

    function tabopen(event, jalathan) {
        for (let linkTab of linkTabs) {
            linkTab.classList.remove("link__active");
        }
        for (let contentTab of contentTabs) {
            contentTab.classList.remove("tab__active");
        }
        event.currentTarget.classList.add("link__active");
        document.getElementById(jalathan).classList.add("tab__active");
    }

    for (let linkTab of linkTabs) {
        linkTab.addEventListener("click", (e) => {
            const targetId = e.currentTarget.getAttribute("data-target");
            tabopen(e, targetId);
        });
    }
};

export default navbars;
    