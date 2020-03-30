class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Métodos de instância
    aumentar() {
        this.volume += 1;
        return;
    } 
    diminuir() {
        this.volume -= 1;
        return;
    }
    //Método estático
    static trocaPilha() {
        console.log('Ok Vou trocar.')
    }

}
 const c1 = new ControleRemoto('LG');
 const c2 = new ControleRemoto('Samsung')
 c1.aumentar();
 c2.aumentar();
 console.log(c1);
 console.log(c2);
 ControleRemoto.trocaPilha();