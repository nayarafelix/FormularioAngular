import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mainForm:FormGroup;
  generos:Array<Object> = [];
  cores:Array<Object> = [];
  urlPaises:string = "https://restcountries.eu/rest/v2/all";
  paises:any = [];

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient
    ) {

    this.generos = [
      {nome: "Masculino", valor: "m"},
      {nome: "Feminino", valor: "f"},
      {nome: "Outros", valor: "o"}
    ]
  
    this.cores = [
      {nome: "Vermelho", hex: "#FF2F2F"},
      {nome: "Amarelo", hex: "#FFD400"},
      {nome: "Azul", hex: "#007EFF"},
      {nome: "Rosa", hex: "#E400FF"},
      {nome: "Verde", hex: "#008246"}
    ]

    this.mainForm = formBuilder.group({
      nome: '',
      sobrenome: '',
      email: '',
      genero: '',
      corFavorita: '',
      cpf: '',
      pais: ''
    })
  }

  async ngOnInit() {
    var paises = await this.http.get(this.urlPaises).toPromise();
    this.paises = paises;
  }

}
