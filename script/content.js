
let projects = [];
let json_proj = [];
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
    };

function get_info()
{
    $.getJSON("../text/project_info", function(data)
    {
        $.each(data, function (i, item)
        {
            json_proj.push(item);
        })
    })
    fresh();
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

function fresh()
{
    // $("div#editable p").empty();
    // $("div#editable p#title").append("title: " + projects[0].title);
    // $("div#editable p#summary").append("summary: " + projects[0].summary);
    // $("div#editable p#description").append("description: " + projects[0].description);
    // $("div#editable p#project_type").append("project type: " + projects[0].project_type);
    $("div#result p").empty();
    $("div#result p#title").append("<em>title: </em>" + json_proj[0].title);
    $("div#result p#summary").append("<em>summary: </em>" + json_proj[0].summary);
    $("div#result p#description").append("<em>description: </em>" + json_proj[0].description);
    $("div#result p#project_type").append("<em>project type: </em>" + json_proj[0].project_type);
}

function edit()
{
    json_proj[0].title=$("#text_title").val();
    json_proj[0].summary=$("#text_sum").val();
    json_proj[0].description=$("#text_desc").val();
    json_proj[0].project_type=$("#text_proj_type").val();
    fresh();
}

print_project_info();
get_info();
console.log(json_proj);