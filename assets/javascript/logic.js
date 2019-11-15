$(document).ready(function () {

    $("#aboutMeBtn").click(function () {
        scrollToAbout();
    });

    $("#myPort").click(function () {
        scrollToPort();
    });



    function scrollToAbout() {
        let elmnt1 = document.getElementById("aboutSection");
        elmnt1.scrollIntoView();
    }

    function scrollToPort() {
        let elmnt2 = document.getElementById("portSection");
        elmnt2.scrollIntoView();
    }


    // let aboutMeTxt = '<div class="container">' + '<div class="row aMsection justify-content-center">'
    //     + '<div class="col-md-6 aboutMe">' +
    //     '<img src="assets/images/meSitting.PNG" alt="Juan Sitting for Interview" style="width:325px;height:325px;">'
    //     + '</div>' + '<div class="col-md-6 aboutMeTxt">' + '<h3 class="character">Innovative | Entrepreneurial | Committed</h3>'
    //     + '<p>From creating wellness programs to developing instructional products,the one true thing that describes me well is...I\'M A CREATOR.</p>'
    //     + '<p>As the Founder of Primal Platoon, Inc., I pioneered many wellness solutions that were implemented by various organizations. </p>'
    //     + '<p>Today, I\'m an aspiring full stack software developer with one main goal...To work in a fast-paced development team where my unique skills and experiences can be leveraged to fulfill team goals.</p>'
    //     + '<p>I spend my down time working on digital tools that integrate my software development skills with my nutrition education background. I live in Marlborough, MA with my wife, Daisy, and two children.</p>'
    //     + '</div>' + '</div>' + '<br>' + '<div class="row">' + '<div class="col-md">'
    //     + '<a href="index.html" target="_blank"><button type="button" class="btn btn-outline-light" id="homeBtn">Home</button></a>'
    //     + '<button type="button" class="btn btn-outline-light bg-success" id="myProj">My Projects</button>'
    //     + '</div>' + '</div>' + '</div>';



    // function aboutMe() {
    //     document.getElementById("disappear").innerHTML = "";
    //     document.getElementById("yes").innerHTML = aboutMeTxt;

    // }   

});