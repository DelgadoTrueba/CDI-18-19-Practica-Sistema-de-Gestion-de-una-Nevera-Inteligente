let state = [
    {
        id: "agua",
        nombre: "Agua", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/agua.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/agua-cruz.png", 
            },
            leftSide: {
                rutaOk:"assets/img/leftSide/agua.png", 
                rutaEmpty:"assets/img/leftSide/agua-cruz.png", 
            }
        }
    },
    {
        id: "broccoli",
        nombre: "Broccoli", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/broccoli.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/broccoli-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "carne",
        nombre: "Carne", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/carne.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/carne-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "carne-congelada",
        nombre: "Carne Congelada",
        cantidad: 0,
        cajon: 2,
        img: {
            freezer: {
                rutaOk:"assets/img/freezer/carne.png", 
                rutaEmpty:"assets/img/freezer/carne-cruz.png", 
            }
        }
    },
    {
        id: "cereza",
        nombre: "Cereza", 
        cantidad: 0,
        img: {
            allFridge:{
                rutaOk:"assets/img/all-fridge-con-alimentos/cherry.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/cherry-cruz.png", 
            }, 
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "churros",
        nombre: "Churros", 
        cantidad: 0,
        cajon: 0,
        img: {
            freezer: {
                rutaOk:"assets/img/freezer/churros.png", 
                rutaEmpty:"assets/img/freezer/churros-cruz.png", 
            }
        }
    },
    {
        id: "cocaCola",
        nombre: "CocaCola",
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/coca-cola.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/coca-cola-cruz.png", 
            },
            rightSide: {
                rutaOk:"assets/img/rightSide/coca-cola.png", 
                rutaEmpty:"assets/img/rightSide/coca-cola-cruz.png", 
            }
        }
    },
    {
        id: "coliflor",
        nombre: "Coliflor", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/coliflor.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/coliflor-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "fanta",
        nombre: "Fanta",  
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/fanta.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/fanta-cruz.png",
            },
            rightSide: {
                rutaOk:"assets/img/rightSide/fanta.png", 
                rutaEmpty:"assets/img/rightSide/fanta-cruz.png", 
            }
        }
    },
    {
        id: "helado",
        nombre: "Helado", 
        cantidad: 0,
        cajon: 0,
        img: {
            freezer: {
                rutaOk:"assets/img/freezer/helado.png", 
                rutaEmpty:"assets/img/freezer/helado-cruz.png", 
            }
        }
    },
    {
        id: "huevos",
        nombre: "Huevos", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/huevo.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/huevo-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "leche",
        nombre: "Leche", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/leche.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/leche-cruz.png", 
            },
            leftSide: {
                rutaOk:"assets/img/leftSide/leche.png", 
                rutaEmpty:"assets/img/leftSide/leche-cruz.png", 
            }
        }
    },
    {
        id: "mantequilla",
        nombre: "Mantequilla", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/mantequilla.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/mantequilla-cruz.png", 
            },
            leftSide: {
                rutaOk:"assets/img/leftSide/mantequilla.png", 
                rutaEmpty:"assets/img/leftSide/mantequilla-cruz.png", 
            }
        }
    },
    {
        id: "manzana",
        nombre: "Manzana", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/manzana.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/manzana-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "melon",
        nombre: "Melon", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/melon.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/melon-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "patatas-congeladas",
        nombre: "Patatas Congeladas", 
        cantidad: 0,
        cajon: 1,
        img: {
            freezer: {
                rutaOk:"assets/img/freezer/patatas.png", 
                rutaEmpty:"assets/img/freezer/patatas-cruz.png", 
            }
        }
    },
    {
        id: "pepino",
        nombre: "Pepino", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/pepino.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/pepino-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "pera",
        nombre: "Pera", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/pera.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/pera-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "pescado",
        nombre: "Pescado", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/pescado.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/pescado-cruz.png", 
            },
            main: {
                rutaOk:"assets/img/main/pescado.png", 
                rutaEmpty:"assets/img/main/pescado-cruz.png",
            }
        }
    },
    {
        id: "pescado-congelado",
        nombre: "Pescado Congelado", 
        cantidad: 0,
        cajon: 2,
        img: {
            freezer: {
                rutaOk:"assets/img/freezer/pescado.png", 
                rutaEmpty:"assets/img/freezer/pescado-cruz.png", 
            }
        }
    },
    {
        id: "pimiento",
        nombre: "Pimiento", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/pimiento.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/pimiento-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "pizza-congelada",
        nombre: "Pizza Congelada", 
        cantidad: 0,
        cajon: 1,
        img: {
            freezer: {
                rutaEmpty:"assets/img/freezer/pizza-cruz.png",
                rutaOk:"assets/img/freezer/pizza.png", 
            }
        }
    },
    {
        id: "platano",
        nombre: "Platano", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/platano.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/platano-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "pollo",
        nombre: "Pollo", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/pollo.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/pollo-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "queso",
        nombre: "Queso", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/queso.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/queso-cruz.png", 
            },
            rightSide: {
                rutaOk:"assets/img/rightSide/queso.png", 
                rutaEmpty:"assets/img/rightSide/queso-cruz.png", 
            }
        }
    },
    {
        id: "salchicha",
        nombre: "Salchicha", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/salchicha.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/salchicha-cruz.png", 
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "salsaDeTomate",
        nombre: "SalsaDeTomate", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/salsa-tomate.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/salsa-tomate-cruz.png", 
            },
            leftSide:{
                rutaOk:"assets/img/leftSide/salsaTomate.png", 
                rutaEmpty:"assets/img/leftSide/salsaTomate-cruz.png", 
            }
        }
    },
    {
        id: "sprite",
        nombre: "Sprite", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/sprite.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/sprite-cruz.png", 
            },
            rightSide: {
                rutaOk:"assets/img/rightSide/sprite.png", 
                rutaEmpty:"assets/img/rightSide/sprite-cruz.png", 
            }
        }
    },
    {
        id: "tarta",
        nombre: "Tarta", 
        img: {
            freezer: {
                rutaOk:"assets/img/freezer/tarta.png", 
                rutaEmpty:"assets/img/freezer/tarta-cruz.png", 
            }
        },
        cantidad: 0,
        cajon: 0
    },
    {
        id: "verduras-congeladas",
        nombre: "Verduras Congeladas",  
        cantidad: 0,
        cajon: 1,
        img: {
            freezer: {
                rutaOk:"assets/img/freezer/verduras.png", 
                rutaEmpty:"assets/img/freezer/verdura-cruz.png",
            }
        }
    },
    {
        id: "yogurt",
        nombre: "Yogurt", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/yogurt.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/yogurt-cruz.png", 
            },
            rightSide: {
                rutaOk:"assets/img/rightSide/yogurt.png", 
                rutaEmpty:"assets/img/rightSide/yogurt-cruz.png", 
            }
        }
    },
    {
        id: "zanahoria",
        nombre: "Zanahoria",  
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/zanahoria.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/zanahoria-cruz.png",
            },
            main: {
                rutaOk:"", 
                rutaEmpty:"", 
            }
        }
    },
    {
        id: "zumo",
        nombre: "Zumo de Naranja", 
        cantidad: 0,
        img: {
            allFridge: {
                rutaOk:"assets/img/all-fridge-con-alimentos/zumo.png", 
                rutaEmpty:"assets/img/all-fridge-con-alimentos/zumo-cruz.png", 
            },
            rightSide:{
                rutaOk:"assets/img/rightSide/zumo.png", 
                rutaEmpty:"assets/img/rightSide/zumo-cruz.png", 
            }
        }
    },
];

