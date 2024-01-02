
var blocoA = document.getElementById('troca-A')
var blocoB = document.getElementById('troca-B')
var textCont = document.getElementById('text-cont')

//Sound Effects 
let audio = new Audio('sound1.mp3')
let HUD = new Audio('FuturisticHUD.mp3')
let sound = new Audio('Cut_sound2.mp3')

function clickContinuar(){
    
audio.play();

switch (blocoA.style.display) {
  case 'block':
    blocoB.style.display = 'block';
    blocoA.style.display = 'none';
    textCont.innerHTML = 'Clique e volte o texto';
    break;
  default:
    blocoA.style.display = 'block';
    blocoB.style.display = 'none';
    textCont.innerHTML = 'Clique e continue lendo';
    break;
}

}

//funções de sounds effects
function mouseEnter() {
    HUD.play()
}
function clickTroca() {
    var botao1 = document.getElementById('Butao-norm1')
    var botao2 = document.getElementById('Butao-norm2')
    var Text = document.getElementById('Text')
    var TextH = document.getElementById('TextH')
    audio.play()
    if (botao1.style.display == 'inline-block') {
        botao1.style.display = 'none'
        botao2.style.display = 'inline-block'
        TextH.innerHTML = 'Motos Esportivas Cyberpunk'
        Text.innerHTML = ' A fusão de tecnologia e velocidade redefine o conceito de pilotagem. Visualize motos sem marchas atingindo velocidades incríveis, enquanto os pilotos são firmemente conectados por campos magnéticos ou dispositivos aplicados, garantindo estabilidade acima dos 500 km/h. Adote um design Punk agressivo para uma estética verdadeiramente impactante.'
    } else {
        botao1.style.display = 'inline-block'
        botao2.style.display = 'none'
        TextH.innerHTML = 'Aeromotos no Futuro Cyberpunk'
        Text.innerHTML = 'Em um cenário cyberpunk, as HoverBikes não são mais uma visão distante. Para superar os 600 km/h, a substituição das tradicionais rodas por jatos ou propulsores é essencial, proporcionando uma estabilidade excepcional ao piloto. A implementação de ímãs adiciona uma camada extra de estabilidade, elevando a experiência de pilotagem para novos patamares futuristas.'
    }
}
function clickTrocaB() {
    var botao1 = document.getElementById('Butao-norm1-A')
    var botao2 = document.getElementById('Butao-norm2-B')
    var Text = document.getElementById('Text-A')
    var TextH = document.getElementById('TextH-A')
    audio.play()
    if (botao1.style.display == 'inline-block') {
        botao1.style.display = 'none'
        botao2.style.display = 'inline-block'
        TextH.innerHTML = 'Cápsulas Motorizadas'
        Text.innerHTML = 'As Cápsulas Motorizadas representam um avanço revolucionário nas motocicletas, proporcionando uma experiência inovadora com velocidades superiores a 600 km/h. Ao encapsular o piloto, essas máquinas oferecem conforto e segurança, eliminando a pressão do ar. Além de redefinir a pilotagem, elas introduzem a capacidade de voar, transcendo ambientes terrestres. No cenário cyber, essas cápsulas prometem não apenas revolucionar a mobilidade, mas também encapsular a essência futurista e cyberpunk das viagens sobre duas rodas.'
    } else {
        botao1.style.display = 'inline-block'
        botao2.style.display = 'none'
        TextH.innerHTML = 'HackRides: Navegando pelo Ciberespaço Urbano'
        Text.innerHTML = 'Em um futuro cyberpunk, as HackRides se destacam como ferramentas cruciais para os hábeis hackers urbanos. Estas motos, equipadas com sistemas de hacking integrados, oferecem mobilidade ágil e discreta, permitindo que especialistas em cibersegurança atravessem rapidamente os intricados corredores digitais das megacidades. Além de contornar barreiras digitais e interferir em sistemas de segurança, as HackRides representam uma simbiose entre estética cyberpunk e a habilidade essencial para desbravar os desafios tecnológicos das metrópoles futuristas. Em um cenário distópico, essas máquinas não são apenas veículos, mas símbolos de resistência e destreza no universo cibernético hostil das megacidades do amanhã.'
    }
}
function extra() {
    var asideA = document.getElementById('aside-A')
    var asideB = document.getElementById('aside-B')
    var back = document.getElementById('web-aside')
    
    sound.play()
    if (asideA.style.display == 'block') {
        asideA.style.display = 'none'
        asideB.style.display = 'block'
        back.style.background = "url('blade-runner.jpg')"
        back.style.backgroundSize = 'cover'
        back.style.backgroundRepeat = 'no-repeat'
        back.style.backgroundPosition = 'center bottom'
    }else {
        asideA.style.display = 'block'
        asideB.style.display = 'none'
        back.style.background = "url('Cyberpunk.jpg')"
        back.style.backgroundSize = 'cover'
        back.style.backgroundRepeat = 'no-repeat'
        back.style.backgroundPosition = 'center bottom'
    }
}
   const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    let currentSlide = 0;
    function showSlide(index) {
      const newPosition = -index * slideWidth;
      slides.style.transform = `translateX(${newPosition}px)`;
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.children.length;
      showSlide(currentSlide);
    }
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.children.length) % slides.children.length;
      showSlide(currentSlide);
    }
    // Navegação automática
    setInterval(nextSlide, 3000);