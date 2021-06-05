
let projects = [];
projects[0] =
    {
        title: "self_introduction",
        summary: "this is the page contain my experience",
        description: "I still got a long way to roll",
        project_type: "is about Computer Graphics",
        hyperlink: "html/self_introduction.html"
    };
projects[1] =
    {
        title: "index",
        summary: "this is the page contain the welcome page",
        description: "I still got a long way to roll",
        project_type: "since all the project is within the self_introduction, there is no other project page",
        hyperlink: "html/index.html"
    }


function print_project_info()
{
    console.log(projects[0]);
    console.log(projects[1]);
}

$(document).ready(function ()
{
    $("#toggle").click(function ()
    {
        $("div#toggle p").toggle();
    })
})

$(document).ready(function ()
{
    $("#editable button").click(function ()
    {
        init();
    })
})

function init()
{
    $("div#editable p").empty();
    $("div#editable p#title").append("title: " + projects[0].title);
    $("div#editable p#summary").append("summary: " + projects[0].summary);
    $("div#editable p#description").append("description: " + projects[0].description);
    $("div#editable p#project_type").append("project type: " + projects[0].project_type);
}

// init();
print_project_info();
JSON.parse(projects[0]);