function isContent(id: string, ids:Array<any>){
    for(let i=0; i<ids.length; i++){
        if(ids[i] === id){
            return true;
        }
    }
    return false;
}

export function alimentosMainFridge(){
    let ids = [
        "broccoli",
        "carne",
        "cereza",
        "coliflor",
        "huevos",
        "manzana",
        "melon",
        "pepino",
        "pera",
        "pescado",
        "pimiento",
        "platano",
        "pollo",
        "salchicha",
        "zanahoria",
        ]
    return state.filter( element => isContent(element.id, ids) );
}

export function alimentosAllFridge(){
    let ids = [
        "agua",
        "broccoli",
        "carne",
        "cereza",
        "cocaCola",
        "coliflor",
        "fanta",
        "huevos",
        "leche",
        "mantequilla",
        "manzana",
        "melon",
        "pepino",
        "pera",
        "pescado",
        "pimiento",
        "platano",
        "pollo",
        "queso",
        "salchicha",
        "salsaDeTomate",
        "sprite",
        "yogurt",
        "zanahoria",
        "zumo"
        ]
    return state.filter( element => isContent(element.id, ids) );
}

export function alimentosLateralIzq(){
    let ids = [
        "agua",
        "leche",
        "mantequilla",
        "salsaDeTomate",
        ]
    return state.filter( element => isContent(element.id, ids) );
}

export function alimentosLateralDer(){
    let ids = [
        "cocaCola",
        "fanta",
        "queso",
        "sprite",
        "yogurt",
        "zumo"
        ]
    return state.filter( element => isContent(element.id, ids) );
}

export function alimentosFreezer(){
    let ids = [
        "carne-congelada",
        "churros",
        "helado",
        "patatas-congeladas",
        "pescado-congelado",
        "pizza-congelada",
        "tarta",
        "verduras-congeladas",
        ]
    return state.filter( element => isContent(element.id, ids) );
}