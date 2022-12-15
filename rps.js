const comp=document.getElementById("computer-choice");
const user=document.getElementById("user-choice");
const result=document.getElementById("res");
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");
const res=document.getElementById("res");
const btn=document.querySelectorAll("button");

let userchoice;
let compchoice;
let ans;

rock.addEventListener('click',function rockc(){
    userchoice="rock";
    compc();
    user.innerHTML=userchoice.toUpperCase();
    resulttime();
});
paper.addEventListener('click',function paperc(){
    userchoice="paper";
    compc();
    user.innerHTML=userchoice.toUpperCase();
    resulttime();
});
scissors.addEventListener('click',function scissorsc(){
    userchoice="scissors";
    compc();
    user.innerHTML=userchoice.toUpperCase();
    resulttime();
});

function compc(){
    compchoice=Math.ceil((Math.random())*3);
    if(compchoice==1) compchoice="rock";
    if(compchoice==2) compchoice="paper";
    if(compchoice==3) compchoice="scissors";
    comp.innerHTML=compchoice.toUpperCase();
}

function resulttime(){
    if(compchoice==userchoice)
        ans="It's Draw :|";
    else if(compchoice=="rock" && userchoice=="scissors")
        ans="You Lose :(";
    else if(compchoice=="rock" && userchoice=="paper")
        ans="You Win!! :)";
    else if(compchoice=="paper" && userchoice=="scissors")
        ans="You Win!! :)";
    else if(compchoice=="paper" && userchoice=="rock")
        ans="You Lose :(";
    else if(compchoice=="scissors" && userchoice=="paper")
        ans="You Lose!! :(";
    else if(compchoice=="scissors" && userchoice=="rock")
        ans="You Win!! :)";
    else 
        ans="Flop Game :/";

    res.innerHTML=ans.toLocaleUpperCase();
}

