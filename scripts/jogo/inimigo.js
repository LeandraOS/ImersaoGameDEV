class Inimigo extends Animacao{
  constructor(matriz, imagem, xTela, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite){
    super(matriz, imagem, xTela, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite)
    
    this.velocidade = 8;
  }
  move(){
    this.xTela = this.xTela - 10;
    if(this.xTela < -this.larguraPersonagem){
      this.xTela = width;
    }
  }
}
   