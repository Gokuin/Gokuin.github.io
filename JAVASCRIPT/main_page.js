//when the page is finished loading and ready to be displayed call
//the addListeners function
window.addEventListener("load", addListeners);

//adds event listeners to the side three options on the main webpage
function addListeners(){
    general_info_tab = document.getElementById("SideOne");
    education_tab = document.getElementById("SideTwo");
    contact_tab = document.getElementById("SideThree");
    general_info_tab.addEventListener("click", generalInfoTabClicked);
    education_tab.addEventListener("click", educationTabClicked);
    contact_tab.addEventListener("click", projectTabClicked);

    //hide the image that we only show on the about me page
    //document.getElementById("aimg").style.visibility = "hidden";
}

//handles updating the main dom when general info is clicked
function generalInfoTabClicked(){
    /*<h1 id="ArticleHeader">General Info</h1>
    <p id="POne">I am a software developer born and raised in the steel city of Pittsburgh. I graduate in April of 2023</p>
    <p id="PTwo">Feel free to check out the side options to learn more about me.</p>
    <p id="PThree"></p> */
    //update current side option text and the others as well
    document.getElementById("SideOne").innerHTML = "- General Info";
    document.getElementById("SideTwo").innerHTML = "+ Education";
    document.getElementById("SideThree").innerHTML = "+ Projects";

    //need to clear out two other divs here
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    //check if the two divs have children to remove
    if(div2.childElementCount > 0){
        //if it has kids replace with an empty list
        div2.replaceChildren();
    }
    if(div3.childElementCount > 0){
        div3.replaceChildren();
    }

    //need to check and see if the sub options are already up
    const gen_info_div = document.getElementById("div1");
    if (gen_info_div.childElementCount < 1){
        //create new div to put the sub options in
        const divElement = document.createElement("div");
        divElement.setAttribute("id", "generalInfoDiv");

        //create new sub options to put under the header
        const sub_option_one = document.createElement("li");
        sub_option_one.setAttribute("id", "SideOneSubOptionOne");
        sub_option_one.setAttribute("type", "li");
        sub_option_one.setAttribute("class", "sO1");
        sub_option_one.innerHTML = "About Me";
        sub_option_one.addEventListener("click", aboutTabClicked);

        const sub_option_two = document.createElement("li");
        sub_option_two.setAttribute("id", "SideOneSubOptionTwo");
        sub_option_two.setAttribute("type", "li");
        sub_option_two.setAttribute("class", "sO2");
        sub_option_two.innerHTML = "Contact Me";
        sub_option_two.addEventListener("click", contactTabClicked);

        //append both sub options to the div
        divElement.appendChild(sub_option_one);
        divElement.appendChild(sub_option_two);

        //finally append the div to the empty div in the front under - General Info
        gen_info_div.appendChild(divElement);
    }    
}

function aboutTabClicked(){
    //update page to be the about me 
    const title_header = document.getElementById("TitleHeader");
    title_header.innerHTML = "About Me";

    const article_header = document.getElementById("ArticleHeader");
    article_header.innerHTML = "About Me"

    const paragraph_one = document.getElementById("POne");
    const paragraph_two = document.getElementById("PTwo");
    //const article_picture = document.getElementById("aimg");
    const paragraph_three = document.getElementById("PThree");

    paragraph_one.innerHTML = "I am a software developor born and raised in Pittsburgh. I have been luckily enough to get experience with a wide range of different languages and tools.";
    paragraph_two.innerHTML = "My goal is to be able to develop on the backend of applications.";
    paragraph_three.innerHTML = ""

    //article_picture.style.visibility = "visible";
}

//handles updating the main dom when education info is clicked
function educationTabClicked(){

}

//handles updating the main dom when project info is clicked
function projectTabClicked(){

}