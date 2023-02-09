"use strict";
let dep
let res3
let res4
let res5
let res6
let data3
let data4
let data5
let data6
let back_to_main_page = true

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./data/4.json", function (text) {
    data3 = JSON.parse(text);
});
readTextFile("./data/6.json", function (text) {
    data6 = JSON.parse(text);
});


function changeBackground(color) {
    document.body.style.background = color;
}

let next0 = document.getElementById("next0")
next0.addEventListener("click", () => {
    display("s16")
    changeBackground('#121212')
})

let next1 = document.getElementById("next1")
next1.addEventListener("click", () => {
    display("s3")
})

let btns3 = document.getElementsByClassName('btn3')
for (let btn of btns3) {
    if (btn.dataset.valid == "true") {
        btn.addEventListener('click', () => {
            btn.style.backgroundColor = 'green'
            setTimeout(() => {
                display("s4_2")
                changeBackground('aliceblue')
            }, 2000)
        })
    } else {
        btn.addEventListener('click', () => {
            btn.style.backgroundColor = 'red'
            for (let btn_tmp of btns3) {
                if (btn_tmp.dataset.valid == 'true') {
                    btn_tmp.style.backgroundColor = 'lightgreen'
                }
            }
            setTimeout(() => {
                display("s4_1")
                changeBackground('#121212')
            }, 2000)
        })
    }
}

let next4_1 = document.getElementById("next4_1")
next4_1.addEventListener("click", () => {
    display("s5")
    changeBackground('#121212')
})

let next4_2 = document.getElementById("next4_2")
next4_2.addEventListener("click", () => {
    display("s5")
    changeBackground('#121212')
})

paper.install(window);
paper.setup("canvas");

let path;
let isDrawing = false;

view.onMouseDown = (event) => {
    isDrawing = true;
    path = new Path();
    path.strokeColor = "white";
    path.smoothness = 1;
    path.strokeWidth = 5;
    path.add(event.point);
};

view.onMouseDrag = (event) => {
    if (!isDrawing) return;
    path.add(event.point);
};

view.onMouseUp = () => {
    isDrawing = false;
    display("s6")
};


let next6 = document.getElementById("next6")
next6.addEventListener("click", () => {
    display("s7")
    changeBackground('#121212')
})

let next7 = document.getElementById("next7")
next7.addEventListener("click", () => {
    dep = document.getElementById('dep').value
    display("s8")
    changeBackground('#121212')
    initRepsDep()
})

