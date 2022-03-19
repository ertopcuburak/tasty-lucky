import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MealApiHandlerService } from '../../services/meal-api-handler.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  randomMeal:any;
  translatedInstructions:string='';

  subscriptions:Subscription[] = [];
  isLoading:boolean = false;

  materialsArr:number[] = [];
  materialsStr:string = '';

  translatedMaterials:string = '';

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  constructor(private mealApiHandler:MealApiHandlerService) { }
  
  ngOnInit(): void {
    this.setMaterialsArr();
    this.subscriptions.push(this.mealApiHandler.randomMeal.subscribe(data =>{
      this.materialsStr = '';
      if(data && data.strInstructions) {
        this.randomMeal = data;
        this.translatedInstructions = data.strInstructions;
        if(this.materialsArr && this.materialsArr.length === 20) {
          let index = 0;
          for(let item of this.materialsArr) {
            if(index !== 0 && this.randomMeal['strIngredient'+item] && this.randomMeal['strIngredient'+item].trim().length > 0) this.materialsStr += ', ';
            if(this.randomMeal['strIngredient'+item] && this.randomMeal['strIngredient'+item].trim().length > 0) this.materialsStr += this.randomMeal['strIngredient'+item];
            index++;
          }
          this.translatedMaterials = this.materialsStr;
        }
      }
      this.isLoading = false;
    }));
  }

  setMaterialsArr(){
    for(let i=1; i<21; i++) {
      this.materialsArr.push(i);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb=>sb.unsubscribe());
  }

  setRandomMeal(){
    this.isLoading = true;
    this.randomMeal = this.mealApiHandler.setRandomMeal();
  }

  downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(this.randomMeal.strMeal+'.pdf'); 
     
  }

  goToVideo(url: string){
    window.open(url, "_blank");
  }

}
