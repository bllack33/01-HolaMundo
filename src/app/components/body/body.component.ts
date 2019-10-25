import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    mostrar = true;

    frase: any ={
        mensaje: 'un gran poder requeire una gran responsabilidad',
        autor: 'Ben Parquer'
    };

    personajes: string[] = ['spiderman', 'venom','superman'];

}