function initRepsDep() {
    for (let key in data3) {
        if (data3[key]["departement"] == dep && data3[key]["unite"] == "Animaux-Eq") {
            res3 = data3[key]
            break
        }
    }

    for (let key in data6) {
        if (data6[key]["departement"] == dep) {
            res6 = data6[key]
            break
        }
    }

    let btns8 = document.getElementsByClassName("btn8")
    for (let btn8 of btns8) {
        if (btn8.dataset.value == res3["type"]) {
            btn8.addEventListener('click', () => {
                btn8.style.backgroundColor = 'green'
                setTimeout(() => {
                    display("s9_2")
                    changeBackground('aliceblue')
                }, 2000)
            })
        } else {
            btn8.addEventListener('click', () => {
                btn8.style.backgroundColor = 'red'
                for (let btn_tmp of btns8) {
                    if (btn_tmp.dataset.value == res3["type"]) {
                        btn_tmp.style.backgroundColor = 'lightgreen'
                    }
                }
                setTimeout(() => {
                    display("s9_1")
                    changeBackground('#121212')
                }, 2000)
            })
        }
    }

    let texts9 = document.getElementsByClassName("text9")
    let qt = res3['quantite_mean']
    let str
    if (res3["type"] == "VOLAILLES") {
        str = "Dans votre département, ce sont les volailles qui sont les plus nombreuses parmi les animaux d’élevage. On en dénombre pas moins de " + qt + " dans les [Entrer un chiffre] fermes-usines de ce département."
    } else if (res3["type"] == "PORCS") {
        str = "Dans votre département, ce sont les porcs qui sont les plus nombreux parmi les animaux d’élevage. On en dénombre pas moins de " + qt + " dans les [Entrer un chiffre] fermes-usines de ce département."
    } else if (res3["type"] == "BOVINS") {
        str = "Dans votre département, ce sont les bovins qui sont les plus nombreux parmi les animaux d’élevage. On en dénombre pas moins de " + qt + " dans les [Entrer un chiffre] fermes-usines de ce département"
    } else {
        str = "Dans votre département, ce sont les moutons qui sont les plus nombreux parmi les animaux d’élevage. On en dénombre pas moins de " + qt + " dans les [Entrer un chiffre] fermes-usines de ce département"
    }
    for (let text of texts9) {
        text.textContent = str
    }

    let next9_1 = document.getElementById("next9_1")
    next9_1.addEventListener("click", () => {
        display("s10")
        changeBackground('#121212')
    })

    let next9_2 = document.getElementById("next9_2")
    next9_2.addEventListener("click", () => {
        display("s10")
        changeBackground('#121212')
    })

    let next10 = document.getElementById("next10")
    next10.addEventListener("click", () => {
        display("s11_1")
        changeBackground('#121212')
    })

    let next11_1 = document.getElementById("next11_1")
    next11_1.addEventListener("click", () => {
        display("s12")
        changeBackground('#121212')
    })

    let next11_2 = document.getElementById("next11_2")
    next11_2.addEventListener("click", () => {
        display("s12")
        changeBackground('#121212')
    })


    let btns12 = document.getElementsByClassName("btn12")
    for (let btn12 of btns12) {
        btn12.addEventListener('click', () => {
            btn12.style.backgroundColor = 'red'
            setTimeout(() => {
                display("s13_1")
                changeBackground('#121212')
            }, 2000)
        })
    }

    let next13_1 = document.getElementById("next13_1")
    next13_1.addEventListener("click", () => {
        display("s14")
        changeBackground('#121212')
    })

    let next13_2 = document.getElementById("next13_2")
    next13_2.addEventListener("click", () => {
        display("s14")
        changeBackground('#121212')
    })

    if (res6['nb_mise_en_demeure'] != 0) {
        let texts15 = document.getElementsByClassName("text15")
        for (let text of texts15) {
            text.textContent = res6['nb_mise_en_demeure'] + " mises en demeure ont été prononcées à l’encontre des fermes-usines du " + dep + ". L’évolution de ce chiffre peut être surveillée grâce à la base de données Géorisques du ministère de la Transition écologique et de la cohésion des territoires. Disclose vous explique comment faire dans son Guide du lanceur d’enquêtes."
        }
    }

    let output14 = document.getElementById("demo14");
    let next14 = document.getElementById("next14");
    next14.addEventListener("click", () => {
        if (output14.textContent == res6['nb_mise_en_demeure']) {
            display("s15_2")
            changeBackground('aliceblue')
        } else {
            display("s15_1")
            changeBackground('#121212')
        }
    })

    let next15_1 = document.getElementById("next15_1")
    next15_1.addEventListener("click", () => {
        display("s16")
        changeBackground('aliceblue')
    })

    let next15_2 = document.getElementById("next15_2")
    next15_2.addEventListener("click", () => {
        display("s16")
        changeBackground('aliceblue')
    })
}

let next16 = document.getElementById("next16")
    next16.addEventListener("click", () => {
        window.open('https://disclose.ngo/fr/article/disclose-partage-ses-methodes-et-outils-pour-enqueter', '_blank');
    })

let about_s0 = document.getElementById("about-s0")
about_s0.addEventListener("click", () => {
    display("s17")
})

let about_s16 = document.getElementById("about-s16")
about_s16.addEventListener("click", () => {
    back_to_main_page = false
    display("s17")
})

let back = document.getElementById("back")
back.addEventListener("click", () => {
    if (back_to_main_page) {
        display("s0")
    } else {
        display("s16")
    }      
})

function display(id) {
    let slides = document.getElementsByClassName("slides")
    for (let slide of slides) {
        slide.style.display = 'none'
    }
    let currentSlide = document.getElementById(id)
    currentSlide.style.removeProperty('display')
}

// Wait for the content to preload and display 1st slide
// Here we simulate a loading time of one second
setTimeout(() => {
    // fade out the loader "slide"
    // and send it to the back (z-index = -1)
    anime({
        delay: 1000,
        targets: '#loader',
        opacity: '0',
        'z-index': -1,
        easing: 'easeOutQuad',
    });
    // Init first slide
}, 500);

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});
