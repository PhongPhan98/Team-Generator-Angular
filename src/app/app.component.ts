import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newNemberName:string = "";
  members:string[] = [];
  errorMessage: string = "";
  numOfTeams:number | "" = "";
  teams: string[][] = []

  onInput(member:string){
    this.newNemberName = member;
  }
  
  addMember(){
    if (this.newNemberName == null || this.newNemberName == ""){
      this.errorMessage = "Name can't be empty!"
      return;
    }
    this.members.push(this.newNemberName);
    this.newNemberName = "";
    this.errorMessage = "";
  }

  onNumberOfTeamsInput(numberOfTeam:string){
    this.numOfTeams = Number(numberOfTeam)
  }

  generateTeams(){

    this.teams = []

    if (! this.numOfTeams || this.numOfTeams <= 0){
      this.errorMessage = "Invalid number of teams";
      return;
    }
    
    const allMember = [...this.members];


    if(this.members.length < this.numOfTeams){
      this.errorMessage = "Not enough members";
      return;
    }
    this.errorMessage = "";

    while(allMember.length > 0){
      for(let i = 0; i <  this.numOfTeams; i++){
        const randomIndex =  Math.floor(Math.random() * allMember.length); 
        const member = allMember.splice(randomIndex, 1)[0];
        if(!member) break;
        if (this.teams[i]){
          this.teams[i].push(member)
        }
        else{
          this.teams[i] = [member]
        }
      }
    }

    console.log( this.teams);
    this.members = [];
    this.numOfTeams = "";

  }
}
