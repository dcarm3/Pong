let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let vxBolinha = 10;
let width = 1500;
let vyBolinha = 10;
let heigth = 680;
let raio = diametro / 2;
let x = 10;
let y = 150;
let comprimento = 10;
let largura = 100;
let x2 = 1480;
let y2 = 150;
let vY2 = 25;
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
    createCanvas(width, heigth);
}

function draw() {
    background(0);
    criarBolinha();
    incluiPlacar();

    function criarBolinha() {
        circle(xBolinha, yBolinha, diametro);
    }

    xBolinha += vxBolinha;
    yBolinha += vyBolinha;

    if (yBolinha + raio > heigth || yBolinha - raio < 0) {
        vyBolinha *= -1;
    }

    function reiniciaBola() {
        if (xBolinha + raio > width || xBolinha - raio < 0) {
            xBolinha = width / 2;
            yBolinha = heigth / 2;
            vxBolinha *= -1;
        }
    }

    // adiciona ponto e reseta a bola
    if (xBolinha + raio > width) {
        meusPontos += 1;
        reiniciaBola();
    } else if (xBolinha - raio < 0) {
        pontosDoOponente += 1;
        reiniciaBola();
    }



    //colisao da bola com a raquete
    if (
        xBolinha - raio < x + comprimento &&
        yBolinha > y && yBolinha < y + largura
    ) {
        vxBolinha *= -1;
        xBolinha = x + comprimento + raio;
    }


    if (
        xBolinha + raio > x2 &&
        yBolinha > y2 && yBolinha < y2 + largura
    ) {
        vxBolinha *= -1;
        xBolinha = x2 - raio;
    }

    //raquete 

    rect(x, y, comprimento, largura);

    if (keyIsDown(UP_ARROW) === true && y > 0) {
        y -= 10;
    }

    if (keyIsDown(DOWN_ARROW) === true && y < heigth - largura) {
        y += 10;
    }

    //Raquete adversária

    rect(x2, y2, comprimento, largura);

    y2 += vY2;

    if (y2 <= 0 || y2 >= heigth - largura) {
        vY2 *= -1;
    }

    function incluiPlacar() {
        fill(255);
        textSize(42);
        textAlign(CENTER);
        text(meusPontos, width / 2 - 50, 50);
        text(pontosDoOponente, width / 2 + 50, 50);
    }
}