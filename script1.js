//Event binding: addEventListener,removeEventListener

// browser mein page par koi bhi harkat karo event raise ho jaayega

// kuch screen par ho aur aapko reaction dene ho to us waaqt aapko event handle karna aana chahiye

//event matlab hota hai koi action hua

//event listener ka matlab hai aapne koi action ka reaction diya

let h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
    h1.style.color = "red";
} )

